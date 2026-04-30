import type { BlogVariant } from "@/data/blog";

const dotPattern = (
  <pattern
    id="bt-dots"
    x="0"
    y="0"
    width="32"
    height="32"
    patternUnits="userSpaceOnUse"
  >
    <circle cx="1" cy="1" r="0.6" fill="currentColor" opacity="0.45" />
  </pattern>
);

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
    >
      <defs>
        <linearGradient id="bt-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.18 0.012 260)" />
          <stop offset="100%" stopColor="oklch(0.13 0.012 260)" />
        </linearGradient>
        <radialGradient id="bt-glow" cx="0.78" cy="0.42" r="0.55">
          <stop offset="0%" stopColor="oklch(0.72 0.14 55)" stopOpacity="0.32" />
          <stop offset="60%" stopColor="oklch(0.72 0.14 55)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="oklch(0.72 0.14 55)" stopOpacity="0" />
        </radialGradient>
        {dotPattern}
      </defs>
      <rect width="800" height="500" fill="url(#bt-bg)" />
      <rect width="800" height="500" fill="url(#bt-glow)" />
      <g style={{ color: "oklch(0.72 0.14 55)" }}>
        <rect width="800" height="500" fill="url(#bt-dots)" />
      </g>
      <line
        x1="0"
        y1="60"
        x2="800"
        y2="60"
        stroke="oklch(0.72 0.14 55)"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="440"
        x2="800"
        y2="440"
        stroke="oklch(0.72 0.14 55)"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      {children}
    </svg>
  );
}

const ACCENT = "oklch(0.78 0.14 55)";
const MUTED = "oklch(0.6 0.01 260)";
const TEXT = "oklch(0.97 0.005 260)";

