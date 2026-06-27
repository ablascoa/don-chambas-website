import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, mailto } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto — Don Chambas",
  description: "Ponte en contacto con el equipo de Don Chambas.",
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main>
        <div style={{ background: "var(--dc-blue)", padding: "var(--sp-16) 0 var(--sp-12)" }}>
          <div className="wrap">
            <span className="eyebrow">Contacto</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-4xl)",
                fontWeight: 700,
                color: "var(--dc-white)",
                margin: "var(--sp-4) 0 var(--sp-4)",
                letterSpacing: "-0.02em",
              }}
            >
              Hablemos.
            </h1>
            <p style={{ fontSize: "var(--fs-xl)", color: "rgba(255,255,255,0.78)", maxWidth: "600px", margin: 0 }}>
              Respondemos personalmente a cada mensaje.
            </p>
          </div>
        </div>

        <div className="wrap" style={{ padding: "var(--sp-12) var(--sp-6)" }}>
          <div className="contact-grid">
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--fs-2xl)",
                  color: "var(--dc-blue)",
                  marginTop: 0,
                }}
              >
                Escríbenos directamente
              </h2>
              <p style={{ color: "var(--ink-dim)", marginBottom: "var(--sp-8)" }}>
                Somos un equipo fundador pequeño — tu mensaje llega directamente
                a nosotros.
              </p>
              <dl className="contact-info">
                <dt>Email general</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </dd>

                <dt>Inversionistas</dt>
                <dd>
                  <a href={mailto("Interés en Don Chambas - Inversionista")}>
                    Escríbenos con asunto "Inversionista"
                  </a>
                </dd>

                <dt>Derechos ARCO (privacidad)</dt>
                <dd>
                  <a href={mailto("Ejercicio de derechos ARCO")}>
                    Escríbenos con asunto "Derechos ARCO"
                  </a>
                </dd>

                <dt>Ubicación</dt>
                <dd>Ciudad de México, México</dd>

                <dt>Horario de respuesta</dt>
                <dd>Lunes a viernes, 9:00–19:00 hrs (horario CDMX)</dd>
              </dl>
            </div>

            <div>
              <div className="card">
                <h3>¿Quieres saber más?</h3>
                <p>
                  Escríbenos y con gusto te compartimos la información relevante
                  en una llamada.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="btn btn-primary"
                  style={{ display: "inline-block", marginTop: "var(--sp-4)" }}
                >
                  Enviar correo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
