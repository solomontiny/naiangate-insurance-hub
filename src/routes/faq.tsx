import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Naingate Insurance Brokers" },
      { name: "description", content: "Answers to frequently asked questions about insurance broking, claims, premiums and policies at Naingate." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What is an insurance broker?", a: "A broker represents you — not the insurer. We negotiate the best cover and price across multiple underwriters on your behalf." },
  { q: "Do I pay extra to use a broker?", a: "No. Premiums are the same whether you buy direct or through a broker. Brokers are remunerated by the underwriter." },
  { q: "How fast can I get a quote?", a: "Most personal lines quotes are returned within 24 hours. Commercial risks may take 2–5 business days depending on complexity." },
  { q: "How do I file a claim?", a: "Use our Claims page, email claims@naingateinsurancebrokers.com or call our 24/7 hotline. We respond within one business hour." },
  { q: "Is Naingate licensed?", a: "Yes — we are a registered Insurance Broker with NAICOM and a member of the NCRIB." },
  { q: "Which insurers do you work with?", a: "We work with all leading Nigerian underwriters and selected global reinsurers. See our Partners page." },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Frequently asked questions</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 md:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-primary">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
