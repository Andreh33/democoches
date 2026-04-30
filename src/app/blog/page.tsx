import type { Metadata } from "next";
import { posts } from "@/data/blog";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata: Metadata = {
  title: "Blog · Compra y venta de coches",
  description:
    "Guías de compra, mantenimiento, financiación y normativa para quien compra o vende un coche de segunda mano en Sevilla y resto de España.",
  keywords: [
    "blog coches segunda mano",
    "compra venta coches Sevilla",
    "guía coche ocasión",
    "consejos comprar coche",
    "mantenimiento coche usado",
  ],
  openGraph: {
    title: "Blog · AutoSelect Sevilla",
    description:
      "Análisis y guías honestas para comprar y vender coches de segunda mano sin sobresaltos.",
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
  const [hero, ...rest] = sorted;

  return (
    <div className="container-x pb-20 pt-32">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Blog · AutoSelect
        </p>
        <h1 className="font-display mt-3 text-[clamp(2.25rem,5vw,4rem)] font-semibold">
          Comprar bien, vender mejor.{" "}
          <span className="text-accent">Sin atajos.</span>
        </h1>
        <p className="mt-6 text-text-muted">
          Reflexiones desde nuestra mesa de tasación: lo que sabemos, lo que
          aplicamos y lo que aconsejamos a quien compra o vende un coche de
          segunda mano. Sin postureo, sin lenguaje vacío.
        </p>
      </header>

      <section className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <BlogCard post={hero} large />
        {rest.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </section>
    </div>
  );
}
