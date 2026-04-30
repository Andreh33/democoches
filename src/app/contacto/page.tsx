import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Visítanos en Sevilla, llámanos o escríbenos por WhatsApp. Respondemos en menos de 2 horas en horario comercial.",
};

const HOURS = [
  ["Lunes a viernes", "9:30 — 14:00 / 17:00 — 20:00"],
  ["Sábados", "10:00 — 13:30"],
  ["Domingos", "Cerrado"],
];

export default function ContactoPage() {
  return (
    <div className="container-x pb-20 pt-32">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          Contacto
        </p>
        <h1 className="font-display mt-3 text-[clamp(2.25rem,5vw,4rem)] font-semibold">
          Pásate, llámanos o <span className="text-accent">escríbenos.</span>
        </h1>
        <p className="mt-6 text-text-muted">
          Sin presión, sin compromiso. Si vienes desde fuera de Sevilla, llama
          antes para asegurar la disponibilidad del coche.
        </p>
      </header>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="space-y-8">
          <Block icon={<MapPin />}>
            <h3 className="font-display text-xl">Instalaciones</h3>
            <p className="mt-2 text-sm text-text/90">
              C/ Luis Montoto 156 · 41018 Sevilla
            </p>
            <a
              href="https://maps.google.com/?q=Calle+Luis+Montoto+156+Sevilla"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs text-accent underline-offset-4 hover:underline"
            >
              Cómo llegar →
            </a>
          </Block>
          <Block icon={<Phone />}>
            <h3 className="font-display text-xl">Teléfono y WhatsApp</h3>
            <p className="mt-2 font-mono text-sm">+34 666 666 666</p>
          </Block>
          <Block icon={<Mail />}>
            <h3 className="font-display text-xl">Email</h3>
            <p className="mt-2 text-sm">hola@autoselect-sevilla.es</p>
          </Block>
          <Block icon={<Clock />}>
            <h3 className="font-display text-xl">Horario</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {HOURS.map(([k, v]) => (
                <li
                  key={k}
                  className="flex justify-between border-b border-border/60 py-1.5"
                >
                  <span className="text-text-muted">{k}</span>
                  <span className="font-mono">{v}</span>
                </li>
              ))}
            </ul>
          </Block>

          <div className="aspect-[16/10] overflow-hidden rounded-[20px] border border-border">
            <iframe
              title="Mapa AutoSelect Sevilla"
              src="https://www.google.com/maps?q=Calle+Luis+Montoto+156+Sevilla&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.3]"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

function Block({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-full border border-border bg-bg-elevated/60 text-accent [&_svg]:h-4 [&_svg]:w-4">
        {icon}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
