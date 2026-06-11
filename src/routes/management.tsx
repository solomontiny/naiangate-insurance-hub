import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Linkedin, Mail, Search } from "lucide-react";
import { useMemo, useState } from "react";

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

type Department = "Executive" | "Operations" | "Risk" | "People" | "Legal";

interface Member {
  name: string;
  role: string;
  photo: string;
  department: Department;
}

const team: Member[] = [
  { name: "Olubukola Abitoye", role: "Group CEO", photo: olubukola.url, department: "Executive" },
  { name: "Lawrence Sunday Ojebode", role: "Executive Director", photo: lawrence.url, department: "Executive" },
  { name: "Kayode Adeoye", role: "Managing Director", photo: kayode.url, department: "Executive" },
  { name: "Gabriel Egwuatu", role: "Group Chief Operating Officer", photo: gabriel.url, department: "Operations" },
  { name: "Ifeoma Isinguzo", role: "Head, Human Resources", photo: ifeoma.url, department: "People" },
  { name: "Ezekiel Olabode", role: "Head, Risk & Control", photo: ezekiel.url, department: "Risk" },
  { name: "Joseph Folarin", role: "Legal Officer", photo: joseph.url, department: "Legal" },
];

const filters: Array<"All" | Department> = ["All", "Executive", "Operations", "Risk", "People", "Legal"];

function ManagementPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return team.filter((m) => {
      const matchDept = active === "All" || m.department === active;
      const q = query.trim().toLowerCase();
      const matchQuery = !q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q);
      return matchDept && matchQuery;
    });
  }, [active, query]);

  return (
    <SiteLayout>
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Leadership</span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">Management Team</h1>
          <p className="mt-4 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
            The executives behind our service delivery — combining decades of industry expertise with a relentless focus on client outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        {/* Filters */}
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
            {filters.map((f) => {
              const isActive = active === f;
              const count = f === "All" ? team.length : team.filter((m) => m.department === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {f} <span className="ml-1 opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or role"
              className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary/30">
                <img
                  src={m.photo}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {m.department}
                </span>
                <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <a
                      href="#"
                      aria-label={`${m.name} on LinkedIn`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur transition hover:bg-accent hover:text-accent-foreground"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="mailto:info@naingateinsurancebrokers.com"
                      aria-label={`Email ${m.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary backdrop-blur transition hover:bg-accent hover:text-accent-foreground"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h2 className="truncate text-base font-bold text-primary">{m.name}</h2>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-accent">{m.role}</p>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">No team members match your search.</p>
        )}
      </section>
    </SiteLayout>
  );
}
