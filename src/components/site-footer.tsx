import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import {
  ADDRESS_LINE,
  DIRECTIONS_URL,
  EMAIL,
  FACEBOOK_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-xl leading-none">
              R
            </span>
            <span className="font-display text-2xl tracking-wider">RPM POWERSPORTS</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Professional powersports repair, performance and customization shop
            serving Screven, GA and the surrounding region. ATVs, UTVs,
            motorcycles, jet skis and custom builds.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Facebook className="h-4 w-4" />
            Follow us on Facebook
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wider text-foreground">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.filter((l) => l.to !== "/" && l.to !== "/contact").map(
              (l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wider text-foreground">Visit / Call</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {ADDRESS_LINE}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <a href={PHONE_HREF} className="hover:text-foreground">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground break-all">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} RPM Powersports. All rights reserved.</p>
          <p className="uppercase tracking-[0.24em]">Screven · Georgia</p>
        </div>
      </div>
    </footer>
  );
}