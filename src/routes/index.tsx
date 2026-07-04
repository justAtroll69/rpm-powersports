import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bike,
  Car,
  ChevronRight,
  Cog,
  Facebook,
  Gauge,
  MapPin,
  Palette,
  Phone,
  Quote,
  Ship,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { CtaButtons } from "@/components/cta-bar";
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
          "RPM Powersports | ATV & UTV Repair Screven GA | Powersports Service",
      },
      {
        name: "description",
        content:
          "RPM Powersports in Screven, GA specializes in ATV & UTV repair, motorcycle service, jet ski repair, performance upgrades, and custom fabrication. Call (912) 402-4308.",
      },
      { property: "og:title", content: "RPM Powersports | Screven, GA" },
      {
        property: "og:description",
        content:
          "ATV, UTV, motorcycle and jet ski repair, performance upgrades and custom fabrication in Screven, GA.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    to: "/atv-repair" as const,
    icon: Bike,
    title: "ATV Repair & Maintenance",
    copy: "Diagnostics, tune-ups and full rebuilds for every make and model.",
  },
  {
    to: "/utv-repair" as const,
    icon: Car,
    title: "UTV Repair & Service",
    copy: "Side-by-side service — clutches, drivetrains, suspension and more.",
  },
  {
    to: "/motorcycle-service" as const,
    icon: Bike,
    title: "Motorcycle Repair",
    copy: "Sport, cruiser, and dirt bike maintenance and diagnostics.",
  },
  {
    to: "/jet-ski-repair" as const,
    icon: Ship,
    title: "Jet Ski Repair & Service",
    copy: "Impeller, jet pump, engine and electrical service for PWCs.",
  },
  {
    to: "/performance-upgrades" as const,
    icon: Gauge,
    title: "Performance Upgrades",
    copy: "Tuning, exhaust, intake and drivetrain upgrades for real power.",
  },
  {
    to: "/custom-accessories" as const,
    icon: Palette,
    title: "Custom Accessories & Fabrication",
    copy: "Lift kits, powder coating, hydrodipping and Cerakote finishes.",
  },
];

const CAPABILITIES = [
  "Powersports Diagnostics",
  "Electrical Diagnostics & Repair",
  "Suspension & Lift Kits",
  "Performance Tuning",
  "Custom Fabrication",
  "Powder Coating",
  "Hydrodipping",
  "Cerakote Finishes",
];

