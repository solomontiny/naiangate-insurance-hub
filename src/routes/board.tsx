import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Linkedin, Mail, ShieldCheck, Scale, Landmark, Users, ArrowRight, PhoneCall } from "lucide-react";

import ayo from "@/assets/team/ayo-abinna.jpg.asset.json";
import olubukola from "@/assets/team/olubukola-abitoye.jpg.asset.json";
import kayode from "@/assets/team/kayode-adeoye.jpg.asset.json";
import adeyinka from "@/assets/team/adeyinka-olumayowa.jpg.asset.json";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Board of Directors — Naingate Insurance Brokers" },
      { name: "description", content: "Meet the Board of Directors of Naingate Insurance Brokers Limited — seasoned leaders steering Africa's most trusted insurance brokerage." },
      { property: "og:title", content: "Board of Directors — Naingate Insurance Brokers" },
      { property: "og:description", content: "Seasoned leaders steering Naingate Insurance Brokers." },
    ],
  }),
  component: BoardPage,
});

const board = [
  { name: "Ayo Abinna", role: "Chairman, Board of Directors", photo: ayo.url, bio: "Chairs the Board, providing strategic governance, vision and stewardship for the Naingate group." },
  { name: "Amb. Dr. Olubukola Abitoye", role: "Executive Director", photo: olubukola.url, bio: "An accomplished executive with deep insurance, advocacy and stakeholder-engagement credentials." },
  { name: "Kayode Adeoye", role: "Managing Director", photo: kayode.url, bio: "Leads day-to-day operations, driving exponential growth and excellent client service across markets." },
  { name: "Dr. (Mrs.) Adeyinka Olumayowa", role: "Non-Executive Director", photo: adeyinka.url, bio: "Brings independent insight, risk oversight and a long track record of corporate governance." },
];

const committees = [
  { icon: ShieldCheck, name: "Risk & Compliance", desc: "Oversees enterprise risk, NAICOM compliance and internal controls across the group." },
  { icon: Scale, name: "Audit Committee", desc: "Independent review of financial reporting, audit findings and disclosure quality." },
  { icon: Landmark, name: "Governance & Nominations", desc: "Board composition, succession planning and corporate governance standards." },
  { icon: Users, name: "Remuneration Committee", desc: "Executive pay, incentives and performance frameworks aligned to shareholder value." },
];

const highlights = [
  { value: "4", label: "Board Directors" },
  { value: "80+", label: "Years combined experience" },
  { value: "4", label: "Standing Committees" },
  { value: "100%", label: "NAICOM compliant" },
];

function BoardPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Leadership</span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">Board of Directors</h1>
          <p className="mt-4 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
            Experienced leaders providing the governance, integrity and strategic direction that underpin every Naingate client relationship.
          </p>
        </div>
      </section>

      {/* Board members */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {board.map((m) => (
            <article key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="p-3 sm:p-4" style={{ background: "var(--gradient-gold)" }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary/30 ring-1 ring-primary/10 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.65)]">
                  <img
                    src={m.photo}
                    alt={`Portrait of ${m.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-base font-bold text-primary sm:text-lg">{m.name}</h2>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-accent">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Board Highlights */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Board Highlights</span>
            <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              Governance built for trust, growth and accountability
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Our Board sets the tone from the top — combining decades of insurance, banking, legal and public-sector experience with a clear mandate: protect policyholders, empower management, and deliver sustainable value for shareholders and partners.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{h.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{h.label}</div>
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-lg font-bold text-primary sm:text-xl">Key Committees</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {committees.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-base font-bold text-primary">{c.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-[1fr_auto] md:px-8">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Speak with our leadership team</h2>
            <p className="mt-3 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
              For partnership, governance, investor or media enquiries, our office of the Chairman is just one message away.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/2348023189052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              <PhoneCall className="h-4 w-4" /> WhatsApp Admin
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
