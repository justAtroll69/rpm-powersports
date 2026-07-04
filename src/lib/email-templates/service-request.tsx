import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

export interface ServiceRequestProps {
  fullName?: string
  phone?: string
  email?: string
  vehicleYear?: string
  vehicleMake?: string
  vehicleModel?: string
  serviceNeeded?: string
  preferredDate?: string
  additionalComments?: string
  submittedAt?: string
}

const ServiceRequestEmail = ({
  fullName = '—',
  phone = '—',
  email = '—',
  vehicleYear = '—',
  vehicleMake = '—',
  vehicleModel = '—',
  serviceNeeded = '—',
  preferredDate = '—',
  additionalComments = '—',
  submittedAt,
}: ServiceRequestProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New service request from {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={h1}>New Service Request</Heading>
          <Text style={subtle}>RPM Powersports</Text>
        </Section>

        <Section style={card}>
          <Row label="Full Name" value={fullName} />
          <Row label="Phone Number" value={phone} />
          <Row label="Email Address" value={email} />
          <Hr style={hr} />
          <Row label="Vehicle Year" value={vehicleYear} />
          <Row label="Vehicle Make" value={vehicleMake} />
          <Row label="Vehicle Model" value={vehicleModel} />
          <Hr style={hr} />
          <Row label="Service Needed" value={serviceNeeded} />
          <Row label="Preferred Appointment Date" value={preferredDate} />
          <Hr style={hr} />
          <Text style={label}>Additional Comments</Text>
          <Text style={comments}>{additionalComments}</Text>
        </Section>

        {submittedAt ? (
          <Text style={footer}>Submitted {submittedAt}</Text>
        ) : null}
      </Container>
    </Body>
  </Html>
)

const Row = ({ label: l, value }: { label: string; value: string }) => (
  <Section style={{ marginBottom: '10px' }}>
    <Text style={label}>{l}</Text>
    <Text style={value_}>{value}</Text>
  </Section>
)

export const template = {
  component: ServiceRequestEmail,
  subject: (data: Record<string, any>) =>
    `New Service Request — ${data.fullName || 'Customer'}`,
  displayName: 'Service Request Notification',
  to: 'rpmpowersports2024@gmail.com',
  previewData: {
    fullName: 'Jane Rider',
    phone: '(912) 555-0142',
    email: 'jane@example.com',
    vehicleYear: '2018',
    vehicleMake: 'Polaris',
    vehicleModel: 'RZR 900',
    serviceNeeded: 'Full service & carb clean',
    preferredDate: '2026-07-15',
    additionalComments: 'Runs rough at idle. Available weekdays after 3pm.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '600px', margin: '0 auto' }
const header = {
  borderBottom: '3px solid #dc2626',
  paddingBottom: '12px',
  marginBottom: '20px',
}
const h1 = {
  margin: '0',
  fontSize: '24px',
  color: '#111111',
  fontWeight: 700,
}
const subtle = {
  margin: '4px 0 0',
  fontSize: '12px',
  color: '#666666',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
}
const card = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '20px',
}
const label = {
  margin: '0',
  fontSize: '11px',
  color: '#6b7280',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  fontWeight: 600,
}
const value_ = {
  margin: '2px 0 0',
  fontSize: '15px',
  color: '#111111',
}
const comments = {
  margin: '4px 0 0',
  fontSize: '14px',
  color: '#111111',
  whiteSpace: 'pre-wrap' as const,
}
const hr = { borderColor: '#e5e7eb', margin: '14px 0' }
const footer = {
  fontSize: '11px',
  color: '#9ca3af',
  textAlign: 'center' as const,
  marginTop: '16px',
}