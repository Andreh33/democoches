"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [ref, api] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 5500, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setSnaps(api.scrollSnapList());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
  }, [api, onSelect]);

  return (
    <section className="container-x py-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-semibold">
            4,9 ★ en Google. <span className="text-accent">No por casualidad.</span>
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => api?.scrollPrev()}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition hover:text-text"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition hover:text-text"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="-mx-6 mt-12 overflow-hidden px-6" ref={ref}>
        <div className="flex gap-5">
          {items.map((t) => (
            <article
              key={t.id}
              className="min-w-0 flex-[0_0_85%] rounded-[20px] border border-border bg-bg-elevated/50 p-7 sm:flex-[0_0_60%] lg:flex-[0_0_38%]"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    fill={i < t.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="mt-5 text-balance text-base leading-relaxed">
                “{t.review}”
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-border">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-text-muted">
                    {t.city} · {t.carBought}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Testimonio ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === selected
                ? "w-8 bg-accent"
                : "w-1.5 bg-text-muted/40 hover:bg-text-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
