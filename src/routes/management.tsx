import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/management")({
  component: ManagementPage,
});

const team = [
  {
    name: "Olubukola Abitoye",
    role: "Group CEO",
    photo: "/team/olubukola-abitoye.jpg",
  },
  {
    name: "Lawrence Sunday Ojebode",
    role: "Executive Director",
    photo: "/team/lawrence-ojebode.jpg",
  },
  {
    name: "Kayode Adeoye",
    role: "Managing Director",
    photo: "/team/kayode-adeoye.jpg",
  },
  {
    name: "Gabriel Egwuatu",
    role: "Group COO",
    photo: "/team/gabriel-egwuatu.jpg",
  },
  {
    name: "Ifeoma Isinguzo",
    role: "Head HR",
    photo: "/team/ifeoma-isinguzo.jpg",
  },
  {
    name: "Ezekiel Olabode",
    role: "Head Risk & Control",
    photo: "/team/ezekiel-olabode.jpg",
  },
  {
    name: "Joseph Folarin",
    role: "Legal Officer",
    photo: "/team/joseph-folarin.jpg",
  },
];

function ManagementPage() {
  return (
    <SiteLayout>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Leadership
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Management Team
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Executive leadership team driving operations and client delivery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl border bg-card p-4 shadow"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="h-64 w-full rounded-xl object-cover"
              />

              <h2 className="mt-4 font-bold">{m.name}</h2>
              <p className="text-sm text-muted-foreground">{m.role}</p>

              <div className="mt-3 flex gap-2">
                <Linkedin className="h-4 w-4" />
                <Mail className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}