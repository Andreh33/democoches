"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { waLink, waMessages } from "@/lib/whatsapp";

const Hero3D = dynamic(
  () => import("@/components/hero-3d").then((m) => m.Hero3D),
  { ssr: false, loading: () => <div className="absolute inset-0" /> },
);

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden pt-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background:radial-gradient(70%_60%_at_50%_50%,color-mix(in_oklch,var(--accent)_18%,transparent),transparent_70%)] opacity-60"
      />

      <Hero3D />

      <div className="container-x relative z-10 flex min-h-[100dvh] flex-col justify-end pb-32 pt-24 sm:pb-40">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Concesionario premium · Sevilla
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display mt-6 max-w-3xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold"
        >
          Coches que enamoran <span className="text-accent">antes</span> de
          subirte a ellos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
        >
          Vehículos de segunda mano seleccionados uno a uno, con garantía de 12
          meses y revisión de 150 puntos. Sin presión, sin sorpresas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg">
            <a href="/coches">
              Ver inventario <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a
              href={waLink(waMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.8 },
          y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-text-muted"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
