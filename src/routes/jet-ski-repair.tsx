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
        { to: "/performance-upgrades", label: "Performance Upgrades", note: "Get more speed out of your PWC." },
        { to: "/custom-accessories", label: "Custom Accessories", note: "Custom finishes and paintwork." },
        { to: "/motorcycle-service", label: "Motorcycle Service", note: "Full service for street and dirt bikes." },
      ]}
    />
  ),
});