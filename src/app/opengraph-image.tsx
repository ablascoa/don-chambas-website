import { ImageResponse } from "next/og";

export const alt =
  "Don Chambas — Reclutamiento para negocios de servicio en México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Marca: azul #06275C, naranja #F49F08 (Manual de Marca Doberman)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06275C",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            color: "#FFFFFF",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          <span>DON</span>
          <span style={{ color: "#F49F08" }}>CHAMBAS</span>
        </div>

        {/* Headline + slogan */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: "#FFFFFF",
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-2px",
              maxWidth: "1040px",
            }}
          >
            <span>Reclutamiento de personal para el&nbsp;</span>
            <span style={{ color: "#F49F08" }}>sector restaurantero.</span>
          </div>
          <div
            style={{
              color: "#F49F08",
              fontSize: "34px",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            ¿Buscas jale o quien jale?
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "24px",
          }}
        >
          <span>Sector restaurantero</span>
          <span>·</span>
          <span>México</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
