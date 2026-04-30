import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const cars = sqliteTable("cars", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  brand: text("brand").notNull(),
  model: text("model").notNull(),
  version: text("version").notNull(),
  year: integer("year").notNull(),
  price: integer("price").notNull(),
  km: integer("km").notNull(),
  fuel: text("fuel", {
    enum: ["gasolina", "diesel", "hibrido", "electrico"],
  }).notNull(),
  transmission: text("transmission", {
    enum: ["manual", "automatico"],
  }).notNull(),
  hp: integer("hp").notNull(),
  displacement: integer("displacement"),
  doors: integer("doors").notNull(),
  seats: integer("seats").notNull(),
  bodyType: text("body_type", {
    enum: ["berlina", "suv", "compacto", "familiar"],
  }).notNull(),
  color: text("color").notNull(),
  previousOwners: integer("previous_owners").notNull().default(1),
  shortDescription: text("short_description").notNull(),
  longDescription: text("long_description").notNull(),
  features: text("features", { mode: "json" }).$type<string[]>().notNull(),
  images: text("images", { mode: "json" }).$type<string[]>().notNull(),
  isFeatured: integer("is_featured", { mode: "boolean" }).notNull().default(false),
  isSold: integer("is_sold", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  city: text("city").notNull(),
  carBought: text("car_bought").notNull(),
  rating: integer("rating").notNull(),
  review: text("review").notNull(),
  photo: text("photo").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const inquiries = sqliteTable("inquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  carId: integer("car_id").references(() => cars.id),
  name: text("name").notNull(),
  phone: text("phone"),
  email: text("email"),
  message: text("message").notNull(),
  channel: text("channel", { enum: ["whatsapp", "form", "phone"] }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type CarRow = typeof cars.$inferSelect;
export type CarInsert = typeof cars.$inferInsert;
export type TestimonialRow = typeof testimonials.$inferSelect;
