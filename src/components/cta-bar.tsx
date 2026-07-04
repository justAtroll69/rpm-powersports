import { Phone, MapPin, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { DIRECTIONS_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex flex-wrap gap-2" : "flex flex-wrap gap-3"}>
      <a
        href={PHONE_HREF}
        className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5"
      >
        <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
      </a>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-5 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary/60"
      >
        <Wrench className="h-4 w-4" /> Request Service
      </Link>
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
      >
        <MapPin className="h-4 w-4" /> Get Directions
      </a>
    </div>
  );
}

export function CtaBanner() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
            Ready when you are
          </p>
          <h2 className="mt-2 font-display text-3xl leading-tight tracking-wider text-foreground sm:text-4xl">
            Get your machine back on the trail.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fast turnaround · Honest pricing · Professional workmanship
          </p>
        </div>
        <CtaButtons />
      </div>
    </section>
  );
}