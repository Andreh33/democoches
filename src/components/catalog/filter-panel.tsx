"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { fuelLabels, transmissionLabels, bodyTypeLabels } from "@/lib/labels";
import type { Car, FuelType, Transmission, BodyType } from "@/lib/types";

export type Filters = {
  search: string;
  brand: string[];
  fuel: FuelType[];
  transmission: Transmission[];
  bodyType: BodyType[];
  priceMin: number;
  priceMax: number;
  kmMin: number;
  kmMax: number;
  yearMin: number;
  yearMax: number;
  favorites: boolean;
};

export function defaultFilters(cars: Car[]): Filters {
  const prices = cars.map((c) => c.price);
  const kms = cars.map((c) => c.km);
  const years = cars.map((c) => c.year);
  return {
    search: "",
    brand: [],
    fuel: [],
    transmission: [],
    bodyType: [],
    priceMin: Math.min(...prices),
    priceMax: Math.max(...prices),
    kmMin: Math.min(...kms),
    kmMax: Math.max(...kms),
    yearMin: Math.min(...years),
    yearMax: Math.max(...years),
    favorites: false,
  };
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs transition",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border text-text-muted hover:border-text-muted hover:text-text",
      )}
    >
      {children}
    </button>
  );
}

function Range({
  label,
  min,
  max,
  step,
  values,
  format,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  values: [number, number];
  format: (n: number) => string;
  onChange: (v: [number, number]) => void;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-xs uppercase tracking-[0.18em] text-text-muted">
          {label}
        </span>
        <span className="font-mono text-xs text-text-muted">
          {format(values[0])} — {format(values[1])}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[0]}
          onChange={(e) => {
            const v = Math.min(Number(e.target.value), values[1]);
            onChange([v, values[1]]);
          }}
          className="flex-1 accent-[var(--accent)]"
          aria-label={`${label} mínimo`}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[1]}
          onChange={(e) => {
            const v = Math.max(Number(e.target.value), values[0]);
            onChange([values[0], v]);
          }}
          className="flex-1 accent-[var(--accent)]"
          aria-label={`${label} máximo`}
        />
      </div>
    </div>
  );
}

export function FilterPanel({
  cars,
  filters,
  setFilters,
}: {
  cars: Car[];
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  const brands = Array.from(new Set(cars.map((c) => c.brand))).sort();
  const def = defaultFilters(cars);

  function toggleArr<T extends string>(arr: T[], v: T): T[] {
    return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
  }

  return (
    <div className="space-y-8 text-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Filtros
        </h2>
        <button
          onClick={() => setFilters(def)}
          className="flex items-center gap-1 text-xs text-text-muted underline-offset-4 hover:text-accent hover:underline"
        >
          <X className="h-3.5 w-3.5" /> Reiniciar
        </button>
      </div>

      <Range
        label="Precio"
        min={def.priceMin}
        max={def.priceMax}
        step={500}
        values={[filters.priceMin, filters.priceMax]}
        format={(n) => `${(n / 1000).toFixed(0)}k €`}
        onChange={([a, b]) => setFilters({ ...filters, priceMin: a, priceMax: b })}
      />

      <Range
        label="Kilometraje"
        min={def.kmMin}
        max={def.kmMax}
        step={1000}
        values={[filters.kmMin, filters.kmMax]}
        format={(n) => `${(n / 1000).toFixed(0)}k km`}
        onChange={([a, b]) => setFilters({ ...filters, kmMin: a, kmMax: b })}
      />

      <Range
        label="Año"
        min={def.yearMin}
        max={def.yearMax}
        step={1}
        values={[filters.yearMin, filters.yearMax]}
        format={(n) => String(n)}
        onChange={([a, b]) => setFilters({ ...filters, yearMin: a, yearMax: b })}
      />

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
          Marca
        </p>
        <div className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <Chip
              key={b}
              active={filters.brand.includes(b)}
              onClick={() =>
                setFilters({ ...filters, brand: toggleArr(filters.brand, b) })
              }
            >
              {b}
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
          Combustible
        </p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(fuelLabels) as FuelType[]).map((f) => (
            <Chip
              key={f}
              active={filters.fuel.includes(f)}
              onClick={() =>
                setFilters({ ...filters, fuel: toggleArr(filters.fuel, f) })
              }
            >
              {fuelLabels[f]}
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
          Cambio
        </p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(transmissionLabels) as Transmission[]).map((t) => (
            <Chip
              key={t}
              active={filters.transmission.includes(t)}
              onClick={() =>
                setFilters({
                  ...filters,
                  transmission: toggleArr(filters.transmission, t),
                })
              }
            >
              {transmissionLabels[t]}
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
          Carrocería
        </p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(bodyTypeLabels) as BodyType[]).map((b) => (
            <Chip
              key={b}
              active={filters.bodyType.includes(b)}
              onClick={() =>
                setFilters({
                  ...filters,
                  bodyType: toggleArr(filters.bodyType, b),
                })
              }
            >
              {bodyTypeLabels[b]}
            </Chip>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-3 border-t border-border pt-6 text-xs">
        <input
          type="checkbox"
          checked={filters.favorites}
          onChange={(e) =>
            setFilters({ ...filters, favorites: e.target.checked })
          }
          className="h-4 w-4 accent-[var(--accent)]"
        />
        <span className="uppercase tracking-[0.18em] text-text-muted">
          Solo favoritos
        </span>
      </label>
    </div>
  );
}
