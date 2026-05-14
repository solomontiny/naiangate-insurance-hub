import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="text-lg font-bold">Naingate Insurance</h3>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Registered Insurance Broker with NAICOM and NCRIB. Risk management & insurance solutions across Nigeria.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Offices</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />26 Sumbo Jibowu St, Ikoyi, Lagos</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />42 Kenneth Dike Way, Bodija, Ibadan</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />9 Tema St, Wuse Zone 6, Abuja</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><Mail className="h-4 w-4" /> info@naingateinsurancebrokers.com</li>
            <li className="flex gap-2"><Phone className="h-4 w-4" /> +234 (0) 800 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Naingate Insurance Brokers Ltd. All rights reserved.
      </div>
    </footer>
  );
}
