import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { LenisProvider } from "@/components/lenis-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://autoselect-sevilla.vercel.app",
  ),
  title: {
    default: "AutoSelect Sevilla — Coches premium de segunda mano",
    template: "%s · AutoSelect Sevilla",
  },
  description:
    "Selección curada de vehículos de segunda mano premium en Sevilla. Garantía 12 meses, revisión 150 puntos y financiación a medida.",
  keywords: [
    "coches segunda mano Sevilla",
    "vehículos premium",
    "concesionario Sevilla",
    "BMW Audi Mercedes ocasión",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "AutoSelect Sevilla",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#15171f" },
    { media: "(prefers-color-scheme: light)", color: "#f8f6f0" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <LenisProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
            >
              Saltar al contenido
            </a>
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
            <WhatsAppFab />
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
