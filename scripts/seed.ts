import { config } from "dotenv";
config({ path: ".env.local" });
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { cars, testimonials } from "../src/db/schema";
import { seedCars, seedTestimonials } from "../src/db/seed-data";

async function main() {
  const url = process.env.TURSO_CONNECTION_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!url) throw new Error("Missing TURSO_CONNECTION_URL in .env.local");

  const client = createClient({ url, authToken });
  const db = drizzle(client);

  console.log("→ Cleaning existing rows…");
  await db.delete(testimonials);
  await db.delete(cars);

  console.log(`→ Inserting ${seedCars.length} cars…`);
  for (const c of seedCars) {
    await db.insert(cars).values(c);
  }

  console.log(`→ Inserting ${seedTestimonials.length} testimonials…`);
  for (const t of seedTestimonials) {
    await db.insert(testimonials).values(t);
  }

  console.log("✓ Seed complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error("✗ Seed failed:", err);
  process.exit(1);
});
