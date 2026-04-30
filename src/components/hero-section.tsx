"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, waMessages } from "@/lib/whatsapp";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1612368812851-5f7baf8c0d1d?q=80&w=2400&auto=format&fit=crop";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden pt-16">
      {/* Background photo */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={HERO_IMAGE}
          alt="Coche premium en exposición"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Legibility overlay — vertical fade + left-side wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--bg)_0%,color-mix(in_oklch,var(--bg)_80%,transparent)_45%,transparent_75%),linear-gradient(to_top,var(--bg)_0%,transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_50%,color-mix(in_oklch,var(--accent)_15%,transparent),transparent_70%)] opacity-70"
      />

      <div className="container-x relative z-10 grid min-h-[calc(100dvh-4rem)] grid-cols-1 items-center pb-24 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-32">
        {/* Text column */}
        <div className="lg:col-span-7 xl:col-span-6">
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
            className="font-display mt-6 text-balance text-[clamp(2.5rem,5.5vw,5rem)] font-semibold"
          >
            Coches que enamoran{" "}
            <span className="text-accent">antes</span> de subirte a ellos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
          >
            Vehículos de segunda mano seleccionados uno a uno, con garantía de
            12 meses y revisión de 150 puntos. Sin presión, sin sorpresas.
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

        {/* Reservar pill, floating over the car image area */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 lg:col-span-5 lg:mt-0 lg:self-end lg:justify-self-end xl:col-span-6"
        >
          <a
            href={waLink(
              "Hola, me gustaría reservar una visita para ver vuestro inventario en Sevilla. ¿Qué horario tenéis disponible?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 rounded-full border border-border/70 bg-bg/55 py-2 pl-2 pr-7 backdrop-blur-xl transition hover:border-accent/40 hover:bg-bg/70"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_0_30px_-8px_var(--accent)] transition group-hover:scale-105">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.22em] text-text-muted">
                Reserva tu visita
              </span>
              <span className="font-display text-lg font-medium">
                Reservar por WhatsApp
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-text-muted transition group-hover:translate-x-0.5 group-hover:text-text" />
          </a>
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
