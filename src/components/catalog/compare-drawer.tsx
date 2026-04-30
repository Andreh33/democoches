"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Scale, X, Trash2 } from "lucide-react";
import { useCompare } from "@/components/compare-store";
import { Button } from "@/components/ui/button";
import { formatKm, formatPrice } from "@/lib/utils";
import { fuelLabels, transmissionLabels, bodyTypeLabels } from "@/lib/labels";
import { cn } from "@/lib/utils";
import type { Car } from "@/lib/types";

const ROWS: { label: string; render: (c: Car) => React.ReactNode }[] = [
  { label: "Año", render: (c) => <span className="font-mono">{c.year}</span> },
  {
    label: "Precio",
    render: (c) => (
      <span className="font-mono text-accent">{formatPrice(c.price)}</span>
    ),
  },
  { label: "Kilómetros", render: (c) => <span className="font-mono">{formatKm(c.km)}</span> },
  { label: "Combustible", render: (c) => fuelLabels[c.fuel] },
  { label: "Cambio", render: (c) => transmissionLabels[c.transmission] },
  { label: "Carrocería", render: (c) => bodyTypeLabels[c.bodyType] },
  { label: "Potencia", render: (c) => <span className="font-mono">{c.hp} CV</span> },
  { label: "Color", render: (c) => c.color },
  { label: "Propietarios", render: (c) => <span className="font-mono">{c.previousOwners}</span> },
];

export function CompareDrawer({ cars }: { cars: Car[] }) {
  const cmp = useCompare();
  const [open, setOpen] = useState(false);

  const selected = cmp.ids
    .map((id) => cars.find((c) => c.id === id))
    .filter((c): c is Car => Boolean(c));

  if (selected.length === 0) return null;

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-6 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-bg-elevated/90 px-5 py-3 text-sm shadow-lg backdrop-blur-xl"
      >
        <Scale className="h-4 w-4 text-accent" />
        Comparar ({selected.length}/{cmp.max})
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end bg-bg/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88dvh] w-full overflow-y-auto rounded-t-[24px] border-t border-border bg-bg p-6 sm:p-10"
            >
              <div className="container-x">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="font-display text-2xl">
                    Comparativa
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => cmp.clear()}
                    >
                      <Trash2 /> Limpiar
                    </Button>
                    <button
                      onClick={() => setOpen(false)}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border"
                      aria-label="Cerrar comparativa"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div
                  className="grid gap-4"
                  style={{
                    gridTemplateColumns: `120px repeat(${selected.length}, minmax(0, 1fr))`,
                  }}
                >
                  <div />
                  {selected.map((c) => (
                    <div
                      key={c.id}
                      className="space-y-3 rounded-[16px] border border-border p-3"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                        <Image
                          src={c.images[0]}
                          alt={`${c.brand} ${c.model}`}
                          fill
                          sizes="200px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
                          {c.brand}
                        </p>
                        <p className="text-sm font-medium">
                          {c.model} {c.version}
                        </p>
                      </div>
                    </div>
                  ))}
                  {ROWS.map((r) => (
                    <Row key={r.label} label={r.label} cars={selected} render={r.render} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Row({
  label,
  cars,
  render,
}: {
  label: string;
  cars: Car[];
  render: (c: Car) => React.ReactNode;
}) {
  return (
    <>
      <div className="border-t border-border/50 py-3 text-xs uppercase tracking-[0.18em] text-text-muted">
        {label}
      </div>
      {cars.map((c, i) => (
        <div
          key={c.id}
          className={cn(
            "border-t border-border/50 py-3 text-sm",
            i === 0 && "text-accent",
          )}
        >
          {render(c)}
        </div>
      ))}
    </>
  );
}
