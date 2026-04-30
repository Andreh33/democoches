import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, waMessages } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background:radial-gradient(50%_60%_at_50%_50%,color-mix(in_oklch,var(--accent)_20%,transparent),transparent_70%)] opacity-50"
      />
      <div className="container-x py-32 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Visítanos
        </p>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-semibold">
          El siguiente coche que conduzcas <span className="text-accent">puede estar ya en nuestro inventario.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-text-muted">
          Pasa por nuestras instalaciones de Sevilla, llámanos o escríbenos por
          WhatsApp. Sin presión, sin compromiso.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/coches">
              Ver inventario <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a
              href={waLink(waMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
