import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Underwriting Partners — Naingate Insurance Brokers" },
      { name: "description", content: "Naingate works with Nigeria's leading underwriters and reinsurers to deliver world-class insurance solutions." },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  "AIICO Insurance", "Leadway Assurance", "AXA Mansard", "Custodian Insurance",
  "NEM Insurance", "Sovereign Trust", "Cornerstone Insurance", "Sanlam Allianz",
  "Mutual Benefits", "Linkage Assurance", "Royal Exchange", "Continental Re",
];

function PartnersPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Partners</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">A network you can trust</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            We collaborate with Nigeria's strongest underwriters and global reinsurers to place every risk with the right counterparty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-28 items-center justify-center rounded-2xl border border-border bg-card p-5 text-center text-sm font-semibold text-primary transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-2xl font-bold text-primary">Become a partner</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Underwriters, reinsurers and InsurTech providers — get in touch to explore a partnership with Naingate Insurance Brokers.
          </p>
          <a href="mailto:partners@naingateinsurancebrokers.com" className="mt-6 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
            partners@naingateinsurancebrokers.com
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
