import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Linkedin, Mail } from "lucide-react";

import olubukola from "@/assets/team/olubukola-abitoye.jpg.asset.json";
import lawrence from "@/assets/team/lawrence-ojebode.jpg.asset.json";
import kayode from "@/assets/team/kayode-adeoye.jpg.asset.json";
import ifeoma from "@/assets/team/ifeoma-isinguzo.jpg.asset.json";
import ezekiel from "@/assets/team/ezekiel-olabode.jpg.asset.json";
import gabriel from "@/assets/team/gabriel-egwuatu.jpg.asset.json";
import joseph from "@/assets/team/joseph-folarin.jpg.asset.json";

export const Route = createFileRoute("/management")({
  head: () => ({
    meta: [
      { title: "Management Team — Naingate Insurance Brokers" },
      { name: "description", content: "Meet the executive management team running Naingate Insurance Brokers — operations, risk, legal, HR and client delivery." },
      { property: "og:title", content: "Management Team — Naingate Insurance Brokers" },
      { property: "og:description", content: "The executives running Naingate Insurance Brokers." },
    ],
  }),
  component: ManagementPage,
});

const team = [
  { name: "Olubukola Abitoye", role: "Group CEO", photo: olubukola.url },
  { name: "Lawrence Sunday Ojebode", role: "Executive Director", photo: lawrence.url },
  { name: "Kayode Adeoye", role: "Managing Director", photo: kayode.url },
  { name: "Gabriel Egwuatu", role: "Group Chief Operating Officer", photo: gabriel.url },
  { name: "Ifeoma Isinguzo", role: "Head, Human Resources", photo: ifeoma.url },
  { name: "Ezekiel Olabode", role: "Head, Risk & Control", photo: ezekiel.url },
  { name: "Joseph Folarin", role: "Legal Officer", photo: joseph.url },
];

function ManagementPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Leadership</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Management Team</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            The executives behind our service delivery — combining decades of industry expertise with a relentless focus on client outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary/30">
                <img
                  src={m.photo}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h2 className="text-base font-bold text-primary">{m.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{m.role}</p>
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
