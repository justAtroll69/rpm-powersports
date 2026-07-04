import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bike,
  Car,
  Cog,
  Facebook,
  Gauge,
  Mail,
  MapPin,
  Palette,
  Phone,
  Ship,
  Wrench,
  Zap,
} from "lucide-react";
import { IMAGES } from "@/lib/images";
import {
  ADDRESS_LINE,
  DIRECTIONS_URL,
  EMAIL,
  FACEBOOK_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "RPM Powersports | ATV, UTV, Motorcycle & Jet Ski Repair — Screven, GA",
      },
      {
        name: "description",
        content:
          "RPM Powersports — ATV, UTV, motorcycle and jet ski repair in Screven, GA. Diagnostics, performance and custom work. Call (912) 402-4308.",
      },
      { property: "og:title", content: "RPM Powersports — Screven, GA" },
      {
        property: "og:description",
        content:
          "ATV, UTV, motorcycle and jet ski repair, diagnostics and custom work in Screven, GA.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  { to: "/atv-repair" as const, icon: Bike, title: "ATV Repair", copy: "Maintenance, diagnostics & rebuilds." },
  { to: "/side-by-side" as const, icon: Car, title: "Side by Side", copy: "Repair, tuning & custom builds." },
  { to: "/jet-ski-repair" as const, icon: Ship, title: "Jet Ski Repair", copy: "PWC engine & jet pump service." },
  { to: "/powder-coating" as const, icon: Palette, title: "Powder Coating", copy: "Durable finish for any metal part." },
  { to: "/custom-fabrication" as const, icon: Cog, title: "Custom Fabrication", copy: "Mounts, cages, brackets & builds." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <img
            src={IMAGES.hero}
            alt="ATV on trail"
            className="h-full w-full object-cover opacity-50"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <h1 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">
            RPM <span className="text-primary">POWERSPORTS</span>
          </h1>
          <p className="mt-4 text-base uppercase tracking-[0.28em] text-muted-foreground sm:text-lg">
            ATV · Side by Side · Jet Ski — Repair, Powder Coating &amp; Fabrication
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Screven, GA · Serving Southeast Georgia
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/60 px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary/60"
            >
              <MapPin className="h-4 w-4" /> Directions
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

      {/* SERVICES GRID */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl tracking-wide sm:text-4xl">Services</h2>
          <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Tap to view</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Link
              key={i}
              to={s.to}
              className="group flex flex-col rounded-sm border border-border/70 bg-card/60 p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <s.icon className="h-6 w-6 text-primary" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg leading-tight tracking-wide">
                {s.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* QUICK ABOUT */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-wide sm:text-4xl">About the shop</h2>
          <p className="mt-4 text-muted-foreground">
            RPM Powersports is a local powersports shop in Screven, Georgia.
            We handle ATVs, side by sides and jet skis — plus powder coating
            and custom fabrication work.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-wide sm:text-4xl">Visit the shop</h2>
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">583 Stanfield Rd</div>
                <div className="text-muted-foreground">Screven, GA 31560</div>
              </div>
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-sm border border-border/70">
            <iframe
              title="Map to RPM Powersports"
              src={MAP_EMBED_URL}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-wide sm:text-4xl">Contact</h2>
          <div className="mt-6 space-y-2 text-lg">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 hover:text-primary">
              <Phone className="h-5 w-5 text-primary" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2 break-all text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5 text-primary" /> {EMAIL}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary/60"
            >
              <Wrench className="h-4 w-4" /> Request Service
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Facebook className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 font-display text-3xl tracking-wide sm:text-4xl">Follow the shop</h2>
        <p className="mt-3 text-muted-foreground">See shop updates and recent work.</p>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border bg-card/60 px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary/60"
        >
          <Facebook className="h-4 w-4" /> RPM Powersports on Facebook
        </a>
      </section>
    </>
  );
}