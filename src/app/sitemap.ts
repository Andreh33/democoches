import type { MetadataRoute } from "next";
import { getAllCars } from "@/db/queries";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autoselect-sevilla.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cars = await getAllCars();
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/coches",
    "/financiacion",
    "/vender-tu-coche",
    "/sobre-nosotros",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
    "/cookies",
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const carRoutes: MetadataRoute.Sitemap = cars.map((c) => ({
    url: `${SITE}/coches/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...carRoutes];
}
