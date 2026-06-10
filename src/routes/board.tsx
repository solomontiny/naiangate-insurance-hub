import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Linkedin, Mail } from "lucide-react";

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

function BoardPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Leadership</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Board of Directors</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Experienced leaders providing the governance, integrity and strategic direction that underpin every Naingate client relationship.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {board.map((m) => (
            <article key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/5] overflow-hidden bg-secondary/30">
                <img
                  src={m.photo}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-primary">{m.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{m.role}</p>
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
    </SiteLayout>
  );
}
