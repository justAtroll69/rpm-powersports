import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/atv-repair")({
  head: () => ({
    meta: [
      { title: "ATV Repair & Maintenance in Screven, GA | RPM Powersports" },
      {
        name: "description",
        content:
          "Professional ATV repair, maintenance and performance service in Screven, GA. Diagnostics, engine work, electrical, suspension. Call (912) 402-4308.",
      },
      { property: "og:title", content: "ATV Repair — RPM Powersports" },
      {
        property: "og:description",
        content:
          "ATV diagnostics, repair and performance upgrades in Screven, Georgia.",
      },
      { property: "og:url", content: "/atv-repair" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/atv-repair" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/atv-repair"
      eyebrow="Service"
      title="ATV Repair & Maintenance"
      intro="From routine maintenance to full engine rebuilds, RPM Powersports keeps your ATV performing at its best. We service every major brand — Honda, Yamaha, Polaris, Can-Am, Suzuki and Kawasaki."
      image={IMAGES.atv}
      imageAlt="ATV four-wheeler on a dirt trail"
      bullets={[
        "Full diagnostic inspections",
        "Engine repair & rebuilds",
        "Clutch, belt & drivetrain service",
        "Electrical diagnostics & repair",
        "Carburetor & fuel system service",
        "Suspension tuning & lift kits",
        "Tires, wheels & brake service",
        "Fluids, filters & tune-ups",
      ]}
      related={[
        { to: "/performance-upgrades", label: "Performance Upgrades", note: "Unlock more power for your ATV." },
        { to: "/custom-accessories", label: "Custom Accessories", note: "Lift kits, powder coating and custom finishes." },
        { to: "/utv-repair", label: "UTV Repair", note: "Side-by-side service and maintenance." },
      ]}
    />
  ),
});