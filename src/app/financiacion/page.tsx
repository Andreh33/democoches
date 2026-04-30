import type { Metadata } from "next";
import { FinancingClient } from "./financing-client";

export const metadata: Metadata = {
  title: "Financiación a tu medida",
  description:
    "Calculadora informativa de financiación. Te ayudamos a estructurar la mejor opción según tu perfil.",
};

export default function FinanciacionPage() {
  return (
    <div className="container-x pb-20 pt-32">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Financiación
        </p>
        <h1 className="font-display mt-3 text-[clamp(2.25rem,5vw,4rem)] font-semibold">
          Cuotas que se ajustan a <span className="text-accent">tu vida real.</span>
        </h1>
        <p className="mt-6 text-text-muted">
          Trabajamos con varias entidades financieras especializadas en
          automoción. Eso nos permite estructurar la mejor opción para cada
          perfil: autónomos, pensionistas, jóvenes con primer ingreso o quien
          quiera amortizar antes sin penalización.
        </p>
      </header>

      <FinancingClient />

      <section className="mt-24 grid gap-10 lg:grid-cols-3">
        {[
          {
            t: "Sin papeleo innecesario",
            b: "Te pedimos solo lo imprescindible. La aprobación inicial suele tardar menos de 24 h.",
          },
          {
            t: "Cuota a medida",
            b: "Plazo de 12 a 96 meses, entrada flexible y cuota final opcional. Tú decides el equilibrio.",
          },
          {
            t: "Amortización anticipada",
            b: "Las opciones que negociamos permiten amortizar parcial o totalmente sin penalización.",
          },
        ].map((c) => (
          <div
            key={c.t}
            className="rounded-[20px] border border-border bg-bg-elevated/40 p-7"
          >
            <h3 className="font-display text-xl">{c.t}</h3>
            <p className="mt-3 text-sm text-text-muted">{c.b}</p>
          </div>
        ))}
      </section>

      <p className="mt-16 max-w-3xl text-xs text-text-muted">
        Esta calculadora ofrece una simulación informativa y no constituye una
        oferta vinculante. La oferta final depende del estudio de viabilidad
        realizado por la entidad financiera. AutoSelect Sevilla S.L. actúa como
        intermediario.
      </p>
    </div>
  );
}
