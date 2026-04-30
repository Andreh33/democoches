"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Scale } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/components/favorites-store";
import { useCompare } from "@/components/compare-store";
import { cn, formatKm, formatPrice } from "@/lib/utils";
import { fuelLabels, transmissionLabels } from "@/lib/labels";
import { waLink, waMessages } from "@/lib/whatsapp";
import type { Car } from "@/lib/types";

export function CarCard({
  car,
  priority = false,
  showCompare = true,
}: {
  car: Car;
  priority?: boolean;
  showCompare?: boolean;
}) {
  const favs = useFavorites();
  const cmp = useCompare();

  function onSpot(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  const isFav = favs.has(car.id);
  const isInCompare = cmp.has(car.id);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45 }}
      onMouseMove={onSpot}
      className="spotlight group relative overflow-hidden rounded-[20px] border border-border bg-bg-elevated/60 transition-colors hover:border-text-muted/40"
    >
      <Link
        href={`/coches/${car.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={car.images[0] ?? ""}
          alt={`${car.brand} ${car.model} ${car.version}`}
          fill
          priority={priority}
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {car.isFeatured ? <Badge variant="accent">Destacado</Badge> : null}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            favs.toggle(car.id);
          }}
          aria-label={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-bg/70 backdrop-blur transition",
            isFav ? "text-accent" : "text-text-muted hover:text-text",
          )}
        >
          <Heart className={cn("h-4 w-4", isFav && "fill-current")} />
        </button>
      </Link>

      <div className="relative z-10 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
              {car.brand}
            </p>
            <h3 className="mt-0.5 text-lg font-medium leading-tight">
              {car.model}{" "}
              <span className="text-text-muted">{car.version}</span>
            </h3>
          </div>
          <p className="font-mono text-xl font-semibold">
            {formatPrice(car.price)}
          </p>
        </div>

        <ul className="mt-4 grid grid-cols-4 divide-x divide-border/60 text-center font-mono text-[11px] uppercase text-text-muted">
          <li className="px-1.5">{car.year}</li>
          <li className="px-1.5">{formatKm(car.km)}</li>
          <li className="px-1.5">{fuelLabels[car.fuel]}</li>
          <li className="px-1.5">{transmissionLabels[car.transmission]}</li>
        </ul>

        <div className="mt-5 flex items-center gap-2">
          <Button asChild size="sm" className="flex-1">
            <Link href={`/coches/${car.slug}`}>Ver ficha</Link>
          </Button>
          <Button asChild size="sm" variant="whatsapp">
            <a
              href={waLink(waMessages.carInquiry(car))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por WhatsApp"
            >
              <MessageCircle />
            </a>
          </Button>
          {showCompare ? (
            <button
              type="button"
              onClick={() => cmp.toggle(car.id)}
              aria-pressed={isInCompare}
              aria-label="Comparar"
              className={cn(
                "grid h-9 w-9 place-items-center rounded-full border transition",
                isInCompare
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-text-muted hover:text-text",
              )}
            >
              <Scale className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
