import type { BodyType, FuelType, Transmission } from "@/lib/types";

export const fuelLabels: Record<FuelType, string> = {
  gasolina: "Gasolina",
  diesel: "Diésel",
  hibrido: "Híbrido",
  electrico: "Eléctrico",
};

export const transmissionLabels: Record<Transmission, string> = {
  manual: "Manual",
  automatico: "Automático",
};

export const bodyTypeLabels: Record<BodyType, string> = {
  berlina: "Berlina",
  suv: "SUV",
  compacto: "Compacto",
  familiar: "Familiar",
};
