"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Indica tu nombre"),
  email: z.string().email("Email no válido"),
  phone: z.string().min(9, "Teléfono no válido"),
  message: z.string().min(10, "Cuéntanos un poco más"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit(_: FormValues) {
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[20px] border border-success/40 bg-success/10 p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success/20 text-success">
          <Check className="h-5 w-5" />
        </div>
        <h2 className="font-display mt-5 text-2xl">Gracias por escribirnos</h2>
        <p className="mt-3 text-sm text-text-muted">
          Hemos recibido tu mensaje. Te responderemos en menos de 2 horas en
          horario comercial.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[20px] border border-border bg-bg-elevated/40 p-7 sm:p-9"
    >
      <h2 className="font-display text-2xl">Escríbenos</h2>
      <p className="mt-2 text-sm text-text-muted">
        Te respondemos por email o teléfono según prefieras.
      </p>

      <div className="mt-8 space-y-5 text-sm">
        <Field label="Nombre" error={errors.name?.message}>
          <input className="input" {...register("name")} placeholder="Nombre y apellidos" />
        </Field>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Email" error={errors.email?.message}>
            <input className="input" {...register("email")} type="email" placeholder="email@ejemplo.com" />
          </Field>
          <Field label="Teléfono" error={errors.phone?.message}>
            <input className="input" {...register("phone")} placeholder="666 666 666" />
          </Field>
        </div>
        <Field label="Mensaje" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Cuéntanos qué buscas o qué tipo de coche te interesa…"
            className="textarea"
          />
        </Field>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-8 w-full"
      >
        Enviar mensaje
      </Button>

      <p className="mt-4 text-xs text-text-muted">
        Tus datos se procesan según nuestra{" "}
        <a className="underline" href="/privacidad">
          política de privacidad
        </a>
        . No los compartimos con terceros.
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
        :global(.textarea) {
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.15s ease;
          resize: vertical;
        }
        :global(.input:focus, .textarea:focus) {
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