const REVIEWS = [
  {
    name: "Will Warner",
    text: "Marcos and Ray were extremely great with communication and quick when purchasing my bike. Will definitely do business with them in the future if I'm back in the market. 10 out of 10 would recommend.",
    when: "4 months ago",
  },
  {
    name: "Mark Horne",
    text: "I was very satisfied with the quality of work. They are very professional and explained in detail what they found wrong with my four wheeler and how they would fix it. Great job getting my 4-wheeler back in the woods!",
    when: "8 months ago",
  },
  {
    name: "Richard Moore",
    text: "Awesome work, great prices. I don't use anyone else to work on my ATV or SxS!",
    when: "a year ago",
  },
  {
    name: "Richard Herrin",
    text: "Good job in a timely manner. Very well satisfied.",
    when: "a year ago",
  },
  {
    name: "David Edwards",
    text: "Ordered an ignition coil pack — came in the mail about a week later. Good service.",
    when: "9 months ago",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={IMAGES.hero}
            alt="ATV on a rugged offroad trail at sunset"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="carbon-grid absolute inset-0 opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs uppercase tracking-[0.28em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Screven · Georgia · Est. Powersports
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[0.92] tracking-wide text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              ATV &amp; UTV Repair<br />
              <span className="text-primary">in Screven, GA</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Professional powersports repair, maintenance, diagnostics and
              custom upgrades for ATVs, UTVs, motorcycles and jet skis.
            </p>
            <div className="mt-8">
              <CtaButtons />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Fast turnaround · Honest pricing · Quality workmanship
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border/60 bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border/60 px-4 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
          {[
            { k: "4.9★", v: "Customer rated" },
            { k: "12+", v: "Service categories" },
            { k: "Same-week", v: "Turnaround on most repairs" },
            { k: "SE GA", v: "Southeast Georgia served" },
          ].map((s) => (
            <div key={s.v} className="px-2 py-6 text-center md:px-6">
              <div className="font-display text-3xl text-primary sm:text-4xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
              What we do
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
              Full-service powersports shop.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            From routine maintenance to full custom builds — one shop, one
            crew, one bill.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border/70 bg-card/60 p-6 transition-colors hover:border-primary/60"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-sm bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-wide">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {CAPABILITIES.map((c) => (
            <span
              key={c}
              className="rounded-sm border border-border/70 bg-card/40 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 diag-stripes opacity-40 blur-sm" />
              <img
                src={IMAGES.workshop}
                alt="Mechanic working on a powersports engine in a professional shop"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-plate"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
              About RPM Powersports
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight tracking-wide sm:text-5xl">
              Trusted powersports repair
              <br />
              built on <span className="text-primary">workmanship</span>.
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p>
                RPM Powersports is a professional powersports repair and
                customization shop serving Screven, Georgia and the surrounding
                Southeast Georgia region.
              </p>
              <p>
                We specialize in ATV and UTV repair, motorcycle service, jet
                ski maintenance, performance upgrades, diagnostics, and custom
                accessory installation — from full engine rebuilds to powder
                coating, hydrodipping, and Cerakote finishes.
              </p>
              <p>
                Our focus is simple: reliable service, quality workmanship, and
                honest pricing with fast turnaround times.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { i: Wrench, t: "Certified technicians" },
                { i: Zap, t: "Advanced diagnostics" },
                { i: Cog, t: "OEM & aftermarket parts" },
                { i: Star, t: "Locally trusted" },
              ].map((f) => (
                <li key={f.t} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary/10 text-primary">
                    <f.i className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {f.t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
              Local powersports shop
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
              Screven, GA &amp; surrounding areas.
            </h2>
            <p className="mt-5 text-muted-foreground">
              If you're searching for an <strong className="text-foreground">ATV repair
              shop near me</strong>, <strong className="text-foreground">UTV repair in
              Screven GA</strong>, <strong className="text-foreground">motorcycle repair
              in Georgia</strong>, or a trusted <strong className="text-foreground">powersports
              shop</strong> — RPM Powersports is your local solution for repair,
              maintenance and performance upgrades.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "ATV repair near me",
                "UTV repair Screven GA",
                "Motorcycle repair Georgia",
                "Jet ski repair Georgia",
                "Powersports shop near me",
                "Custom ATV upgrades",
              ].map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  #{k}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-sm border border-border/70 bg-card/60 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <div className="font-display text-lg tracking-wide">
                    RPM Powersports
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {ADDRESS_LINE}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
                    >
                      <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
                    </a>
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                    >
                      <MapPin className="h-3.5 w-3.5" /> Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-border/70 shadow-plate">
            <iframe
              title="Map to RPM Powersports"
              src={MAP_EMBED_URL}
              className="aspect-[4/3] h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
                What riders say
              </p>
              <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
                Real reviews. Real machines.
              </h2>
            </div>
            <div className="hidden items-center gap-1 sm:flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="relative flex flex-col rounded-sm border border-border/70 bg-background/60 p-6"
              >
                <Quote className="h-6 w-6 text-primary/60" />
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <div>
                    <div className="font-semibold text-foreground">
                      {r.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {r.when}
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="carbon-grid absolute inset-0 opacity-60" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
              Book service today
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
              Ready to get your ride back on the trail?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Call the shop or submit a service request and we'll get back to
              you fast. Walk-ins welcome during shop hours.
            </p>
            <div className="mt-8">
              <CtaButtons />
            </div>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-4 w-4 text-primary" />
              Follow us on Facebook for updates, builds & customer projects
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <aside className="rounded-sm border border-border/70 bg-card/70 p-6 shadow-plate">
            <h3 className="font-display text-xl tracking-wide">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{ADDRESS_LINE}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href={PHONE_HREF} className="hover:text-foreground">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all hover:text-foreground"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
