import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Heart, Music, Users, Target } from "lucide-react";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship — Naingate Insurance Brokers" },
      { name: "description", content: "Naingate Insurance partners with faith, community and arts initiatives across Nigeria. Submit your sponsorship request." },
    ],
  }),
  component: SponsorshipPage,
});

const pillars = [
  { icon: Heart, title: "Community Impact", desc: "We support initiatives that uplift families and strengthen Nigerian communities." },
  { icon: Music, title: "Arts & Worship", desc: "We back projects in worship, music and the creative arts that touch lives." },
  { icon: Users, title: "Capacity Building", desc: "We invest in training, mentorship and youth empowerment programmes." },
  { icon: Target, title: "Vision 2032", desc: "Our giving is aligned with long-term, vision-driven national impact." },
];

function SponsorshipPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Sponsorship</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Partnering with purpose-led missions</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            From live worship recordings to community outreach, Naingate proudly supports projects that create lasting impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-card to-accent/10 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <span className="rounded-full bg-accent/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">Featured Partnership</span>
              <h2 className="mt-4 text-2xl font-bold text-primary">RCCG Living Sacrifice Choir — Live Recording 2026</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A vision-driven worship recording from The Living Sacrifice Choir, RCCG General Assembly, scheduled for 18 July 2026. The project supports professional audio & video production, studio setup, music promotion and event logistics — aligned with Vision 2032.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-border bg-background/60 p-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Project Budget</dt>
                  <dd className="mt-1 text-lg font-bold text-primary">₦7,000,000</dd>
                </div>
                <div className="rounded-xl border border-border bg-background/60 p-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Recording Date</dt>
                  <dd className="mt-1 text-lg font-bold text-primary">18 Jul 2026</dd>
                </div>
              </dl>
              <p className="mt-5 text-xs text-muted-foreground">
                Contact: Min. Damilola (+234 813 779 6415) · Sis. Osibanjo Olamide (Choir Director)
              </p>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-4 md:col-span-3"
            >
              <h3 className="text-lg font-bold text-primary">Submit a sponsorship request</h3>
              {sent ? (
                <div className="rounded-xl border border-accent/40 bg-accent/10 p-6 text-sm">
                  Thank you — your sponsorship request has been received. Our team will review and respond within 5 business days.
                </div>
              ) : (
                <>
                  <div className="grid gap-3 md:grid-cols-2">
                    <input required placeholder="Organisation" className="rounded-md border border-input bg-background px-4 py-3 text-sm" />
                    <input required placeholder="Contact person" className="rounded-md border border-input bg-background px-4 py-3 text-sm" />
                    <input required type="email" placeholder="Email" className="rounded-md border border-input bg-background px-4 py-3 text-sm" />
                    <input required placeholder="Phone" className="rounded-md border border-input bg-background px-4 py-3 text-sm" />
                  </div>
                  <input required placeholder="Project title" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm" />
                  <textarea required rows={4} placeholder="Brief description of the project and impact" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm" />
                  <button className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
                    Submit request
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
