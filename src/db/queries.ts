import { fallbackCars, fallbackTestimonials } from "./fallback-data";
import type { Car, Testimonial } from "@/lib/types";

let cachedCars: Car[] | null = null;
let cachedTestimonials: Testimonial[] | null = null;

async function loadFromDb(): Promise<{
  cars: Car[];
  testimonials: Testimonial[];
} | null> {
  try {
    if (!process.env.TURSO_CONNECTION_URL) return null;
    const { db } = await import("./index");
    const { cars: carsTable, testimonials: testimonialsTable } = await import(
      "./schema"
    );
    const dbCars = await db.select().from(carsTable);
    const dbTest = await db.select().from(testimonialsTable);
    if (dbCars.length === 0) return null;
    return {
      cars: dbCars as Car[],
      testimonials: dbTest as Testimonial[],
    };
  } catch (err) {
    console.warn(
      "[queries] DB unavailable, falling back to seed dataset:",
      (err as Error).message,
    );
    return null;
  }
}

export async function getAllCars(): Promise<Car[]> {
  if (cachedCars) return cachedCars;
  const fromDb = await loadFromDb();
  cachedCars = fromDb?.cars ?? fallbackCars;
  return cachedCars;
}

export async function getCarBySlug(slug: string): Promise<Car | null> {
  const all = await getAllCars();
  return all.find((c) => c.slug === slug) ?? null;
}

export async function getFeaturedCars(limit = 4): Promise<Car[]> {
  const all = await getAllCars();
  return all.filter((c) => c.isFeatured).slice(0, limit);
}

export async function getSimilarCars(car: Car, limit = 3): Promise<Car[]> {
  const all = await getAllCars();
  return all
    .filter((c) => c.id !== car.id && c.bodyType === car.bodyType)
    .slice(0, limit);
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  if (cachedTestimonials) return cachedTestimonials;
  const fromDb = await loadFromDb();
  cachedTestimonials = fromDb?.testimonials ?? fallbackTestimonials;
  return cachedTestimonials;
}
