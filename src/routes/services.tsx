import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Car, Wrench, Building2, Plane, Wheat, HeartPulse, Shield, Briefcase } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Insurance Plans — Naingate Insurance Brokers" },
      { name: "description", content: "Motor, Engineering, Property, Special Risk, Agric, Life, Liability and Pecuniary insurance plans tailored to your needs." },
    ],
  }),
  component: ServicesPage,
});

const plans = [
  {
    icon: Car, name: "Motor Insurance",
    desc: "Comprehensive cover providing compensation for accidents, vandalism and bodily damage. Includes Private and Commercial vehicle plans.",
    features: ["Accidental damage", "Fire & Theft", "Third Party Liability up to ₦60m", "Standard Motor Excess"],
  },
  {
    icon: Wrench, name: "Engineering Insurance",
    desc: "Plant All Risk, Electronic Equipment, Contractors All Risk and Machinery Breakdown policies for industrial operations.",
    features: ["Plant All Risk (PAR)", "Electronic Equipment", "Machinery Breakdown", "Contractors All Risk"],
  },
  {
    icon: Building2, name: "Property Insurance",
    desc: "Fire & Special Perils, Burglary, All Risk and legal liability cover for residential, commercial and industrial property.",
    features: ["Fire & allied perils", "Burglary & theft", "All Risk for valuables", "Public liability"],
  },
  {
    icon: Plane, name: "Special Risk Insurance",
    desc: "Marine, Aviation and Bond insurance for unique high-value exposures across multiple industries.",
    features: ["Marine Cargo & Hull", "Aviation", "Bonds", "Custom risk solutions"],
  },
  {
    icon: Wheat, name: "Agric Insurance",
    desc: "Indemnifies farmers against loss/damage to crops, poultry, livestock, machinery and equipment from named perils.",
    features: ["Crop & livestock", "Equipment", "Fire & flood", "Windstorm & impact"],
  },
  {
    icon: HeartPulse, name: "Life & Personal Insurance",
    desc: "Keyman, Savings, Education, Mortgage Protection and Travel Insurance to safeguard your family's future.",
    features: ["Keyman", "Savings & Education", "Mortgage Protection", "Travel"],
  },
  {
    icon: Shield, name: "Liability Insurance",
    desc: "Occupiers, Public Liability, Group Personal Accident and Professional Indemnity for legal protection.",
    features: ["Occupiers Liability", "Public Liability", "Group Personal Accident", "Professional Indemnity"],
  },
  {
    icon: Briefcase, name: "Pecuniary Insurance",
    desc: "Financial-loss focused covers including fidelity guarantee, money-in-transit and credit insurance.",
    features: ["Fidelity Guarantee", "Money in Transit", "Credit Insurance", "Bonds"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Services</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Insurance plans for every risk</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            We curate the right combination of cover from leading underwriters — at competitive rates, with prompt claims settlement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
