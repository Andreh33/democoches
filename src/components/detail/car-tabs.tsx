"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn, formatKm, formatNumber } from "@/lib/utils";
import { fuelLabels, transmissionLabels, bodyTypeLabels } from "@/lib/labels";
import type { Car } from "@/lib/types";

const TABS = [
  { id: "descripcion", label: "Descripción" },
  { id: "equipamiento", label: "Equipamiento" },
  { id: "ficha", label: "Ficha técnica" },
  { id: "historial", label: "Historial" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function CarTabs({ car }: { car: Car }) {
  const [tab, setTab] = useState<TabId>("descripcion");

  return (
    <div>
      <div role="tablist" className="flex gap-2 overflow-x-auto border-b border-border">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "relative px-1 py-4 text-sm transition",
              tab === t.id ? "text-text" : "text-text-muted hover:text-text",
            )}
          >
            <span className="relative pr-6">
              {t.label}
              {tab === t.id ? (
                <span className="absolute -bottom-[17px] left-0 right-6 h-px bg-accent" />
              ) : null}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "descripcion" ? (
          <article className="prose prose-invert max-w-none whitespace-pre-line text-sm leading-relaxed text-text/90 sm:text-base">
            {car.longDescription}
          </article>
        ) : null}

        {tab === "equipamiento" ? (
          <ul className="grid gap-3 sm:grid-cols-2">
            {car.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  <Check className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        ) : null}

        {tab === "ficha" ? (
          <dl className="grid grid-cols-1 gap-x-10 gap-y-3 text-sm sm:grid-cols-2">
            {[
              ["Marca", car.brand],
              ["Modelo", car.model],
              ["Versión", car.version],
              ["Año", String(car.year)],
              ["Kilómetros", formatKm(car.km)],
              ["Combustible", fuelLabels[car.fuel]],
              ["Cambio", transmissionLabels[car.transmission]],
              ["Potencia", `${car.hp} CV`],
              ["Cilindrada", car.displacement ? `${formatNumber(car.displacement)} cc` : "—"],
              ["Carrocería", bodyTypeLabels[car.bodyType]],
              ["Puertas", String(car.doors)],
              ["Plazas", String(car.seats)],
              ["Color", car.color],
              ["Propietarios", String(car.previousOwners)],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between border-b border-border/60 py-2"
              >
                <dt className="text-text-muted">{k}</dt>
                <dd className="font-mono">{v}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {tab === "historial" ? (
          <ul className="grid gap-4 text-sm sm:grid-cols-2">
            {[
              ["Propietarios anteriores", String(car.previousOwners)],
              ["ITV", "Pasada al día"],
              ["Libro de mantenimiento", "Completo y firmado"],
              ["Accidentes registrados", "Sin accidentes"],
              ["Procedencia", "Particular España"],
              ["Distribución", "Realizada según plan oficial"],
              ["Garantía", "12 meses incluidos"],
              ["Revisión 150 puntos", "Aprobada"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="rounded-md border border-border/60 bg-bg-elevated/40 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
                  {k}
                </p>
                <p className="mt-1 font-medium">{v}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
