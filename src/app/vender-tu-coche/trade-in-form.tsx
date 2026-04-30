"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { waLink, waMessages } from "@/lib/whatsapp";

const schema = z.object({
  plate: z
    .string()
    .min(4, "Indica una matrícula válida")
    .max(10, "Demasiados caracteres"),
  brandModel: z.string().min(2, "Indica marca y modelo"),
  year: z
    .string()
    .regex(/^(19|20)\d{2}$/, "Año entre 1900 y 2099"),
  km: z.string().regex(/^\d{1,7}$/, "Solo números, sin separadores"),
  condition: z.enum(["excelente", "bueno", "aceptable"]),
});

type FormValues = z.infer<typeof schema>;

export function TradeInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { condition: "bueno" },
  });

  function onSubmit(data: FormValues) {
    const message = waMessages.tradeIn({
      plate: data.plate,
      brandModel: data.brandModel,
      year: data.year,
      km: data.km,
      condition: data.condition,
    });
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[20px] border border-border bg-bg-elevated/40 p-7 sm:p-9"
    >
      <h2 className="font-display text-2xl">Datos de tu coche</h2>
      <p className="mt-2 text-sm text-text-muted">
        Te respondemos por WhatsApp con una valoración inicial.
      </p>

      <div className="mt-8 space-y-5">
        <Field label="Matrícula" error={errors.plate?.message}>
          <input
            {...register("plate")}
            placeholder="1234 ABC"
            className="input"
            autoComplete="off"
          />
        </Field>

        <Field
          label="Marca y modelo"
          error={errors.brandModel?.message}
        >
          <input
            {...register("brandModel")}
            placeholder="Ej. BMW 320d M Sport"
            className="input"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Año" error={errors.year?.message}>
            <input
              {...register("year")}
              placeholder="2018"
              className="input"
              inputMode="numeric"
            />
          </Field>
          <Field label="Kilómetros" error={errors.km?.message}>
            <input
              {...register("km")}
              placeholder="120000"
              className="input"
              inputMode="numeric"
            />
          </Field>
        </div>

        <Field label="Estado general" error={errors.condition?.message}>
          <select {...register("condition")} className="input">
            <option value="excelente">Excelente</option>
            <option value="bueno">Bueno</option>
            <option value="aceptable">Aceptable, con detalles</option>
          </select>
        </Field>
      </div>

      <Button
        type="submit"
        variant="whatsapp"
        size="lg"
        className="mt-8 w-full"
        disabled={isSubmitting}
      >
        Enviar y abrir WhatsApp
      </Button>

      <p className="mt-4 text-xs text-text-muted">
        Al enviar aceptas que utilicemos los datos para ofrecerte una
        valoración. Más información en nuestra{" "}
        <a className="underline" href="/privacidad">
          política de privacidad
        </a>
        .
      </p>

      <style jsx>{`
        :global(.input) {
          height: 2.75rem;
          width: 100%;
          border-radius: 9999px;
          border: 1px solid var(--border);
          background: var(--bg);
          padding: 0 1rem;
          font-size: 0.875rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.15s ease;
        }
        :global(.input:focus) {
          border-color: var(--accent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-text-muted">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error ? (
        <span className="mt-1 inline-block text-xs text-danger">{error}</span>
      ) : null}
    </label>
  );
}
