import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/powder-coating")({
  head: () => ({
    meta: [
      { title: "Powder Coating in Screven, GA | RPM Powersports" },
      {
        name: "description",
        content:
          "Professional powder coating for ATV, UTV and powersports parts in Screven, GA. Frames, wheels, cages and more. Call (912) 402-4308.",
      },
      { property: "og:title", content: "Powder Coating — RPM Powersports" },
      { property: "og:description", content: "Durable powder coating for powersports parts in Screven, GA." },
      { property: "og:url", content: "/powder-coating" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/powder-coating" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/powder-coating"
      eyebrow="Finishing"
      title="Powder Coating"
      intro="A tough, long-lasting finish that beats paint every time. We powder coat frames, wheels, cages, bumpers and any metal part — in any color you want."
      image={IMAGES.garage}
      imageAlt="Powder coated parts in a powersports workshop"
      bullets={[
        "Frames & chassis coating",
        "Wheels & rims (any color)",
        "Cages, bumpers & guards",
        "A-arms, trailing arms & links",
        "Engine covers & accessories",
        "High-heat resistant finishes",
        "Clear coat & textured options",
        "Sandblasting & prep service",
      ]}
      related={[
        { to: "/custom-fabrication", label: "Custom Fabrication", note: "Build it first, then coat it." },
        { to: "/atv-repair", label: "ATV Repair", note: "Service and rebuilds for every ATV." },
        { to: "/side-by-side", label: "Side by Side", note: "Side-by-side service and custom work." },
      ]}
    />
  ),
});
