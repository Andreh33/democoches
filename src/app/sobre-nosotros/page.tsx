import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Tres generaciones cuidando coches como si fueran nuestros. AutoSelect Sevilla, dieciocho años apoyando a quien quiere comprar bien.",
};

const VALUES = [
  {
    t: "Honestidad",
    b: "Si un coche tiene un detalle, lo decimos antes. Si no encaja con lo que buscas, también. Vendemos coches; no vendemos humo.",
  },
  {
    t: "Selección",
    b: "Pasamos por cada vehículo con la misma exigencia que pondríamos al comprarlo nosotros. Por eso descartamos siete de cada diez que llegan a tasación.",
  },
  {
    t: "Servicio",
    b: "Cuando entregamos el coche, empieza la relación. Garantía 12 meses, postventa real con persona dedicada y soporte siempre por WhatsApp.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <div className="container-x pb-20 pt-32">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Sobre nosotros
        </p>
        <h1 className="font-display mt-3 text-[clamp(2.25rem,5vw,4rem)] font-semibold">
          Llevamos <span className="text-accent">dieciocho años</span> cuidando coches como si fueran nuestros.
        </h1>
      </header>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <article className="space-y-6 text-base leading-relaxed text-text/90">
          <p>
            AutoSelect Sevilla nació en 2007 en una nave de 200 metros cuadrados
            en el barrio de Nervión, con una sola idea: que los coches de
            segunda mano podían venderse igual de bien que los nuevos si se
            cuidaban los pequeños detalles. Más de mil clientes después,
            seguimos con la misma filosofía y la misma estructura familiar de
            entonces.
          </p>
          <p>
            Hoy ocupamos unas instalaciones de 1.400 metros cuadrados en Luis
            Montoto, con taller propio, área de detallado y exposición
            climatizada. Nuestro equipo lo forman doce personas: cuatro
            comerciales con más de quince años de experiencia, cinco mecánicos
            certificados por las principales marcas alemanas, dos especialistas
            en chapa y pintura, y un equipo administrativo y de gestión que se
            encarga de que el papeleo no sea problema del cliente.
          </p>
          <p>
            Trabajamos con un inventario reducido —entre 35 y 45 coches a la
            vez— porque preferimos conocer cada vehículo en profundidad antes
            de venderlo. Siete de cada diez coches que llegan a tasación se
            descartan: por procedencia poco clara, mantenimiento dudoso o
            simplemente porque no nos termina de convencer. La consecuencia
            directa es que casi nunca tenemos garantías reclamadas.
          </p>
          <p>
            Nuestra reputación se construye coche a coche. Más de la mitad de
            las ventas vienen de clientes que repiten o nos recomiendan, y
            mantenemos un 4,9 sobre 5 en Google con más de 600 reseñas reales.
            No es magia: es seguir un protocolo que casi todo el mundo conoce
            pero pocos aplican con disciplina.
          </p>
          <p>
            Si estás considerando un coche de segunda mano y quieres entender
            qué hace que una compra sea buena, escríbenos. No te haremos
            esperar y no te empujaremos a nada que no encaje. Y si después de
            hablar decides irte a otro sitio, te recomendaremos a quien
            consideremos más adecuado para tu perfil.
          </p>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-[20px] border border-border">
            <div className="relative aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80"
                alt="Equipo de AutoSelect Sevilla"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Nuestros valores
        </p>
        <h2 className="font-display mt-3 text-[clamp(1.75rem,4vw,3rem)] font-semibold">
          Tres principios. Aplicados a diario.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.t}
              className="rounded-[20px] border border-border bg-bg-elevated/40 p-7"
            >
              <h3 className="font-display text-2xl">{v.t}</h3>
              <p className="mt-3 text-sm text-text-muted">{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
