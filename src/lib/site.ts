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
    | "/side-by-side"
    | "/jet-ski-repair"
    | "/powder-coating"
    | "/custom-fabrication"
    | "/parts"
    | "/contact";
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/atv-repair", label: "ATV" },
  { to: "/side-by-side", label: "Side by Side" },
  { to: "/jet-ski-repair", label: "Jet Ski" },
  { to: "/powder-coating", label: "Powder Coating" },
  { to: "/custom-fabrication", label: "Custom Fabrication" },
  { to: "/parts", label: "Parts" },
  { to: "/contact", label: "Contact" },
];