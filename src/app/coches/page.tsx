import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogClient } from "@/components/catalog/catalog-client";
import { getAllCars } from "@/db/queries";

export const metadata: Metadata = {
  title: "Inventario de coches",
  description:
    "Explora nuestra selección curada de vehículos premium de segunda mano. Filtra por precio, kilometraje, combustible, marca y carrocería.",
};

export default async function CochesPage() {
  const cars = await getAllCars();
  return (
    <Suspense fallback={null}>
      <CatalogClient cars={cars} />
    </Suspense>
  );
}
