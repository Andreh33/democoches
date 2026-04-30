"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";

const STATS = [
  { value: 1200, suffix: "+", label: "Coches vendidos" },
  { value: 18, suffix: "", label: "Años de experiencia" },
  { value: 4.9, suffix: "★", label: "Valoración Google", decimals: 1 },
  { value: 100, suffix: "%", label: "Coches revisados" },
];

function CountUp({
  to,
  decimals = 0,
  duration = 1.4,
  start,
}: {
  to: number;
  decimals?: number;
  duration?: number;
  start: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / (duration * 1000));
      const eased = 1 - Math.pow(1 - k, 3);
      setN(eased * to);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, start]);
  return (
    <span className="font-mono">
      {n.toLocaleString("es-ES", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

export function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="border-y border-border/60 bg-bg-elevated/30">
      <div className="container-x grid grid-cols-2 gap-x-8 gap-y-12 py-20 lg:grid-cols-4 lg:gap-x-12">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight">
              <CountUp to={s.value} decimals={s.decimals ?? 0} start={inView} />
              <span className="text-accent">{s.suffix}</span>
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-text-muted">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
