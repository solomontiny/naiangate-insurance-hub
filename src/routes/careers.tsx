import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Briefcase } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Naingate Insurance Brokers" },
      { name: "description", content: "Join Naingate Insurance Brokers — explore roles across broking, claims, technology and finance." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Senior Insurance Broker", location: "Lagos", type: "Full-time", team: "Broking" },
  { title: "Claims Officer", location: "Lagos", type: "Full-time", team: "Claims" },
  { title: "Business Development Manager", location: "Abuja", type: "Full-time", team: "Sales" },
  { title: "Frontend Engineer", location: "Remote", type: "Full-time", team: "Technology" },
  { title: "Underwriting Analyst", location: "Ibadan", type: "Full-time", team: "Technical" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Careers</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Build a career that protects others</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            We're hiring across broking, technology and operations. Join a team obsessed with client outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="space-y-4">
          {roles.map((r) => (
            <article key={r.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary">{r.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{r.location}</span>
                    <span>{r.type}</span>
                    <span>·</span>
                    <span>{r.team}</span>
                  </div>
                </div>
              </div>
              <a href="mailto:careers@naingateinsurancebrokers.com" className="self-start rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-glow md:self-auto">
                Apply now
              </a>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
