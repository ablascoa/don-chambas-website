import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <p>
            <span className="dc-tagline">
              ¿Buscas jale o quien jale pa´ tu restaurante?
            </span>
          </p>
          <p style={{ marginTop: "8px" }}>
            © {new Date().getFullYear()} Don Chambas — Ciudad de México
          </p>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/privacidad" style={{ color: "rgba(255,255,255,0.6)", borderBottom: "1px solid currentColor" }}>
            Aviso de privacidad
          </Link>
          <Link href="/terminos" style={{ color: "rgba(255,255,255,0.6)", borderBottom: "1px solid currentColor" }}>
            Términos de uso
          </Link>
          <Link href="/contacto" style={{ color: "rgba(255,255,255,0.6)", borderBottom: "1px solid currentColor" }}>
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
