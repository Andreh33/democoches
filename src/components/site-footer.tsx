"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const cols = [
  {
    title: "Inventario",
    links: [
      { href: "/coches", label: "Todos los coches" },
      { href: "/coches?carroceria=suv", label: "SUV" },
      { href: "/coches?carroceria=berlina", label: "Berlinas" },
      { href: "/coches?carroceria=compacto", label: "Compactos" },
      { href: "/coches?carroceria=familiar", label: "Familiares" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { href: "/financiacion", label: "Financiación" },
      { href: "/vender-tu-coche", label: "Tasamos tu coche" },
      { href: "/contacto", label: "Garantía 12 meses" },
      { href: "/contacto", label: "Entrega a domicilio" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/sobre-nosotros", label: "Sobre nosotros" },
      { href: "/blog", label: "Blog" },
      { href: "/contacto", label: "Contacto" },
      { href: "/aviso-legal", label: "Aviso legal" },
      { href: "/privacidad", label: "Privacidad" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
];

export function SiteFooter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="mt-32 border-t border-border bg-bg-elevated/40">
      <div className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold tracking-tight">
                AutoSelect
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Sevilla
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Vehículos de segunda mano premium curados uno a uno. Garantía 12
              meses, revisión 150 puntos y financiación a medida.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 max-w-sm"
            >
              <label
                htmlFor="newsletter"
                className="text-xs uppercase tracking-[0.2em] text-text-muted"
              >
                Newsletter mensual
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  disabled={submitted}
                  placeholder="email@ejemplo.com"
                  className="h-11 flex-1 rounded-full border border-border bg-bg px-4 text-sm focus:border-accent focus:outline-none disabled:opacity-50"
                />
                <Button
                  type="submit"
                  size="md"
                  variant={submitted ? "subtle" : "default"}
                  disabled={submitted}
                >
                  {submitted ? <Check /> : <ArrowRight />}
                </Button>
              </div>
              <p className="mt-3 text-xs text-text-muted">
                {submitted
                  ? "¡Apuntado! Te avisaremos de las nuevas llegadas."
                  : "Una nueva selección cada mes. Sin spam."}
              </p>
            </form>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  {c.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={`${c.title}-${l.label}`}>
                      <Link
                        href={l.href}
                        className="text-text transition hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 text-xs text-text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} AutoSelect Sevilla S.L. — Todos los
            derechos reservados. CIF B-87.654.321 · C/ Luis Montoto 156, 41018
            Sevilla.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full border border-border transition hover:text-accent"
            >
              <IconBrandInstagram className="h-3.5 w-3.5" stroke={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-8 w-8 place-items-center rounded-full border border-border transition hover:text-accent"
            >
              <IconBrandFacebook className="h-3.5 w-3.5" stroke={1.5} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="grid h-8 w-8 place-items-center rounded-full border border-border transition hover:text-accent"
            >
              <IconBrandYoutube className="h-3.5 w-3.5" stroke={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
