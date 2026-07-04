import * as React from 'react'
import { render } from 'react-email'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'RPM Powersports'
const SENDER_DOMAIN = 'notify.tannerwebsites.com'
const FROM_DOMAIN = 'tannerwebsites.com'

const schema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(30).regex(/^[0-9()+\-.\s]+$/),
  email: z.string().trim().email().max(200),
  vehicleYear: z.string().trim().min(2).max(10),
  vehicleMake: z.string().trim().min(1).max(60),
  vehicleModel: z.string().trim().min(1).max(80),
  serviceNeeded: z.string().trim().min(2).max(300),
  preferredDate: z.string().trim().min(1).max(60),
  additionalComments: z.string().trim().max(2000).optional().default(''),
})

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export const Route = createFileRoute('/api/public/service-request')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !supabaseServiceKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = schema.safeParse(body)
        if (!parsed.success) {
          return Response.json(
            { error: 'Invalid input', issues: parsed.error.issues },
            { status: 400 },
          )
        }
        const data = parsed.data

        const entry = TEMPLATES['service-request']
        if (!entry || !entry.to) {
          return Response.json({ error: 'Template not configured' }, { status: 500 })
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        const recipient = entry.to
        const normalizedRecipient = recipient.toLowerCase()
        const messageId = crypto.randomUUID()

        // Suppression check
        const { data: suppressed } = await supabase
          .from('suppressed_emails')
          .select('id')
          .eq('email', normalizedRecipient)
          .maybeSingle()
        if (suppressed) {
          return Response.json({ success: false, reason: 'email_suppressed' }, { status: 200 })
        }

        // Unsubscribe token (reuse or create)
        let unsubscribeToken: string
        const { data: existingToken } = await supabase
          .from('email_unsubscribe_tokens')
          .select('token, used_at')
          .eq('email', normalizedRecipient)
          .maybeSingle()
        if (existingToken && !existingToken.used_at) {
          unsubscribeToken = existingToken.token
        } else {
          unsubscribeToken = generateToken()
          await supabase
            .from('email_unsubscribe_tokens')
            .upsert(
              { token: unsubscribeToken, email: normalizedRecipient },
              { onConflict: 'email', ignoreDuplicates: true },
            )
          const { data: stored } = await supabase
            .from('email_unsubscribe_tokens')
            .select('token')
            .eq('email', normalizedRecipient)
            .maybeSingle()
          if (stored?.token) unsubscribeToken = stored.token
        }

        const templateData = {
          ...data,
          submittedAt: new Date().toLocaleString('en-US', {
            timeZone: 'America/New_York',
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        }

        const element = React.createElement(entry.component, templateData)
        const html = await render(element)
        const text = await render(element, { plainText: true })
        const subject =
          typeof entry.subject === 'function' ? entry.subject(templateData) : entry.subject

        await supabase.from('email_send_log').insert({
          message_id: messageId,
          template_name: 'service-request',
          recipient_email: recipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabase.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: recipient,
            reply_to: data.email,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            sender_domain: SENDER_DOMAIN,
            subject,
            html,
            text,
            purpose: 'transactional',
            label: 'service-request',
            idempotency_key: messageId,
            unsubscribe_token: unsubscribeToken,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: 'service-request',
            recipient_email: recipient,
            status: 'failed',
            error_message: 'Failed to enqueue email',
          })
          return Response.json({ error: 'Failed to send request' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})