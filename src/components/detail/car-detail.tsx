"use client";

import { Heart, MapPin, MessageCircle, Calendar, ShieldCheck, ScanLine, Fuel, Cog, Gauge, Zap, BookmarkCheck } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarGallery } from "./car-gallery";
import { CarTabs } from "./car-tabs";
import { FinancingModal } from "./financing-modal";
import { useFavorites } from "@/components/favorites-store";
import { calculateMonthlyPayment, cn, formatKm, formatPrice } from "@/lib/utils";
import { fuelLabels, transmissionLabels } from "@/lib/labels";
import { waLink, waMessages } from "@/lib/whatsapp";
import type { Car } from "@/lib/types";

export function CarDetail({ car, similar }: { car: Car; similar: Car[] }) {
  const favs = useFavorites();
  const isFav = favs.has(car.id);
  const monthly = calculateMonthlyPayment(car.price * 0.8, 0.07, 60);

  return (
    <article className="container-x pb-20 pt-32">
      <Link
        href="/coches"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-muted hover:text-accent"
      >
        ← Volver al inventario
      </Link>

      <div className="mt-6 grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <CarGallery
            images={car.images}
            alt={`${car.brand} ${car.model} ${car.version}`}
          />
          <div className="mt-12">
            <CarTabs car={car} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[20px] border border-border bg-bg-elevated/40 p-7">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  {car.brand} · {car.year}
                </p>
                <h1 className="font-display mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight">
                  {car.model}{" "}
                  <span className="text-text-muted">{car.version}</span>
                </h1>
              </div>
              <button
                onClick={() => favs.toggle(car.id)}
                aria-label={isFav ? "Quitar de favoritos" : "Añadir a favoritos"}
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-full border border-border transition",
                  isFav ? "text-accent" : "text-text-muted hover:text-text",
                )}
              >
                <Heart className={cn("h-4 w-4", isFav && "fill-current")} />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="success">
                <ShieldCheck className="h-3 w-3" /> Garantía 12 meses
              </Badge>
              {car.isFeatured ? <Badge variant="accent">Destacado</Badge> : null}
            </div>

            <div className="mt-7">
              <p className="font-mono text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none">
                {formatPrice(car.price)}
              </p>
              <p className="mt-2 text-xs text-text-muted">
                o desde{" "}
                <span className="font-mono text-text">
                  {formatPrice(monthly)}/mes
                </span>{" "}
                en 60 cuotas con un 20% de entrada — TIN 7% informativo
              </p>
            </div>

            <ul className="mt-7 grid grid-cols-2 gap-3">
              <Spec icon={<Calendar className="h-3.5 w-3.5" />} k="Año" v={car.year} />
              <Spec
                icon={<Gauge className="h-3.5 w-3.5" />}
                k="Kilómetros"
                v={formatKm(car.km)}
              />
              <Spec
                icon={<Fuel className="h-3.5 w-3.5" />}
                k="Combustible"
                v={fuelLabels[car.fuel]}
              />
              <Spec
                icon={<Cog className="h-3.5 w-3.5" />}
                k="Cambio"
                v={transmissionLabels[car.transmission]}
              />
              <Spec
                icon={<Zap className="h-3.5 w-3.5" />}
                k="Potencia"
                v={`${car.hp} CV`}
              />
              <Spec
                icon={<ScanLine className="h-3.5 w-3.5" />}
                k="Color"
                v={car.color}
              />
            </ul>

            <div className="mt-7 space-y-3">
              <Button asChild variant="default" size="lg" className="w-full">
                <a
                  href={waLink(waMessages.reserve(car))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookmarkCheck /> Reservar
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="md" className="w-full">
                <a
                  href={waLink(waMessages.carInquiry(car))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Hablar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghost" size="md" className="w-full">
                <a
                  href={waLink(waMessages.testDrive(car))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar prueba
                </a>
              </Button>
              <FinancingModal car={car} />
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-md border border-border bg-bg p-4 text-sm">
              <MapPin className="h-4 w-4 flex-none text-accent" />
              <div>
                <p className="font-medium">Disponible en Sevilla</p>
                <p className="mt-0.5 text-xs text-text-muted">
                  C/ Luis Montoto 156 · L-V 9:30–14:00 / 17:00–20:00
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {similar.length > 0 ? (
        <section className="mt-32">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Otros coches similares
          </p>
          <h2 className="font-display mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold">
            También podría interesarte
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => (
              <SimilarCard key={s.id} car={s} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function Spec({
  icon,
  k,
  v,
}: {
  icon: React.ReactNode;
  k: string;
  v: React.ReactNode;
}) {
  return (
    <li className="rounded-md border border-border bg-bg p-3">
      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-text-muted">
        {icon}
        {k}
      </span>
      <p className="mt-1.5 font-mono text-sm">{v}</p>
    </li>
  );
}

function SimilarCard({ car }: { car: Car }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-[20px] border border-border bg-bg-elevated/40"
    >
      <Link href={`/coches/${car.slug}`} className="block">
        <div
          className="aspect-[16/10] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${car.images[0]})` }}
          aria-hidden
        />
        <div className="flex items-baseline justify-between gap-3 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
              {car.brand}
            </p>
            <p className="mt-1 font-medium">
              {car.model} {car.version}
            </p>
          </div>
          <p className="font-mono text-lg font-semibold">
            {formatPrice(car.price)}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
