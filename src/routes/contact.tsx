import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Naingate Insurance Brokers" },
      { name: "description", content: "Reach Naingate Insurance Brokers in Lagos, Ibadan and Abuja. Email info@naingateinsurancebrokers.com." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Lagos", addr: "26 Sumbo Jibowu Street, Ikoyi, Lagos" },
  { city: "Ibadan", addr: "42 Kenneth Dike Way, Opp Peter and Paul Seminary, Bodija, Ibadan" },
  { city: "Abuja", addr: "9 Tema Street, Off Rabat Street, Wuse Zone 6, Abuja" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Let's talk about your cover</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Our brokers are ready to advise. Send a message or visit any of our offices.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary">Get in touch</h2>
            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm font-semibold text-primary">Email</div>
                  <a href="mailto:info@naingateinsurancebrokers.com" className="text-sm text-muted-foreground hover:text-primary">info@naingateinsurancebrokers.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm font-semibold text-primary">Phone</div>
                  <p className="text-sm text-muted-foreground">+234 (0) 800 000 0000</p>
                </div>
              </div>
            </div>

            <h3 className="mt-10 text-lg font-bold text-primary">Our offices</h3>
            <div className="mt-4 space-y-3">
              {offices.map((o) => (
                <div key={o.city} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <MapPin className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <div className="text-sm font-semibold text-primary">{o.city}</div>
                    <p className="text-sm text-muted-foreground">{o.addr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
          >
            <h2 className="text-2xl font-bold text-primary">Send a message</h2>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Full name</label>
                <input required className="rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Email</label>
                <input required type="email" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Subject</label>
                <input className="rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Message</label>
                <textarea required rows={5} className="rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-glow">
                <Send className="h-4 w-4" /> Send Message
              </button>
              {sent && <p className="text-sm text-accent">Thanks — we'll be in touch shortly.</p>}
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
