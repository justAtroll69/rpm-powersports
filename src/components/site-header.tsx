import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="RPM Powersports home">
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-xl leading-none">
            R
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wider">RPM POWERSPORTS</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Screven · Georgia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-sm px-3 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-sm border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border/60 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:hidden"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}