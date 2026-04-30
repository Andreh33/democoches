"use client";

import { motion } from "motion/react";
import { waLink, waMessages } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <motion.a
      href={waLink(waMessages.general())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 22 }}
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.5)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-50 [animation:wapulse_2.6s_ease-out_infinite] motion-reduce:hidden" />
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.001 3.2C9.04 3.2 3.4 8.84 3.4 15.8c0 2.494.732 4.916 2.115 6.99L3.2 28.8l6.196-2.262a12.546 12.546 0 0 0 6.605 1.866c6.96 0 12.6-5.64 12.6-12.6S22.96 3.2 16.001 3.2zm0 22.997a10.4 10.4 0 0 1-5.605-1.65l-.402-.244-3.683 1.346 1.247-3.585-.262-.412a10.42 10.42 0 0 1-1.69-5.853c0-5.74 4.66-10.4 10.4-10.4s10.4 4.66 10.4 10.4-4.66 10.398-10.4 10.398zm5.998-7.8c-.328-.165-1.94-.96-2.241-1.07-.301-.108-.52-.165-.74.165-.219.328-.85 1.07-1.04 1.288-.192.219-.385.246-.713.082-.328-.165-1.385-.51-2.638-1.625-.974-.871-1.633-1.95-1.825-2.278-.192-.328-.02-.505.143-.668.146-.144.328-.378.493-.567.165-.192.219-.328.328-.547.11-.219.055-.41-.027-.575-.082-.165-.74-1.78-1.012-2.44-.267-.643-.54-.555-.74-.566-.192-.011-.41-.013-.628-.013a1.21 1.21 0 0 0-.876.41c-.301.328-1.149 1.122-1.149 2.737s1.176 3.176 1.34 3.395c.165.219 2.314 3.534 5.605 4.952.783.337 1.394.539 1.87.69.785.25 1.5.215 2.064.13.63-.094 1.94-.793 2.214-1.557.273-.764.273-1.42.192-1.557-.082-.137-.301-.219-.629-.384z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-bg-elevated px-3 py-1.5 text-xs text-text shadow-lg group-hover:block">
        Habla con nosotros
      </span>
      <style jsx>{`
        @keyframes wapulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
    </motion.a>
  );
}
