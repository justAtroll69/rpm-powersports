import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/utv-repair")({
  head: () => ({
    meta: [
      { title: "UTV Repair & Service in Screven, GA | RPM Powersports" },
      {
        name: "description",
        content:
          "UTV / side-by-side repair, maintenance and upgrades in Screven, Georgia. RZR, Ranger, Maverick, Wolverine and more. Call (912) 402-4308.",
      },
      { property: "og:title", content: "UTV Repair — RPM Powersports" },
      { property: "og:description", content: "Complete UTV repair and service in Screven, GA." },
      { property: "og:url", content: "/utv-repair" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/utv-repair" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/utv-repair"
      eyebrow="Service"
      title="UTV Repair & Side-by-Side Service"
      intro="Complete UTV service for RZR, Ranger, Maverick, Wolverine and more. We handle clutches, drivetrains, suspension and full custom builds — from bone-stock rebuild to trail-ready monster."
      image={IMAGES.utv}
      imageAlt="UTV side-by-side vehicle in off-road terrain"
      bullets={[
        "Clutch, belt & drivetrain rebuilds",
        "CV axle & U-joint replacement",
        "Suspension & shock service",
        "Lift kit & wheel/tire upgrades",
        "Cage, roof & accessory fabrication",
        "Engine diagnostics & repair",
        "Electrical & wiring repair",
        "Full inspections & tune-ups",
      ]}
      related={[
        { to: "/atv-repair", label: "ATV Repair", note: "Full ATV diagnostics and repair." },
        { to: "/performance-upgrades", label: "Performance Upgrades", note: "Tuning, exhaust and drivetrain for more power." },
        { to: "/custom-accessories", label: "Custom Accessories", note: "Lift kits, cages, coating and Cerakote." },
      ]}
    />
  ),
});