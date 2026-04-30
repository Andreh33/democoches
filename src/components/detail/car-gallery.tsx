"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function CarGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [main, mainApi] = useEmblaCarousel({ loop: true });
  const [thumbs, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: "y",
  });
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbsApi) return;
    const i = mainApi.selectedScrollSnap();
    setSelected(i);
    thumbsApi.scrollTo(i);
  }, [mainApi, thumbsApi]);

  useEffect(() => {
    if (!mainApi) return;
    mainApi.on("select", onSelect);
    onSelect();
  }, [mainApi, onSelect]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
        <div
          ref={thumbs}
          className="no-scrollbar order-2 h-[420px] overflow-y-auto sm:order-1 hidden sm:block"
        >
          <div className="flex flex-col gap-3">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => mainApi?.scrollTo(i)}
                aria-label={`Imagen ${i + 1}`}
                className={cn(
                  "relative aspect-[16/10] w-full overflow-hidden rounded-md border-2 transition",
                  selected === i ? "border-accent" : "border-transparent opacity-65 hover:opacity-100",
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="relative order-1 overflow-hidden rounded-[20px] border border-border sm:order-2">
          <div ref={main} className="overflow-hidden">
            <div className="flex">
              {images.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[16/10] min-w-0 flex-[0_0_100%]"
                >
                  <Image
                    src={src}
                    alt={`${alt} — foto ${i + 1}`}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => mainApi?.scrollPrev()}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-bg/80 backdrop-blur transition hover:border-text-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => mainApi?.scrollNext()}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-bg/80 backdrop-blur transition hover:border-text-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => setLightbox(true)}
            aria-label="Ampliar"
            className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-border bg-bg/80 backdrop-blur transition hover:border-text-muted"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <span className="absolute bottom-3 left-3 rounded-full bg-bg/80 px-3 py-1 font-mono text-xs backdrop-blur">
            {selected + 1} / {images.length}
          </span>
        </div>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white"
            onClick={() => setLightbox(false)}
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={images[selected]}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
