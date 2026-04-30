const BRANDS = [
  "BMW",
  "Audi",
  "Mercedes",
  "Volkswagen",
  "Toyota",
  "Ford",
  "Peugeot",
  "SEAT",
  "Renault",
  "Hyundai",
  "Mazda",
];

export function BrandMarquee() {
  const items = [...BRANDS, ...BRANDS]; // duplicate for seamless loop
  return (
    <section className="marquee-pause overflow-hidden border-y border-border/60 bg-bg-elevated/20 py-10">
      <div className="container-x mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Trabajamos con las marcas que cuidan cada detalle
        </p>
      </div>
      <div className="flex w-max animate-marquee items-center gap-16 px-8 will-change-transform">
        {items.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="font-display text-2xl font-medium text-text-muted/70 sm:text-3xl"
            aria-hidden={i >= BRANDS.length}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
