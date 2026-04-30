import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "AutoSelect Sevilla";
  const subtitle = searchParams.get("subtitle") ?? "Coches premium de segunda mano";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          background:
            "radial-gradient(circle at 70% 40%, rgba(200,138,74,0.25), transparent 60%), #15171f",
          color: "#f6f6f4",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#a8a399",
          }}
        >
          AutoSelect · Sevilla
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            marginTop: 24,
            lineHeight: 1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 24,
            color: "#c8c4ba",
            maxWidth: 900,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
