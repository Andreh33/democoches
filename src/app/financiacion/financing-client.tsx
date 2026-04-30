"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { calculateMonthlyPayment, formatPrice } from "@/lib/utils";
import { waLink, waMessages } from "@/lib/whatsapp";

const TIN = 0.07;

export function FinancingClient() {
  const [price, setPrice] = useState(20000);
  const [down, setDown] = useState(4000);
  const [months, setMonths] = useState(60);

  const principal = Math.max(0, price - down);
  const cuota = principal > 0 ? calculateMonthlyPayment(principal, TIN, months) : 0;
  const total = cuota * months + down;
  const intereses = Math.max(0, total - price);
  const interestPct = total > 0 ? intereses / total : 0;

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-8 rounded-[20px] border border-border bg-bg-elevated/40 p-8">
        <Range
          label="Precio del coche"
          min={5000}
          max={60000}
          step={500}
          value={price}
          onChange={setPrice}
          format={formatPrice}
        />
        <Range
          label="Entrada"
          min={0}
          max={price}
          step={500}
          value={down}
          onChange={setDown}
          format={formatPrice}
        />
        <Range
          label="Plazo"
          min={12}
          max={96}
          step={6}
          value={months}
          onChange={setMonths}
          format={(n) => `${n} meses`}
        />
      </div>

      <div className="rounded-[20px] border border-border bg-bg p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Cuota mensual estimada
        </p>
        <p className="font-mono mt-2 text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none">
          {formatPrice(cuota)}
        </p>
        <p className="mt-2 text-xs text-text-muted">
          TIN {(TIN * 100).toFixed(1)}% · TAE aproximada {(TIN * 100 + 0.5).toFixed(2)}%
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-md border border-border/60 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-text-muted">
              Total a pagar
            </dt>
            <dd className="font-mono mt-1 text-lg">{formatPrice(total)}</dd>
          </div>
          <div className="rounded-md border border-border/60 p-4">
            <dt className="text-xs uppercase tracking-[0.18em] text-text-muted">
              Intereses
            </dt>
            <dd className="font-mono mt-1 text-lg">{formatPrice(intereses)}</dd>
          </div>
        </dl>

        <div className="mt-8 flex h-3 w-full overflow-hidden rounded-full bg-bg-elevated">
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
          <span>Capital · {formatPrice(price - down)}</span>
          <span>Intereses · {formatPrice(intereses)}</span>
        </div>

        <Button asChild variant="whatsapp" size="lg" className="mt-8 w-full">
          <a
            href={waLink(
              `Hola, me gustaría una oferta personalizada de financiación. Precio: ${formatPrice(price)} · Entrada: ${formatPrice(down)} · Plazo: ${months} meses.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar oferta personalizada
          </a>
        </Button>
      </div>
    </div>
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
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (n: number) => string;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
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
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--accent)]"
      />
    </div>
  );
}
