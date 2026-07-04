import { Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { CtaBanner, CtaButtons } from "./cta-bar";
import { NAV_LINKS, type NavLink } from "@/lib/site";

type Related = { to: NavLink["to"]; label: string; note: string };

export function ServicePage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  bullets,
  related,
  currentPath,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  related: Related[];
  currentPath: NavLink["to"];
}) {
  const otherNav = NAV_LINKS.filter(
    (l) =>
      l.to !== "/" &&
      l.to !== "/contact" &&
      l.to !== currentPath &&
      !related.some((r) => r.to === l.to),
  ).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="carbon-grid absolute inset-0 opacity-60" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="relative">
            <p className="font-display text-xs uppercase tracking-[0.32em] text-primary">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[0.95] tracking-wide text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              {intro}
            </p>
            <div className="mt-8">
              <CtaButtons />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 diag-stripes opacity-40 blur-sm" />
            <img
              src={image}
              alt={imageAlt}
              width={1024}
              height={768}
              loading="eager"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-plate"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
              What we handle
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-sm border border-border/70 bg-card/60 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-sm border border-border/70 bg-card/60 p-6">
            <h3 className="font-display text-xl tracking-wide">Related services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {related.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="group flex items-start gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                    <span>
                      <span className="font-semibold text-foreground">{r.label}</span> —{" "}
                      {r.note}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border/60 pt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Also explore
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {otherNav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-primary"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}