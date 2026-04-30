"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Selección curada",
    body:
      "Cada vehículo entra en nuestro inventario solo si cumple un protocolo estricto de procedencia, kilometraje, mantenimiento documentado y revisión mecánica. Lo que no compraríamos para nuestra propia familia, no lo ponemos a la venta.",
    path: "M8 28 L20 14 L32 26 L44 12",
  },
  {
    n: "02",
    title: "Revisión 150 puntos",
    body:
      "Diagnóstico OBD II, banco de potencia, alineación, frenos, suspensión, climatización y carrocería. Recibes el listado completo firmado por el taller y, si algo necesita atención, lo intervenimos antes de la entrega. Sin parches y sin sorpresas.",
    path: "M10 26 L18 26 L22 16 L30 36 L34 22 L42 22",
  },
  {
    n: "03",
    title: "Entrega y respaldo",
    body:
      "Garantía de 12 meses incluida en el precio, financiación a medida si la necesitas y entrega a domicilio en cualquier provincia de Andalucía. El cliente que compra con nosotros, vuelve y recomienda. Eso es lo que medimos.",
    path: "M8 32 C16 8, 28 8, 32 24 S 44 36, 44 18",
  },
];

function Step({ s, idx }: { s: typeof STEPS[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.08, duration: 0.6 }}
      className="relative"
    >
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {s.n}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <svg
        viewBox="0 0 52 40"
        className="mb-6 h-10 w-12 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <motion.path
          d={s.path}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
        />
      </svg>
      <h3 className="font-display text-2xl font-medium">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{s.body}</p>
    </motion.div>
  );
}

export function HowWeWork() {
  return (
    <section className="container-x py-32">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Cómo trabajamos
        </p>
        <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.5rem)] font-semibold">
          Tres pasos. <span className="text-accent">Cero atajos.</span>
        </h2>
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
        {STEPS.map((s, i) => (
          <Step key={s.n} s={s} idx={i} />
        ))}
      </div>
    </section>
  );
}
