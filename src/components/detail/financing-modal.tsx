"use client";

import { useState } from "react";
import { X, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { calculateMonthlyPayment, formatPrice } from "@/lib/utils";
import { waLink, waMessages } from "@/lib/whatsapp";
import type { Car } from "@/lib/types";

const TIN = 0.07;

export function FinancingModal({ car }: { car: Car }) {
  const [open, setOpen] = useState(false);
  const [down, setDown] = useState(Math.round(car.price * 0.2));
  const [months, setMonths] = useState(60);

  const principal = Math.max(0, car.price - down);
  const cuota = principal > 0 ? calculateMonthlyPayment(principal, TIN, months) : 0;
  const totalPaid = cuota * months + down;
  const totalInterest = Math.max(0, totalPaid - car.price);
  const interestPct = totalPaid > 0 ? totalInterest / totalPaid : 0;

  return (
    <>
      <Button
        variant="outline"
        size="md"
        onClick={() => setOpen(true)}
        className="w-full"
      >
        <Calculator /> Calcular financiación
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 p-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 16, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 16, scale: 0.97, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-[20px] border border-border bg-bg-elevated p-7"
            >
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-display text-2xl">Financiación</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-text-muted">
                Simulación informativa al {(TIN * 100).toFixed(1)}% TIN. No es
                una oferta vinculante.
              </p>

              <div className="mt-6 space-y-5 text-sm">
                <Range
                  label="Precio del coche"
                  min={car.price}
                  max={car.price}
                  step={1}
                  value={car.price}
                  onChange={() => {}}
                  format={formatPrice}
                  disabled
                />
                <Range
                  label="Entrada"
                  min={0}
                  max={car.price}
                  step={500}
                  value={down}
                  onChange={setDown}
                  format={formatPrice}
                />
                <Range
                  label="Plazo (meses)"
                  min={12}
                  max={84}
                  step={6}
                  value={months}
                  onChange={setMonths}
                  format={(n) => `${n} m.`}
                />
              </div>

              <div className="mt-7 rounded-[16px] border border-border bg-bg p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
                  Cuota mensual estimada
                </p>
                <p className="font-mono mt-1 text-3xl font-semibold">
                  {formatPrice(cuota)}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-text-muted">Total a pagar</p>
                    <p className="mt-1 font-mono">{formatPrice(totalPaid)}</p>
                  </div>
                  <div>
                    <p className="text-text-muted">Intereses totales</p>
                    <p className="mt-1 font-mono">
                      {formatPrice(totalInterest)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-bg-elevated">
                  <motion.div
                    layout
                    transition={{ duration: 0.4 }}
                    className="bg-text"
                    style={{ width: `${(1 - interestPct) * 100}%` }}
                  />
                  <motion.div
                    layout
                    transition={{ duration: 0.4 }}
                    className="bg-accent"
                    style={{ width: `${interestPct * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[10px] text-text-muted">
                  <span>Capital</span>
                  <span>Intereses</span>
                </div>
              </div>

              <Button asChild variant="whatsapp" size="md" className="mt-6 w-full">
                <a
                  href={waLink(waMessages.financing(car))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar oferta personalizada
                </a>
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Range({
  label,
  min,
  max,
  step,
  value,
  onChange,
  format,
  disabled,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (n: number) => string;
  disabled?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-[0.18em] text-text-muted">
          {label}
        </span>
        <span className="font-mono text-sm">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--accent)] disabled:opacity-40"
      />
    </div>
  );
}
