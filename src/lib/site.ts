export const PHONE_DISPLAY = "(912) 402-4308";
export const PHONE_HREF = "tel:+19124024308";
export const EMAIL = "rpmpowersports2024@gmail.com";
export const ADDRESS_LINE = "583 Stanfield Rd, Screven, GA 31560";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=583+Stanfield+Rd,+Screven,+GA+31560";
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=583+Stanfield+Rd,+Screven,+GA+31560&output=embed";
export const FACEBOOK_URL =
  "https://www.facebook.com/p/RPM-Powersports-61563468865747/";

export type NavLink = {
  to:
    | "/"
    | "/atv-repair"
    | "/utv-repair"
    | "/motorcycle-service"
    | "/jet-ski-repair"
    | "/performance-upgrades"
    | "/custom-accessories"
    | "/contact";
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/atv-repair", label: "ATV" },
  { to: "/utv-repair", label: "UTV" },
  { to: "/motorcycle-service", label: "Motorcycle" },
  { to: "/jet-ski-repair", label: "Jet Ski" },
  { to: "/contact", label: "Contact" },
];