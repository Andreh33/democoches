import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[80dvh] flex-col items-center justify-center pt-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
        Error 404
      </p>
      <h1 className="font-display mt-6 text-balance text-[clamp(2.25rem,5vw,4rem)] font-semibold">
        Este coche ya <span className="text-accent">encontró dueño.</span>
      </h1>
      <p className="mt-6 max-w-md text-text-muted">
        La página que buscas no existe, ha cambiado de sitio, o el coche al que
        apuntaba ya está rodando con su nuevo propietario. Vuelve al inventario
        para descubrir el siguiente.
      </p>
      <div className="mt-10 flex gap-3">
        <Button asChild size="lg">
          <Link href="/coches">Ver inventario</Link>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
