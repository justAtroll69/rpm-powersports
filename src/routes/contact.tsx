import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  ADDRESS_LINE,
  DIRECTIONS_URL,
  EMAIL,
  FACEBOOK_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";
import { CtaButtons } from "@/components/cta-bar";
import {
  CalendarIcon,
  CheckCircle2,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RPM Powersports | Screven, GA (912) 402-4308" },
      {
        name: "description",
        content:
          "Contact RPM Powersports — 583 Stanfield Rd, Screven, GA 31560. Call (912) 402-4308 or request service online.",
      },
      { property: "og:title", content: "Contact — RPM Powersports" },
      { property: "og:description", content: "Reach RPM Powersports in Screven, GA." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const serviceRequestSchema = z.object({
  fullName: z.string().trim().min(2, "Full name required").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Valid phone required")
    .max(30)
    .regex(/^[0-9()+\-.\s]+$/, "Invalid phone"),
  email: z.string().trim().email("Valid email required").max(200),
  vehicleYear: z.string().trim().min(2, "Year required").max(10),
  vehicleMake: z.string().trim().min(1, "Make required").max(60),
  vehicleModel: z.string().trim().min(1, "Model required").max(80),
  serviceNeeded: z.string().trim().min(2, "Service required").max(300),
  preferredDate: z.string().trim().min(1, "Date required").max(60),
  additionalComments: z.string().trim().max(2000).optional().or(z.literal("")),
});

function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [preferredDate, setPreferredDate] = useState<Date | undefined>();
  const [dateOpen, setDateOpen] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      fullName: String(fd.get("fullName") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      vehicleYear: String(fd.get("vehicleYear") ?? ""),
      vehicleMake: String(fd.get("vehicleMake") ?? ""),
      vehicleModel: String(fd.get("vehicleModel") ?? ""),
      serviceNeeded: String(fd.get("serviceNeeded") ?? ""),
      preferredDate: preferredDate ? format(preferredDate, "PPP") : "",
      additionalComments: String(fd.get("additionalComments") ?? ""),
    };
    const parsed = serviceRequestSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string") errs[k] = i.message;
      });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setSubmitError(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/public/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      if (!json.success) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
      setPreferredDate(undefined);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setSubmitError(
        "We couldn't submit your request. Please call us or try again.",
      );
    }
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="carbon-grid absolute inset-0 opacity-60" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
            Contact <span className="text-primary">RPM Powersports</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Call the shop, get directions or send us a service request. We
            respond quickly during shop hours.
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl tracking-wide">Shop info</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Address</div>
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {ADDRESS_LINE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <a
                    href={PHONE_HREF}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all text-muted-foreground hover:text-foreground"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Facebook</div>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Follow us for updates & builds
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-sm border border-border/70 shadow-plate">
              <iframe
                title="Map to RPM Powersports"
                src={MAP_EMBED_URL}
                className="aspect-[4/3] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-sm border border-border/70 bg-card/60 p-6 sm:p-8 shadow-plate">
              <h2 className="font-display text-3xl tracking-wide">
                Request service
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your machine and what's going on — we'll get
                back to you fast.
              </p>

              {status === "sent" ? (
                <div className="mt-6 flex items-start gap-3 rounded-sm border border-primary/40 bg-primary/10 p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    Thank you! Your service request has been received. A member
                    of our team will contact you shortly.
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="mt-6 grid gap-4"
                  noValidate
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="fullName"
                      autoComplete="name"
                      error={errors.fullName}
                    />
                    <Field
                      label="Phone number"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      error={errors.phone}
                    />
                  </div>
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    error={errors.email}
                  />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field
                      label="Vehicle year"
                      name="vehicleYear"
                      placeholder="2018"
                      error={errors.vehicleYear}
                    />
                    <Field
                      label="Vehicle make"
                      name="vehicleMake"
                      placeholder="Polaris"
                      error={errors.vehicleMake}
                    />
                    <Field
                      label="Vehicle model"
                      name="vehicleModel"
                      placeholder="RZR 900"
                      error={errors.vehicleModel}
                    />
                  </div>
                  <Field
                    label="Service needed"
                    name="serviceNeeded"
                    placeholder="e.g. Full service, carb clean, powder coating"
                    error={errors.serviceNeeded}
                  />
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Preferred appointment date
                    </span>
                    <Popover open={dateOpen} onOpenChange={setDateOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "flex w-full items-center justify-between rounded-sm border border-border bg-background px-3 py-2.5 text-left text-sm text-foreground hover:border-primary/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                            !preferredDate && "text-muted-foreground/70",
                          )}
                        >
                          {preferredDate
                            ? format(preferredDate, "PPP")
                            : "Pick a date"}
                          <CalendarIcon className="ml-2 h-4 w-4 text-primary" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 pointer-events-auto"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={preferredDate}
                          onSelect={(d) => {
                            setPreferredDate(d);
                            setDateOpen(false);
                          }}
                          disabled={(d) =>
                            d <
                            new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.preferredDate ? (
                      <span className="text-xs text-primary">
                        {errors.preferredDate}
                      </span>
                    ) : null}
                  </label>
                  <Field
                    label="Additional comments"
                    name="additionalComments"
                    as="textarea"
                    rows={4}
                    error={errors.additionalComments}
                  />
                  {submitError ? (
                    <p className="text-sm text-primary">{submitError}</p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? "Submitting…" : "Submit Request"}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Prefer to talk? Call{" "}
                    <a
                      href={PHONE_HREF}
                      className="text-primary hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  placeholder,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}) {
  const shared =
    "w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          className={shared}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={shared}
        />
      )}
      {error ? <span className="text-xs text-primary">{error}</span> : null}
    </label>
  );
}