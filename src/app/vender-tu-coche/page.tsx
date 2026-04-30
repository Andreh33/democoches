import type { Metadata } from "next";
import { TradeInForm } from "./trade-in-form";

export const metadata: Metadata = {
  title: "Vender tu coche",
  description:
    "Te tasamos tu coche en menos de 24 horas con un precio justo y honesto. Te lo descontamos directamente del coche que compres con nosotros.",
};

export default function VenderTuCochePage() {
  return (
    <div className="container-x pb-20 pt-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Tasamos tu coche
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.25rem,5vw,4rem)] font-semibold">
            Te damos un precio justo. <span className="text-accent">En menos de 24 horas.</span>
          </h1>
          <p className="mt-6 text-text-muted">
            No somos un cazador de gangas. Tasamos el coche por lo que vale
            realmente en el mercado actual: comparamos contra venta directa,
            cogiendo en cuenta el estado, mantenimiento y demanda. Si decides
            cambiarlo por uno de nuestros coches, te aplicamos la tasación al
            descuento del nuevo.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            {[
              "Rellena el formulario con la información básica de tu coche.",
              "Te enviamos una primera valoración por WhatsApp en menos de 24 h.",
              "Si te encaja, lo verificamos en nuestras instalaciones de Sevilla.",
              "Cierras la operación y te entregamos el dinero o aplicamos el descuento al nuevo.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full border border-accent/30 bg-accent/10 text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <TradeInForm />
      </div>
    </div>
  );
}
