"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { CarCard } from "@/components/car-card";
import { FilterPanel, defaultFilters, type Filters } from "./filter-panel";
import { useFavorites } from "@/components/favorites-store";
import { CompareDrawer } from "./compare-drawer";
import type { Car } from "@/lib/types";
import { cn } from "@/lib/utils";

type Sort = "recent" | "price-asc" | "price-desc" | "km-asc";

const SORTS: { value: Sort; label: string }[] = [
  { value: "recent", label: "Más recientes" },
  { value: "price-asc", label: "Precio · menor" },
  { value: "price-desc", label: "Precio · mayor" },
  { value: "km-asc", label: "Menos km" },
];

function applyFilters(cars: Car[], f: Filters, favIds: number[]): Car[] {
  return cars.filter((c) => {
    if (f.search) {
      const s = f.search.toLowerCase().trim();
      if (
        !`${c.brand} ${c.model} ${c.version}`.toLowerCase().includes(s)
      )
        return false;
    }
    if (f.brand.length && !f.brand.includes(c.brand)) return false;
    if (f.fuel.length && !f.fuel.includes(c.fuel)) return false;
    if (f.transmission.length && !f.transmission.includes(c.transmission))
      return false;
    if (f.bodyType.length && !f.bodyType.includes(c.bodyType)) return false;
    if (c.price < f.priceMin || c.price > f.priceMax) return false;
    if (c.km < f.kmMin || c.km > f.kmMax) return false;
    if (c.year < f.yearMin || c.year > f.yearMax) return false;
    if (f.favorites && !favIds.includes(c.id)) return false;
    return true;
  });
}

function sortCars(cars: Car[], sort: Sort): Car[] {
  const out = [...cars];
  switch (sort) {
    case "price-asc":
      return out.sort((a, b) => a.price - b.price);
    case "price-desc":
      return out.sort((a, b) => b.price - a.price);
    case "km-asc":
      return out.sort((a, b) => a.km - b.km);
    case "recent":
    default:
      return out.sort((a, b) => b.year - a.year);
  }
}

export function CatalogClient({ cars }: { cars: Car[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const def = useMemo(() => defaultFilters(cars), [cars]);
  const favs = useFavorites();

  const [filters, setFilters] = useState<Filters>(() => {
    const f = { ...def };
    const carroceria = params.get("carroceria");
    if (carroceria) f.bodyType = [carroceria as Filters["bodyType"][number]];
    const search = params.get("q");
    if (search) f.search = search;
    if (params.get("favoritos")) f.favorites = true;
    return f;
  });

  const [sort, setSort] = useState<Sort>("recent");
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setDebouncedSearch(filters.search), 200);
    return () => window.clearTimeout(id);
  }, [filters.search]);

  // URL sync (only meaningful filters)
  useEffect(() => {
    const sp = new URLSearchParams();
    if (filters.bodyType.length === 1) sp.set("carroceria", filters.bodyType[0]);
    if (debouncedSearch) sp.set("q", debouncedSearch);
    if (filters.favorites) sp.set("favoritos", "1");
    const qs = sp.toString();
    router.replace(qs ? `/coches?${qs}` : "/coches", { scroll: false });
  }, [filters.bodyType, filters.favorites, debouncedSearch, router]);

  const filtered = useMemo(
    () =>
      sortCars(
        applyFilters(cars, { ...filters, search: debouncedSearch }, favs.ids),
        sort,
      ),
    [cars, filters, debouncedSearch, sort, favs.ids],
  );

  return (
    <div className="container-x pb-20 pt-32">
      <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Inventario
          </p>
          <h1 className="font-display mt-2 text-[clamp(2.25rem,5vw,4rem)] font-semibold">
            {filtered.length} coches{" "}
            <span className="text-accent">listos para enamorarte.</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-72">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Buscar marca o modelo…"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              className="h-11 w-full rounded-full border border-border bg-bg-elevated/40 pl-10 pr-4 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filtros
          </button>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <FilterPanel
              cars={cars}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Mostrando {filtered.length} de {cars.length}
            </p>
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-xs uppercase tracking-[0.18em] text-text-muted"
              >
                Ordenar
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="rounded-full border border-border bg-bg-elevated/40 px-3 py-1.5 text-xs focus:border-accent focus:outline-none"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-[20px] border border-dashed border-border p-16 text-center text-sm text-text-muted">
              <p className="mb-3">
                No encontramos coches con esos filtros.
              </p>
              <p>Prueba a ampliar el rango de precio o quitar alguna marca.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((c, i) => (
                  <CarCard key={c.id} car={c} priority={i < 3} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-bg/85 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="h-full w-[88%] max-w-sm overflow-y-auto bg-bg p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Filtros
                </p>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border"
                  aria-label="Cerrar filtros"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <FilterPanel
                cars={cars}
                filters={filters}
                setFilters={setFilters}
              />
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <CompareDrawer cars={cars} />
    </div>
  );
}
