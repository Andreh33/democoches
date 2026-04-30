"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? theme : "dark") !== "light";

  return (
    <button
      type="button"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border text-text-muted transition hover:text-text",
        className,
      )}
    >
      <Sun className={cn("h-4 w-4 transition", isDark ? "scale-0" : "scale-100")} />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition",
          isDark ? "scale-100" : "scale-0",
        )}
      />
    </button>
  );
}
