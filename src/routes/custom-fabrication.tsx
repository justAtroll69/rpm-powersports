import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/custom-accessories")({
  head: () => ({
    meta: [
      { title: "Custom Accessories, Powder Coating & Cerakote | RPM Powersports" },
      {
        name: "description",
        content:
          "Custom fabrication, accessory installation, powder coating, hydrodipping and Cerakote in Screven, GA. Call (912) 402-4308.",
      },
      { property: "og:title", content: "Custom Accessories — RPM Powersports" },
      { property: "og:description", content: "Custom powersports fabrication, coating and finishing in Screven, GA." },
      { property: "og:url", content: "/custom-accessories" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/custom-accessories" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/custom-accessories"
      eyebrow="Custom"
      title="Custom Accessories & Fabrication"
      intro="Make it yours. From lift kits and cages to powder coating, hydrodipping and Cerakote — we build machines that stand out and stand up to the trail."
      image={IMAGES.custom}
      imageAlt="Custom powersports parts and tools in workshop"
      bullets={[
        "Lift kits & suspension upgrades",
        "Custom bumpers & cages",
        "Powder coating (any color)",
        "Hydrodipping (camo, carbon, custom)",
        "Cerakote finishes",
        "LED lighting & wiring",
        "Wheels, tires & fitment",
        "Full custom builds",
      ]}
      related={[
        { to: "/performance-upgrades", label: "Performance Upgrades", note: "Add real power to match the look." },
        { to: "/atv-repair", label: "ATV Repair", note: "Service and rebuilds for every ATV." },
        { to: "/utv-repair", label: "UTV Repair", note: "Side-by-side service and custom work." },
      ]}
    />
  ),
});