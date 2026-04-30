import { formatPrice } from "@/lib/utils";
import type { Car } from "@/lib/types";

export const WHATSAPP_PHONE = "34666666666";
export const WHATSAPP_DISPLAY = "+34 666 666 666";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  carInquiry: (c: Pick<Car, "brand" | "model" | "version" | "year" | "price">) =>
    `Hola 👋, me interesa el ${c.brand} ${c.model} ${c.version} (${c.year}) por ${formatPrice(c.price)}. ¿Sigue disponible?`,
  reserve: (c: Pick<Car, "brand" | "model" | "version" | "year" | "price">) =>
    `Hola, me gustaría reservar el ${c.brand} ${c.model} ${c.version} (${c.year}) por ${formatPrice(c.price)}. ¿Cómo procedemos para dejarlo apartado?`,
  testDrive: (c: Pick<Car, "brand" | "model" | "year">) =>
    `Hola, me gustaría reservar una prueba del ${c.brand} ${c.model} (${c.year}). ¿Qué disponibilidad tenéis?`,
  financing: (c: Pick<Car, "brand" | "model" | "price">) =>
    `Hola, quisiera información sobre financiación para el ${c.brand} ${c.model} (${formatPrice(c.price)}).`,
  tradeIn: (data: {
    plate: string;
    brandModel: string;
    year: string;
    km: string;
    condition: string;
  }) =>
    `Hola, me gustaría tasar mi coche:\n\nMatrícula: ${data.plate}\nMarca/Modelo: ${data.brandModel}\nAño: ${data.year}\nKm: ${data.km}\nEstado: ${data.condition}`,
  general: () => "Hola, me gustaría más información.",
};
