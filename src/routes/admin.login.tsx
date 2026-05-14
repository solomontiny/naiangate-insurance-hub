import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  head: () => ({ meta: [{ title: "Admin Login — Naingate" }, { name: "robots", content: "noindex" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@naingate.com");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo-only frontend auth (replace with real backend later).
    if (email === "admin@naingate.com" && pwd === "admin123") {
      localStorage.setItem("naingate_admin", "1");
      navigate({ to: "/admin/dashboard" });
    } else {
      setErr("Invalid credentials. Try admin@naingate.com / admin123");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--gradient-hero)" }}>
      <div className="w-full max-w-md rounded-2xl bg-card p-8 shadow-[var(--shadow-elegant)]">
        <Link to="/" className="text-xs text-muted-foreground hover:text-primary">← Back to site</Link>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">Admin Portal</h1>
            <p className="text-xs text-muted-foreground">Naingate Insurance Brokers</p>
          </div>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Password</label>
            <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" required className="rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          {err && <p className="text-sm text-destructive">{err}</p>}
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary-glow">
            <Lock className="h-4 w-4" /> Sign In
          </button>
          <p className="text-center text-xs text-muted-foreground">Demo: admin@naingate.com / admin123</p>
        </form>
      </div>
    </div>
  );
}
