import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Package, Phone, Wrench } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: "Order Parts | RPM Powersports — Screven, GA" },
      {
        name: "description",
        content:
          "Request ATV, side by side, jet ski and powersports parts from RPM Powersports in Screven, GA. Tell us what you need and we'll source it and quote you fast.",
      },
      { property: "og:title", content: "Parts — RPM Powersports" },
      {
        property: "og:description",
        content:
          "Request the parts you need — we source ATV, UTV and jet ski parts and get you a quote.",
      },
      { property: "og:url", content: "/parts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/parts" }],
  }),
  component: PartsPage,
});

const partsSchema = z.object({
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
  partName: z.string().trim().min(2, "Part name required").max(200),
  partNumber: z.string().trim().max(120).optional().or(z.literal("")),
  quantity: z.string().trim().min(1, "Quantity required").max(10),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  orderingAs: z.enum(["customer", "owner"]),
});

function PartsPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

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
      partName: String(fd.get("partName") ?? ""),
      partNumber: String(fd.get("partNumber") ?? ""),
      quantity: String(fd.get("quantity") ?? ""),
      notes: String(fd.get("notes") ?? ""),
      orderingAs: String(fd.get("orderingAs") ?? "customer"),
    };
    const parsed = partsSchema.safeParse(raw);
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
    const d = parsed.data;
    const splitLine =
      d.orderingAs === "owner"
        ? "Ordering as: Shop Owner — split 70% owner / 30% shop"
        : "Ordering as: Customer — split 80% customer price / 20% shop markup";
    // Route through the existing service-request email pipeline so this
    // reliably hits the shop inbox, tagged clearly as a parts request.
    const payload = {
      fullName: d.fullName,
      phone: d.phone,
      email: d.email,
      vehicleYear: d.vehicleYear,
      vehicleMake: d.vehicleMake,
      vehicleModel: d.vehicleModel,
      serviceNeeded: `PARTS REQUEST — ${d.partName} (qty ${d.quantity})`,
      preferredDate: "Parts request — quote ASAP",
      additionalComments: [
        splitLine,
        `Part: ${d.partName}`,
        d.partNumber ? `Part #: ${d.partNumber}` : null,
        `Quantity: ${d.quantity}`,
        d.notes ? `Notes: ${d.notes}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    };
    try {
      const res = await fetch("/api/public/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      if (!json.success) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setSubmitError(
        "We couldn't submit your parts request. Please call us or try again.",
      );
    }
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
            Parts
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
            Order <span className="text-primary">Parts</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Need a part for your ATV, side by side or jet ski? Tell us what
            you're after — we'll source it, quote it and let you know
            availability. Pick up at the shop or have us install it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/60 px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary/60"
            >
              <Wrench className="h-4 w-4" /> Request Service
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-border/70 bg-card/60 p-6 sm:p-8 shadow-plate">
          <div className="flex items-center gap-3">
            <Package className="h-6 w-6 text-primary" />
            <h2 className="font-display text-3xl tracking-wide">
              Request a part
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill out what you know — even a photo description or a link
            helps us find the right part.
          </p>

          {status === "sent" ? (
            <div className="mt-6 flex items-start gap-3 rounded-sm border border-primary/40 bg-primary/10 p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                Thanks! Your parts request was sent. We'll get back to you
                with pricing and availability.
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
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
                label="Part name / description"
                name="partName"
                placeholder="e.g. Front brake pads, clutch kit, impeller"
                error={errors.partName}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Part number (optional)"
                  name="partNumber"
                  placeholder="OEM or aftermarket #"
                  error={errors.partNumber}
                />
                <Field
                  label="Quantity"
                  name="quantity"
                  placeholder="1"
                  error={errors.quantity}
                />
              </div>
              <Field
                label="Notes (color, condition, install requested, links, etc.)"
                name="notes"
                as="textarea"
                rows={4}
                error={errors.notes}
              />
              <fieldset className="rounded-sm border border-border/70 bg-background/40 p-4">
                <legend className="px-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Ordering as
                </legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-start gap-2 rounded-sm border border-border/60 p-3 text-sm hover:border-primary/60">
                    <input
                      type="radio"
                      name="orderingAs"
                      value="customer"
                      defaultChecked
                      className="mt-0.5 accent-primary"
                    />
                    <span>
                      <span className="block font-semibold">Customer</span>
                      <span className="block text-xs text-muted-foreground">
                        Standard retail — 80/20 split
                      </span>
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-2 rounded-sm border border-border/60 p-3 text-sm hover:border-primary/60">
                    <input
                      type="radio"
                      name="orderingAs"
                      value="owner"
                      className="mt-0.5 accent-primary"
                    />
                    <span>
                      <span className="block font-semibold">Shop Owner</span>
                      <span className="block text-xs text-muted-foreground">
                        Owner order — 70/30 split
                      </span>
                    </span>
                  </label>
                </div>
                {errors.orderingAs ? (
                  <p className="mt-2 text-xs text-primary">{errors.orderingAs}</p>
                ) : null}
              </fieldset>
              {submitError ? (
                <p className="text-sm text-primary">{submitError}</p>
              ) : null}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Submitting…" : "Submit Parts Request"}
              </button>
              <p className="text-xs text-muted-foreground">
                Prefer to talk? Call{" "}
                <a href={PHONE_HREF} className="text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </form>
          )}
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