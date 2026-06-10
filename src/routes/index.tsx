import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HeroSlider } from "@/components/HeroSlider";
import {
  ShieldCheck, TrendingUp, Users, Award, ArrowRight,
  Car, Building2, Wheat, Plane, HeartPulse, Wrench,
  Clock, BadgeCheck, HandshakeIcon, PhoneCall, Star,
} from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import businessImg from "@/assets/hero-business.jpg";

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
  { icon: Car, name: "Motor Insurance", desc: "Comprehensive and third-party cover for private and commercial vehicles." },
  { icon: Wrench, name: "Engineering", desc: "Contractor's all-risk, machinery breakdown and erection-period cover." },
  { icon: Building2, name: "Property", desc: "Fire, burglary and all-risk protection for homes and commercial assets." },
  { icon: Plane, name: "Special Risk", desc: "Aviation, marine, oil & gas and bespoke high-value risk solutions." },
  { icon: Wheat, name: "Agriculture", desc: "Crop, livestock and agribusiness insurance for resilient food systems." },
  { icon: HeartPulse, name: "Life & Health", desc: "Personal accident, group life and HMO-backed health insurance plans." },
];

const whyUs = [
  { icon: BadgeCheck, title: "Regulated & Trusted", desc: "Fully licensed by NAICOM and a registered member of NCRIB." },
  { icon: Clock, title: "Fast Claims Settlement", desc: "We advocate for you — most claims resolved within 14 days." },
  { icon: HandshakeIcon, title: "Independent Advice", desc: "We compare cover from 30+ insurers to find the right fit." },
  { icon: PhoneCall, title: "24/7 Support", desc: "WhatsApp, phone and email — reach our team whenever you need us." },
];

const testimonials = [
  { name: "Adaeze O.", role: "Operations Director, Lagos", quote: "Naingate handled our fleet renewal seamlessly. Their team is incredibly responsive and saved us 18% on premium." },
  { name: "Tunde A.", role: "SME Owner, Ibadan", quote: "They walked me through every clause. I finally feel my business is properly protected." },
  { name: "Mrs. Chinwe E.", role: "Family Client, Abuja", quote: "Filing my claim was straightforward and the payout was prompt. Highly recommended." },
];

function HomePage() {
  return (
    <SiteLayout>
      <HeroSlider />

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
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us — split with image */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Naingate Insurance team meeting with clients"
              className="rounded-2xl shadow-[var(--shadow-elegant)]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-primary p-5 text-primary-foreground shadow-xl md:block">
              <div className="text-3xl font-bold text-accent">14 days</div>
              <div className="text-xs uppercase tracking-wider">Average claim turnaround</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why Naingate</span>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Insurance partners who actually pick up the phone</h2>
            <p className="mt-4 text-muted-foreground">We combine deep underwriting knowledge with personal service — so you get the cover you need and a team that's there when it counts.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyUs.map((w) => (
                <div key={w.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{w.title}</div>
                    <p className="text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Client Voices</span>
          <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Trusted across Nigeria</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-14 text-center text-primary-foreground md:px-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <img
            src={businessImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-15"
            loading="lazy"
          />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to protect what matters?</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Speak with our brokers for a personalised insurance audit and the right cover at competitive rates.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 font-semibold text-accent-foreground">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Browse Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
