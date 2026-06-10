import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import family from "@/assets/hero-family.jpg";
import corporate from "@/assets/hero-corporate.jpg";
import health from "@/assets/hero-health.jpg";
import auto from "@/assets/hero-auto.jpg";
import business from "@/assets/hero-business.jpg";

const slides = [
  {
    image: family,
    eyebrow: "Family & Life Cover",
    title: "Protect what matters most",
    subtitle: "Tailored life and family insurance plans designed for every Nigerian household.",
  },
  {
    image: corporate,
    eyebrow: "Corporate Solutions",
    title: "Insurance built for business",
    subtitle: "From SMEs to multinationals — comprehensive risk management across Africa.",
  },
  {
    image: health,
    eyebrow: "Health Insurance",
    title: "Quality healthcare, fully covered",
    subtitle: "Access top-tier hospitals nationwide with our flexible health plans.",
  },
  {
    image: auto,
    eyebrow: "Motor Insurance",
    title: "Drive with total confidence",
    subtitle: "Comprehensive and third-party motor cover with fast claims processing.",
  },
  {
    image: business,
    eyebrow: "Trusted Partnership",
    title: "Advisors you can rely on",
    subtitle: "NAICOM & NCRIB registered brokers — transparent, prompt and professional.",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate h-[640px] overflow-hidden md:h-[720px]">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt={s.title}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(110deg, oklch(0.18 0.08 260 / 0.92) 0%, oklch(0.22 0.09 260 / 0.7) 45%, oklch(0.25 0.09 260 / 0.25) 100%)" }}
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-8">
        <div key={index} className="max-w-2xl text-primary-foreground animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wider text-accent">
            <ShieldCheck className="h-3.5 w-3.5" /> {slides[index].eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            {slides[index].title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            {slides[index].subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-lg transition hover:-translate-y-0.5"
            >
              Explore Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/15"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-accent" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
