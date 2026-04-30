"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { useFavorites } from "@/components/favorites-store";
import { Button } from "@/components/ui/button";
import { waLink, waMessages } from "@/lib/whatsapp";

const NAV = [
  { href: "/coches", label: "Inventario" },
  { href: "/financiacion", label: "Financiación" },
  { href: "/vender-tu-coche", label: "Vender tu coche" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { ids } = useFavorites();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open so touch scroll
  // doesn't leak through and reveal the page underneath.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    const prevTouch = body.style.touchAction;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      body.style.touchAction = prevTouch;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-bg/70 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="AutoSelect Sevilla — Inicio"
            className="flex items-center gap-2"
          >
            <span className="font-display text-lg font-semibold tracking-tight">
              AutoSelect
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Sevilla
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-text-muted transition hover:text-text"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/coches?favoritos=1"
              aria-label={`Favoritos (${ids.length})`}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition hover:text-text"
            >
              <Heart className="h-4 w-4" />
              {ids.length > 0 ? (
                <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 font-mono text-[10px] text-accent-foreground">
                  {ids.length}
                </span>
              ) : null}
            </Link>
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button
              asChild
              variant="default"
              size="sm"
              className="hidden lg:inline-flex"
            >
              <a
                href={waLink(waMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex flex-col overflow-y-auto overscroll-contain bg-bg md:hidden"
              style={{ backgroundColor: "var(--bg)" }}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="container-x flex h-16 flex-none items-center justify-between">
                <span className="font-display text-lg font-semibold tracking-tight">
                  AutoSelect
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="container-x flex flex-col gap-2 py-8">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-4 font-display text-3xl font-medium"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="container-x mt-auto flex items-center gap-3 pb-10 pt-8">
                <ThemeToggle />
                <Button asChild variant="whatsapp" size="md" className="flex-1">
                  <a
                    href={waLink(waMessages.general())}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
