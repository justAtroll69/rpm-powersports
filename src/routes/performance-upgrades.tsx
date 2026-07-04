import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { IMAGES } from "@/lib/images";

export const Route = createFileRoute("/performance-upgrades")({
  head: () => ({
    meta: [
      { title: "Performance Upgrades & Tuning | RPM Powersports Screven GA" },
      {
        name: "description",
        content:
          "Performance upgrades and tuning for ATVs, UTVs, motorcycles and jet skis in Screven, GA. Exhaust, intake, drivetrain and ECU work. Call (912) 402-4308.",
      },
      { property: "og:title", content: "Performance Upgrades — RPM Powersports" },
      { property: "og:description", content: "Serious performance upgrades for serious powersports riders." },
      { property: "og:url", content: "/performance-upgrades" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/performance-upgrades" }],
  }),
  component: () => (
    <ServicePage
      currentPath="/performance-upgrades"
      eyebrow="Power"
      title="Performance Upgrades & Tuning"
      intro="Get real, measurable power out of your machine. RPM Powersports installs and tunes performance parts for ATVs, UTVs, motorcycles and PWCs — built to handle it."
      image={IMAGES.performance}
      imageAlt="High-performance powersports engine with performance parts"
      bullets={[
        "ECU tuning & remaps",
        "Exhaust systems",
        "Intake & air filtration",
        "Clutch & drivetrain upgrades",
        "Big bore & top-end kits",
        "Suspension & handling",
        "Cooling upgrades",
        "Dyno-verified results",
      ]}
      related={[
        { to: "/atv-repair", label: "ATV Repair", note: "Repair first, upgrade second — we cover both." },
        { to: "/utv-repair", label: "UTV Repair", note: "Full side-by-side service and performance." },
        { to: "/custom-accessories", label: "Custom Accessories", note: "Complete the build with custom finishes." },
      ]}
    />
  ),
});