import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/jet-ski-repair")({
  head: () => ({
    meta: [
      { title: "Jet Ski Repair & PWC Service in Georgia | RPM Powersports" },
      {
        name: "description",
        content:
          "Jet ski and PWC repair, service and diagnostics in Screven, GA. Sea-Doo, Yamaha WaveRunner, Kawasaki. Call (912) 402-4308.",
      },
      { property: "og:title", content: "Jet Ski Repair — RPM Powersports" },
      { property: "og:description", content: "PWC engine, jet pump and electrical service in Georgia." },
      { property: "og:url", content: "/jet-ski-repair" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/jet-ski-repair" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/jet-ski-repair"
      eyebrow="Service"
      title="Jet Ski Repair & PWC Service"
      intro="Get your Sea-Doo, Yamaha WaveRunner or Kawasaki jet ski back on the water. We handle everything from impeller service to full engine work."
      image={IMAGES.jetski}
      imageAlt="Jet ski personal watercraft on the water"
      bullets={[
        "Impeller & jet pump service",
        "Engine repair & rebuilds",
        "Cooling system service",
        "Electrical & starter diagnostics",
        "Fuel system cleaning",
        "Oil & fluid service",
        "Winterization & storage prep",
        "Trailer inspection",
      ]}
      related={[
        { to: "/powder-coating", label: "Powder Coating", note: "Durable finish for parts and accessories." },
        { to: "/atv-repair", label: "ATV Repair", note: "Full ATV diagnostics and repair." },
        { to: "/custom-fabrication", label: "Custom Fabrication", note: "Custom builds and accessories." },
      ]}
    />
  ),
});