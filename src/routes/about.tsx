import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Target, Compass, CheckCircle2 } from "lucide-react";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Naingate Insurance Brokers" },
      { name: "description", content: "Naingate Insurance Brokers Limited — registered with NAICOM and NCRIB. Our vision, mission and value-added services." },
    ],
  }),
  component: AboutPage,
});

const directors = [
  { name: "Ayo Abinna", role: "Chairman, Board of Directors" },
  { name: "Amb. Dr. Olubukola Abitoye", role: "Executive Director" },
  { name: "Kayode Adeoye", role: "Managing Director" },
  { name: "Dr. (Mrs.) Adeyinka Olumayowa", role: "Non-Executive Director" },
];

const values = [
  "Selection of best combination of cover, tailored to client's specific needs at competitive rates",
  "Insurance Audit, Recommendation and Advice",
  "Prompt settlement of claims",
  "Provision of personalised insurance services & consultancies",
  "Recommendation and selection of underwriters based on strengths & weaknesses",
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Us</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Insurance brokers you can trust</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Naingate Insurance Brokers Limited is a registered Insurance Broker with the National Insurance Commission (NAICOM) and the Nigerian Council of Registered Insurance Brokers (NCRIB), providing risk management and insurance solutions for Corporate Organisations, Enterprises, Government and Individuals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={about} alt="Family protection" loading="lazy" width={1280} height={896} className="rounded-2xl shadow-[var(--shadow-elegant)]" />
          <div className="space-y-8">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20"><Target className="h-5 w-5 text-accent" /></div>
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">To be Africa's finest pro-active and digital-led Insurance Broker renowned for excellent and prompt service.</p>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20"><Compass className="h-5 w-5 text-accent" /></div>
                <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">To achieve exponential growth through robust result-driven streams of opportunities, ensuring our stakeholders have the peace of mind they desire.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl font-bold text-primary">Value-added services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {values.map((v) => (
              <div key={v} className="flex gap-3 rounded-xl border border-border bg-card p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <h2 className="text-3xl font-bold text-primary">Board of Directors</h2>
        <p className="mt-2 text-muted-foreground">The leadership steering Naingate forward.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {directors.map((d) => (
            <div key={d.name} className="rounded-xl border border-border bg-card p-6 text-center transition hover:shadow-[var(--shadow-card)]">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                {d.name.split(" ").filter(p => /^[A-Z]/.test(p)).slice(0, 2).map(p => p[0]).join("")}
              </div>
              <h3 className="font-semibold text-primary">{d.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{d.role}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
