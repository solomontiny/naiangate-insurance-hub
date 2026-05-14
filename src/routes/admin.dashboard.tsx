import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Users, FileText, ShieldCheck, TrendingUp, LogOut, Bell } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Naingate" }, { name: "robots", content: "noindex" }] }),
  component: AdminDashboard,
});

const stats = [
  { icon: Users, label: "Total Clients", value: "1,284", trend: "+12%" },
  { icon: FileText, label: "Active Policies", value: "3,917", trend: "+5%" },
  { icon: ShieldCheck, label: "Claims Settled", value: "412", trend: "+18%" },
  { icon: TrendingUp, label: "Premium Volume", value: "₦820M", trend: "+22%" },
];

const recent = [
  { client: "Keystone Bank Ltd", plan: "Property Insurance", status: "Active", date: "2026-05-12" },
  { client: "Lagos State Govt", plan: "Group Personal Accident", status: "Renewed", date: "2026-05-10" },
  { client: "Iron Resources", plan: "Contractors All Risk", status: "Pending", date: "2026-05-09" },
  { client: "Nigerian Shippers' Council", plan: "Marine Insurance", status: "Active", date: "2026-05-07" },
  { client: "Ogun State Govt", plan: "Fire & Special Perils", status: "Active", date: "2026-05-05" },
];

function AdminDashboard() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("naingate_admin") !== "1") {
      navigate({ to: "/admin/login" });
    } else {
      setReady(true);
    }
  }, [navigate]);

  if (!ready) return null;

  const logout = () => {
    localStorage.removeItem("naingate_admin");
    navigate({ to: "/admin/login" });
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-primary">Naingate Admin</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Control Panel</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-md p-2 hover:bg-muted">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
            </button>
            <Link to="/" className="hidden rounded-md border border-input px-3 py-2 text-sm hover:bg-muted md:inline-block">View Site</Link>
            <button onClick={logout} className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <h1 className="text-2xl font-bold text-primary md:text-3xl">Welcome back, Admin</h1>
        <p className="mt-1 text-sm text-muted-foreground">Here's what's happening across your portfolio today.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-semibold text-accent-foreground">{s.trend}</span>
              </div>
              <div className="mt-5 text-2xl font-bold text-primary">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-bold text-primary">Recent Policies</h2>
            <button className="text-xs font-medium text-primary hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3">Client</th>
                  <th className="px-6 py-3">Plan</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((r) => (
                  <tr key={r.client} className="border-t border-border">
                    <td className="px-6 py-4 font-medium text-foreground">{r.client}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r.plan}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        r.status === "Active" ? "bg-accent/20 text-accent-foreground" :
                        r.status === "Renewed" ? "bg-primary/10 text-primary" :
                        "bg-muted text-muted-foreground"
                      }`}>{r.status}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
