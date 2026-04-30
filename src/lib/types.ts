export type FuelType = "gasolina" | "diesel" | "hibrido" | "electrico";
export type Transmission = "manual" | "automatico";
export type BodyType = "berlina" | "suv" | "compacto" | "familiar";

export interface Car {
  id: number;
  slug: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  price: number;
  km: number;
  fuel: FuelType;
  transmission: Transmission;
  hp: number;
  displacement: number | null;
  doors: number;
  seats: number;
  bodyType: BodyType;
  color: string;
  previousOwners: number;
  shortDescription: string;
  longDescription: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  isSold: boolean;
  createdAt: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  carBought: string;
  rating: number;
  review: string;
  photo: string;
  createdAt: Date;
}
