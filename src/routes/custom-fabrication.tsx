import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/custom-fabrication")({
  head: () => ({
    meta: [
      { title: "Custom Fabrication & Accessories | RPM Powersports" },
      {
        name: "description",
        content:
          "Custom fabrication, accessory installation, brackets, cages and builds in Screven, GA. Call (912) 402-4308.",
      },
      { property: "og:title", content: "Custom Fabrication — RPM Powersports" },
      { property: "og:description", content: "Custom powersports fabrication and builds in Screven, GA." },
      { property: "og:url", content: "/custom-fabrication" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/custom-fabrication" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/custom-fabrication"
      eyebrow="Custom"
      title="Custom Fabrication & Accessories"
      intro="If you can dream it, we can build it. From custom cages and bumpers to one-off brackets and mounts — we fabricate parts that fit right and hold up to real use."
      image={IMAGES.custom}
      imageAlt="Custom powersports parts and tools in workshop"
      bullets={[
        "Custom bumpers & cages",
        "One-off brackets & mounts",
        "Lift kits & suspension upgrades",
        "Roof & door fabrication",
        "Winch mounts & plow setups",
        "LED lighting & wiring",
        "Wheels, tires & fitment",
        "Full custom builds",
      ]}
      related={[
        { to: "/atv-repair", label: "ATV Repair", note: "Service and rebuilds for every ATV." },
        { to: "/side-by-side", label: "Side by Side", note: "Side-by-side service and custom work." },
        { to: "/powder-coating", label: "Powder Coating", note: "Durable custom finishes for any part." },
      ]}
    />
  ),
});
