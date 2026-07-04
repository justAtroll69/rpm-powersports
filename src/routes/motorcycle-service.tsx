import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/motorcycle-service")({
  head: () => ({
    meta: [
      { title: "Motorcycle Repair & Service in Screven, GA | RPM Powersports" },
      {
        name: "description",
        content:
          "Motorcycle repair, maintenance and performance work in Screven, GA. Sport, cruiser and dirt bikes. Call (912) 402-4308.",
      },
      { property: "og:title", content: "Motorcycle Service — RPM Powersports" },
      { property: "og:description", content: "Motorcycle repair and tune-ups in Screven, Georgia." },
      { property: "og:url", content: "/motorcycle-service" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/motorcycle-service" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/motorcycle-service"
      eyebrow="Service"
      title="Motorcycle Repair & Maintenance"
      intro="Sport bikes, cruisers and dirt bikes — RPM Powersports is your Screven, GA motorcycle shop for reliable service, sharp diagnostics and honest pricing."
      image={IMAGES.motorcycle}
      imageAlt="Sport motorcycle parked in a workshop"
      bullets={[
        "Oil, fluid & filter service",
        "Chain, sprocket & drivetrain",
        "Brake service & pad replacement",
        "Tire mounting & balancing",
        "Suspension setup",
        "Electrical & battery diagnostics",
        "Carb & EFI tuning",
        "Full inspections",
      ]}
      related={[
        { to: "/performance-upgrades", label: "Performance Upgrades", note: "Exhaust, intake and tuning packages." },
        { to: "/custom-accessories", label: "Custom Accessories", note: "Powder coating, Cerakote and custom finishes." },
        { to: "/atv-repair", label: "ATV Repair", note: "Also servicing quads and side-by-sides." },
      ]}
    />
  ),
});