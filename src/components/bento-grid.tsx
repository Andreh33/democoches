"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Wrench,
  Scale,
  Truck,
  Sparkles,
  Headphones,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS: {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  visual: React.ReactNode;
  className?: string;
}[] = [
  {
    title: "Garantía 12 meses",
    body:
      "Incluida en el precio, sin letra pequeña. Cubre averías mecánicas y eléctricas en taller autorizado.",
    icon: ShieldCheck,
    className: "lg:col-span-2",
    visual: (
      <div className="absolute right-6 top-6 flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
        <span>12 / 12</span>
        <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-bg/60">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-full bg-accent"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Revisión 150 puntos",
    body:
      "Cada coche pasa por un protocolo de inspección documentado y entregado al cliente.",
    icon: Wrench,
    visual: (
      <div className="absolute bottom-5 right-5 grid grid-cols-10 gap-1.5 opacity-80">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.012, duration: 0.4 }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        ))}
      </div>
    ),
  },
  {
    title: "Tasamos tu coche",
    body:
      "Te damos un precio justo en menos de 24 h. Lo descontamos directamente del coche que compres con nosotros.",
    icon: Scale,
    visual: (
      <div className="absolute bottom-5 right-5 font-mono text-3xl text-accent">
        −24h
      </div>
    ),
  },
  {
    title: "Entrega a domicilio",
    body:
      "En cualquier provincia de Andalucía, sin coste adicional. Pasamos por delante con un transportador profesional.",
    icon: Truck,
    className: "lg:col-span-2",
    visual: (
      <div className="absolute bottom-5 right-6 flex items-center gap-2 text-text-muted">
        <span className="h-px w-32 bg-text-muted/40" />
        <Truck className="h-5 w-5 text-accent" />
      </div>
    ),
  },
  {
    title: "Detallado profesional",
    body:
      "El coche llega como nuevo: limpieza interior y exterior, descontaminación de pintura y olor neutro.",
    icon: Sparkles,
    visual: null,
  },
  {
    title: "Postventa real",
    body:
      "Una persona dedicada por cliente. Sin call-centers, sin tickets que se pierden.",
    icon: Headphones,
    visual: null,
  },
];

export function BentoGrid() {
  return (
    <section className="container-x py-32">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Por qué AutoSelect
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.5rem)] font-semibold">
          Lo importante hecho con cuidado.
        </h2>
        <p className="mt-4 max-w-xl text-text-muted">
          No vendemos coches por volumen. Trabajamos un inventario reducido para
          poder cuidar lo que importa: el origen, la mecánica, la entrega y el
          servicio post-venta.
        </p>
      </div>
      <div className="mt-12 grid auto-rows-[200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={cn(
                "relative overflow-hidden rounded-[20px] border border-border bg-bg-elevated/50 p-6 transition-colors hover:border-text-muted/40",
                it.className,
              )}
            >
              <Icon className="h-5 w-5 text-accent" />
              <h3 className="mt-6 font-display text-xl font-medium">
                {it.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                {it.body}
              </p>
              {it.visual}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
