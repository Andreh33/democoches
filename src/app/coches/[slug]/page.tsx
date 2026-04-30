import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarDetail } from "@/components/detail/car-detail";
import { getCarBySlug, getSimilarCars, getAllCars } from "@/db/queries";
import { formatPrice } from "@/lib/utils";

export async function generateStaticParams() {
  const cars = await getAllCars();
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = await getCarBySlug(slug);
  if (!car) return { title: "Coche no encontrado" };
  return {
    title: `${car.brand} ${car.model} ${car.version} (${car.year})`,
    description: `${car.brand} ${car.model} ${car.version} ${car.year} con ${car.km.toLocaleString("es-ES")} km por ${formatPrice(car.price)}. Garantía 12 meses, revisión 150 puntos.`,
    openGraph: { images: car.images.slice(0, 1) },
  };
}

export default async function CarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = await getCarBySlug(slug);
  if (!car) notFound();
  const similar = await getSimilarCars(car, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: `${car.brand} ${car.model} ${car.version}`,
    brand: { "@type": "Brand", name: car.brand },
    model: car.model,
    vehicleModelDate: String(car.year),
    mileageFromOdometer: { "@type": "QuantitativeValue", value: car.km, unitCode: "KMT" },
    fuelType: car.fuel,
    vehicleTransmission: car.transmission,
    color: car.color,
    numberOfDoors: car.doors,
    numberOfPreviousOwners: car.previousOwners,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: car.price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "AutoDealer", name: "AutoSelect Sevilla" },
    },
    image: car.images,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <CarDetail car={car} similar={similar} />
    </>
  );
}
