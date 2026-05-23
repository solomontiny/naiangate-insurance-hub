import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const companyLinks = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/claims", label: "Claims" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/partners", label: "Partners" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="text-lg font-bold">Naingate Insurance</h3>
          <p className="mt-3 text-sm text-primary-foreground/70">
            A Digital Space Capital company. Registered Insurance Broker with NAICOM and NCRIB delivering risk management & insurance solutions across Nigeria.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Offices</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road, Ikoyi, Lagos Nigeria</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>42 Kenneth Dike Way, Bodija, Ibadan</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>9 Tema St, Wuse Zone 6, Abuja</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>info@naingateinsurancebrokers.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+234 (0) 800 000 0000</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Naingate Insurance Brokers Ltd — A Digital Space Capital company. All rights reserved.
      </div>
    </footer>
  );
}
