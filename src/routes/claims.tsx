import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { FileText, Clock, ShieldCheck, Phone } from "lucide-react";

export const Route = createFileRoute("/claims")({
  head: () => ({
    meta: [
      { title: "File a Claim — Naingate Insurance Brokers" },
      { name: "description", content: "Notify Naingate Insurance of a claim. Our team responds within 24 hours and guides you through every step." },
    ],
  }),
  component: ClaimsPage,
});

const steps = [
  { icon: Phone, title: "Notify Us", desc: "Call, email or submit the form below within 48 hours of the incident." },
  { icon: FileText, title: "Submit Documents", desc: "Provide policy number, incident report and supporting evidence." },
  { icon: ShieldCheck, title: "Assessment", desc: "Our loss adjuster validates and liaises with the underwriter on your behalf." },
  { icon: Clock, title: "Settlement", desc: "Approved claims are settled promptly — we track every milestone for you." },
];

function ClaimsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Claims</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">A claim is a promise kept</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            File a claim in minutes. We advocate for you through every stage — from notification to settlement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Step {i + 1}</div>
              <h3 className="mt-1 text-base font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-bold text-primary">Notify a claim</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Complete this form and our claims team will reach out within one business hour.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-accent" /> 24/7 hotline: <strong>+234 (0) 800 000 0000</strong></li>
              <li className="flex gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-accent" /> Email: <strong>claims@naingateinsurancebrokers.com</strong></li>
              <li className="flex gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-accent" /> Average first-response time: under 1 hour</li>
            </ul>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-4"
          >
            {submitted ? (
              <div className="rounded-xl border border-accent/40 bg-accent/10 p-6 text-sm">
                Thank you. Your claim notification has been received — a claims officer will contact you shortly.
              </div>
            ) : (
              <>
                <input required placeholder="Full name" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm" />
                <input required placeholder="Policy number" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm" />
                <input required type="email" placeholder="Email" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm" />
                <input required placeholder="Phone" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm" />
                <textarea required rows={4} placeholder="Describe the incident" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm" />
                <button className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
                  Submit claim
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