const STROKE = {
  fill: "none",
  stroke: ACCENT,
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STROKE_MUTED = {
  fill: "none",
  stroke: MUTED,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Eyebrow({ children }: { children: string }) {
  return (
    <text
      x="56"
      y="92"
      fill={MUTED}
      fontSize="14"
      fontFamily="var(--font-geist-mono)"
      letterSpacing="3"
      style={{ textTransform: "uppercase" }}
    >
      {children}
    </text>
  );
}

function Caption({ children }: { children: string }) {
  return (
    <text
      x="56"
      y="412"
      fill={TEXT}
      fontSize="32"
      fontFamily="var(--font-fraunces)"
      fontWeight="500"
      letterSpacing="-0.5"
    >
      {children}
    </text>
  );
}

const variants: Record<BlogVariant, () => React.ReactElement> = {
  checklist: () => (
    <>
      <Eyebrow>· 12 puntos · revisión completa</Eyebrow>
      <g transform="translate(440 130)">
        <rect
          x="0"
          y="0"
          width="280"
          height="240"
          rx="14"
          {...STROKE}
        />
        <rect x="100" y="-12" width="80" height="24" rx="6" {...STROKE} />
        {[0, 1, 2, 3, 4].map((i) => {
          const y = 32 + i * 38;
          return (
            <g key={i}>
              <circle cx="34" cy={y} r="9" {...STROKE} />
              {i < 4 ? (
                <path
                  d={`M28 ${y} l5 5 l9 -10`}
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : null}
              <line
                x1="58"
                y1={y}
                x2={i === 4 ? 200 : 240}
                y2={y}
                stroke={i < 4 ? ACCENT : MUTED}
                strokeOpacity={i < 4 ? 1 : 0.6}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </g>
      <Caption>Checklist</Caption>
    </>
  ),
  fuel: () => (
    <>
      <Eyebrow>· combustible · etiquetas</Eyebrow>
      <g transform="translate(470 140)">
        <path
          d="M0 220 L0 40 Q0 0 40 0 L120 0 Q160 0 160 40 L160 220 Z"
          {...STROKE}
        />
        <rect x="22" y="40" width="116" height="100" rx="8" {...STROKE} />
        <path
          d="M70 70 L66 100 L84 100 L80 130 L98 100 L82 100 L86 70 Z"
          fill={ACCENT}
          opacity="0.85"
        />
        <line x1="0" y1="160" x2="160" y2="160" {...STROKE_MUTED} />
        <line x1="160" y1="80" x2="200" y2="80" {...STROKE} />
        <path d="M200 80 L200 30 Q200 14 216 14 L228 14" {...STROKE} />
        <circle cx="232" cy="14" r="6" fill={ACCENT} />
        <line x1="0" y1="220" x2="160" y2="220" {...STROKE_MUTED} />
      </g>
      <Caption>Combustible</Caption>
    </>
  ),
  badge: () => (
    <>
      <Eyebrow>· 0 · ECO · C · B</Eyebrow>
      <g transform="translate(450 150)">
        {[
          { x: 0, label: "0", color: ACCENT },
          { x: 90, label: "ECO", color: ACCENT },
          { x: 180, label: "C", color: MUTED },
          { x: 270, label: "B", color: MUTED },
        ].map((b) => (
          <g key={b.label}>
            <rect
              x={b.x}
              y="0"
              width="70"
              height="180"
              rx="12"
              fill="none"
              stroke={b.color}
              strokeWidth="2.4"
            />
            <circle
              cx={b.x + 35}
              cy="42"
              r="14"
              fill="none"
              stroke={b.color}
              strokeWidth="2.4"
            />
            <text
              x={b.x + 35}
              y="120"
              fill={b.color}
              fontSize="32"
              fontFamily="var(--font-fraunces)"
              fontWeight="600"
              textAnchor="middle"
            >
              {b.label}
            </text>
            <line
              x1={b.x + 14}
              y1="150"
              x2={b.x + 56}
              y2="150"
              stroke={b.color}
              strokeOpacity="0.6"
              strokeWidth="1.4"
            />
          </g>
        ))}
      </g>
      <Caption>Etiqueta DGT</Caption>
    </>
  ),
  scale: () => (
    <>
      <Eyebrow>· tasación · valor real</Eyebrow>
      <g transform="translate(470 130)">
        <line x1="160" y1="0" x2="160" y2="240" {...STROKE} />
        <circle cx="160" cy="240" r="6" fill={ACCENT} />
        <line x1="20" y1="60" x2="300" y2="60" {...STROKE} />
        <line x1="40" y1="60" x2="40" y2="100" {...STROKE_MUTED} />
        <line x1="80" y1="60" x2="80" y2="100" {...STROKE_MUTED} />
        <line x1="240" y1="60" x2="240" y2="100" {...STROKE_MUTED} />
        <line x1="280" y1="60" x2="280" y2="100" {...STROKE_MUTED} />
        <path
          d="M0 130 q60 -20 120 0"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <ellipse cx="60" cy="135" rx="60" ry="14" {...STROKE} />
        <path
          d="M200 110 q60 -20 120 0"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <ellipse cx="260" cy="115" rx="60" ry="14" {...STROKE} />
        <circle cx="60" cy="120" r="10" fill={ACCENT} />
        <circle cx="260" cy="100" r="10" fill={ACCENT} opacity="0.65" />
      </g>
      <Caption>Tasación</Caption>
    </>
  ),
  shield: () => (
    <>
      <Eyebrow>· garantía · 12 meses</Eyebrow>
      <g transform="translate(490 130)">
        <path
          d="M120 0 L240 36 L240 130 Q240 200 120 240 Q0 200 0 130 L0 36 Z"
          {...STROKE}
        />
        <path
          d="M120 28 L210 56 L210 130 Q210 180 120 212 Q30 180 30 130 L30 56 Z"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <path
          d="M70 130 L108 168 L182 92"
          fill="none"
          stroke={ACCENT}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <Caption>Garantía</Caption>
    </>
  ),
  cash: () => (
    <>
      <Eyebrow>· financiar · al contado</Eyebrow>
      <g transform="translate(450 130)">
        <g>
          <ellipse cx="80" cy="30" rx="60" ry="16" {...STROKE} />
          <path d="M20 30 L20 80" {...STROKE} />
          <path d="M140 30 L140 80" {...STROKE} />
          <ellipse cx="80" cy="80" rx="60" ry="16" {...STROKE} />
          <path d="M20 80 L20 130" {...STROKE} />
          <path d="M140 80 L140 130" {...STROKE} />
          <ellipse cx="80" cy="130" rx="60" ry="16" {...STROKE} />
          <path d="M20 130 L20 180" {...STROKE} />
          <path d="M140 130 L140 180" {...STROKE} />
          <ellipse cx="80" cy="180" rx="60" ry="16" {...STROKE} />
          <text
            x="80"
            y="120"
            fill={ACCENT}
            fontSize="32"
            fontFamily="var(--font-fraunces)"
            fontWeight="600"
            textAnchor="middle"
          >
            €
          </text>
        </g>
        <g transform="translate(180 60)">
          <rect x="0" y="0" width="160" height="100" rx="12" {...STROKE} />
          <rect x="0" y="22" width="160" height="14" fill={ACCENT} opacity="0.7" />
          <line x1="14" y1="58" x2="60" y2="58" {...STROKE_MUTED} />
          <line x1="14" y1="74" x2="100" y2="74" {...STROKE_MUTED} />
          <line x1="14" y1="86" x2="80" y2="86" {...STROKE_MUTED} />
        </g>
      </g>
      <Caption>Financiación</Caption>
    </>
  ),
  calendar: () => (
    <>
      <Eyebrow>· itv · distribución · aceite</Eyebrow>
      <g transform="translate(470 120)">
        <rect x="0" y="20" width="280" height="220" rx="14" {...STROKE} />
        <line x1="0" y1="70" x2="280" y2="70" {...STROKE} />
        <rect x="40" y="0" width="14" height="40" rx="4" {...STROKE} />
        <rect x="226" y="0" width="14" height="40" rx="4" {...STROKE} />
        {[0, 1, 2, 3, 4, 5].map((c) =>
          [0, 1, 2, 3].map((r) => {
            const x = 28 + c * 38;
            const y = 92 + r * 36;
            const highlight = (c + r) % 5 === 0 && r < 3;
            return (
              <g key={`${c}-${r}`}>
                <rect
                  x={x}
                  y={y}
                  width="22"
                  height="22"
                  rx="4"
                  fill={highlight ? ACCENT : "none"}
                  opacity={highlight ? 0.85 : 1}
                  stroke={highlight ? ACCENT : MUTED}
                  strokeOpacity={highlight ? 1 : 0.6}
                  strokeWidth="1.4"
                />
              </g>
            );
          }),
        )}
      </g>
      <Caption>Calendario</Caption>
    </>
  ),
  odometer: () => (
    <>
      <Eyebrow>· cuentakilómetros · auditoría</Eyebrow>
      <g transform="translate(450 120)">
        <circle cx="160" cy="120" r="120" {...STROKE} />
        <circle cx="160" cy="120" r="98" {...STROKE_MUTED} strokeOpacity="0.45" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const r1 = 100;
          const r2 = i % 3 === 0 ? 78 : 88;
          const x1 = 160 + Math.cos(a) * r1;
          const y1 = 120 + Math.sin(a) * r1;
          const x2 = 160 + Math.cos(a) * r2;
          const y2 = 120 + Math.sin(a) * r2;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? ACCENT : MUTED}
              strokeWidth={i % 3 === 0 ? 2.2 : 1.4}
              strokeLinecap="round"
            />
          );
        })}
        <line x1="160" y1="120" x2="226" y2="68" {...STROKE} />
        <circle cx="160" cy="120" r="9" fill={ACCENT} />
        <rect
          x="120"
          y="148"
          width="80"
          height="22"
          rx="3"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.6"
          strokeWidth="1.4"
        />
        <text
          x="160"
          y="165"
          textAnchor="middle"
          fill={ACCENT}
          fontSize="14"
          fontFamily="var(--font-geist-mono)"
          letterSpacing="3"
        >
          KM · 0
        </text>
      </g>
      <Caption>Auditoría</Caption>
    </>
  ),
};

export function BlogThumbnail({ variant }: { variant: BlogVariant }) {
  const Variant = variants[variant];
  return (
    <Frame>
      <Variant />
    </Frame>
  );
}
