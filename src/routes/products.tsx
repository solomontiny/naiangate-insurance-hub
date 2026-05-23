import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Car, Wrench, Building2, Plane, Wheat, HeartPulse, Shield, Briefcase } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Insurance Products — Naingate Insurance Brokers" },
      { name: "description", content: "Motor, Engineering, Property, Agric, Special Risk, Life & Personal, Pecuniary and Liability insurance products from Naingate." },
      { property: "og:title", content: "Insurance Products — Naingate Insurance Brokers" },
      { property: "og:description", content: "Premium insurance products tailored for individuals, SMEs and enterprises across Nigeria." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { icon: Car, name: "Motor Insurance", desc: "Comprehensive, Third Party and Fleet cover for private and commercial vehicles." },
  { icon: Wrench, name: "Engineering Insurance", desc: "Plant All Risk, Contractors All Risk, Electronic Equipment and Machinery Breakdown." },
  { icon: Building2, name: "Property Insurance", desc: "Fire & Special Perils, Burglary, All Risk and legal liability for property of every scale." },
  { icon: Wheat, name: "Agric Insurance", desc: "Indemnity for farmers against loss to crops, poultry, livestock, machinery and equipment." },
  { icon: Plane, name: "Special Risk Insurance", desc: "Marine, Aviation, Oil & Gas and Bond insurance for unique high-value exposures." },
  { icon: HeartPulse, name: "Life & Personal Insurance", desc: "Keyman, Savings, Education, Mortgage Protection and Travel insurance for your family." },
  { icon: Briefcase, name: "Pecuniary Insurance", desc: "Fidelity Guarantee, Money-in-Transit, Credit insurance and financial-loss cover." },
  { icon: Shield, name: "Liability Insurance", desc: "Occupiers, Public, Group Personal Accident and Professional Indemnity covers." },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-gold)" }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Products</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Insurance built around your risk</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            We curate the right combination of cover from leading underwriters — competitive rates, prompt claims settlement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition group-hover:opacity-100" style={{ background: "var(--gradient-gold)" }} />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="relative mt-5 text-xl font-bold text-primary">{p.name}</h2>
              <p className="relative mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <Link to="/contact" className="relative mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:underline">
                Request a quote →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
