/**
 * Static fallback dataset used when the Turso DB is not reachable
 * (e.g. preview without env vars). Mirrors the seed payload so the
 * UI always has data to render — required for the demo.
 */
import type { Car, Testimonial } from "@/lib/types";
import { seedCars, seedTestimonials } from "./seed-data";

export const fallbackCars: Car[] = seedCars.map((c, i) => ({
  ...c,
  id: i + 1,
  createdAt: new Date(2025, 9, 1 + i),
}));

export const fallbackTestimonials: Testimonial[] = seedTestimonials.map((t, i) => ({
  ...t,
  id: i + 1,
  createdAt: new Date(2025, 9, 1 + i),
}));
