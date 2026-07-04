import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/side-by-side")({
  head: () => ({
    meta: [
      { title: "Side by Side Repair & Service in Screven, GA | RPM Powersports" },
      {
        name: "description",
        content:
          "Side by side / UTV repair, maintenance and upgrades in Screven, Georgia. RZR, Ranger, Maverick, Wolverine and more. Call (912) 402-4308.",
      },
      { property: "og:title", content: "Side by Side Repair — RPM Powersports" },
      { property: "og:description", content: "Complete side by side repair and service in Screven, GA." },
      { property: "og:url", content: "/side-by-side" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/side-by-side" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/side-by-side"
      eyebrow="Service"
      title="Side by Side Repair & Service"
      intro="Complete side by side service for RZR, Ranger, Maverick, Wolverine and more. We handle clutches, drivetrains, suspension and full custom builds — from bone-stock rebuild to trail-ready machine."
      image={IMAGES.utv}
      imageAlt="Side by side UTV vehicle in off-road terrain"
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
        { to: "/powder-coating", label: "Powder Coating", note: "Durable finish for frames and parts." },
        { to: "/custom-fabrication", label: "Custom Fabrication", note: "Lift kits, cages, brackets and builds." },
      ]}
    />
  ),
});
