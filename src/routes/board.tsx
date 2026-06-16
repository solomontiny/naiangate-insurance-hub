import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/board")({
  component: BoardPage,
});

const board = [
  {
    name: "Amb. Dr. Olubukola Abitoye",
    role: "Executive Director",
    photo: "/team/Olubukola Abitoye.png",
    bio: "An accomplished executive with deep insurance, advocacy and stakeholder-engagement credentials.",
  },
  {
    name: "Ayo Abinna",
    role: "Board Member",
    photo: "/team/Lawrence Ojebode.png",
    bio: "Experienced governance and risk professional.",
  },
  {
    name: "Adegoke Olumayowa",
    role: "Board Member",
    photo: "/team/Kayode Adeoye.png",
    bio: "Strategic advisor in financial services.",
  },
];

function BoardPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Leadership
          </span>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            Board of Directors
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
            Experienced leaders providing governance, integrity and strategic direction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {board.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow transition hover:-translate-y-1"
            >
              <div className="p-3 sm:p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary/30">
                  <img
                    src={m.photo}
                    alt={`Portrait of ${m.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-base font-bold text-primary sm:text-lg">
                  {m.name}
                </h2>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {m.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}