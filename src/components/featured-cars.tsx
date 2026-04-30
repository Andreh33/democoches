import { CarCard } from "@/components/car-card";
import { getFeaturedCars } from "@/db/queries";

export async function FeaturedCars() {
  const cars = await getFeaturedCars(4);

  return (
    <section className="container-x py-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Selección destacada
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-semibold">
            Coches que <span className="text-accent">vale la pena</span> ver
            con tiempo.
          </h2>
        </div>
        <a
          href="/coches"
          className="hidden whitespace-nowrap text-sm text-text-muted underline-offset-4 transition hover:text-text hover:underline sm:inline"
        >
          Ver inventario completo →
        </a>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cars.map((c, i) => (
          <CarCard key={c.id} car={c} priority={i < 2} showCompare={false} />
        ))}
      </div>
    </section>
  );
}
