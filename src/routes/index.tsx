import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShieldCheck, TrendingUp, Users, Award, ArrowRight, Car, Building2, Wheat, Plane, HeartPulse, Wrench } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naingate Insurance Brokers — Risk Management & Insurance Solutions" },
      { name: "description", content: "Africa's pro-active digital-led insurance broker. NAICOM & NCRIB registered. Trusted by corporates, government and individuals." },
    ],
  }),
  component: HomePage,
});

const products = [
  { icon: Car, name: "Motor Insurance" },
  { icon: Wrench, name: "Engineering" },
  { icon: Building2, name: "Property" },
  { icon: Plane, name: "Special Risk" },
  { icon: Wheat, name: "Agriculture" },
  { icon: HeartPulse, name: "Life & Personal" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)", opacity: 0.92 }} />
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wider text-accent">
              NAICOM & NCRIB REGISTERED
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Insurance solutions <span className="text-accent">built on trust</span>.
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80">
              Naingate Insurance Brokers delivers risk management and tailored insurance for corporates, government and individuals — with prompt service and transparent advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-lg transition hover:translate-y-[-2px]">
                Explore Plans <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-8">
          {[
            { icon: ShieldCheck, k: "100%", v: "Regulated" },
            { icon: Users, k: "500+", v: "Clients Served" },
            { icon: Award, k: "20+", v: "Years Experience" },
            { icon: TrendingUp, k: "Africa", v: "Wide Reach" },
          ].map((s) => (
            <div key={s.v} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Products</span>
          <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Coverage for every kind of risk</h2>
          <p className="mt-3 text-muted-foreground">From motor and property to aviation and agriculture — we curate the best combination of cover for your needs.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Comprehensive {p.name.toLowerCase()} solutions tailored to your specific risk profile.</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="overflow-hidden rounded-2xl px-8 py-14 text-center text-primary-foreground md:px-16" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-3xl font-bold md:text-4xl">Ready to protect what matters?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Speak with our brokers for a personalised insurance audit and the right cover at competitive rates.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 font-semibold text-accent-foreground">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
