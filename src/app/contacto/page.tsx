import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import {
  CONTACT_EMAIL,
  PARTNERSHIPS_EMAIL,
  CAREERS_EMAIL,
  mailto,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto — Don Chambas",
  description: "Ponte en contacto con el equipo de Don Chambas.",
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="page-hero">
          <div className="wrap">
            <span className="eyebrow">Contacto</span>
            <h1>Hablemos</h1>
            <p className="lead">Respondemos personalmente a cada mensaje.</p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <h2>Escríbenos directamente</h2>
                <p className="lead" style={{ marginBottom: 0 }}>
                  Somos un equipo fundador pequeño — tu mensaje llega
                  directamente a nosotros.
                </p>

                <ul className="contact-methods">
                  <li>
                    <span className="ic"><Icon name="mail" size={22} /></span>
                    <div className="method-body">
                      <b>Contacto general</b>
                      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </div>
                  </li>
                  <li>
                    <span className="ic"><Icon name="bolt" size={22} /></span>
                    <div className="method-body">
                      <b>Programa piloto</b>
                      <a href={`mailto:${PARTNERSHIPS_EMAIL}`}>
                        {PARTNERSHIPS_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="ic"><Icon name="heart" size={22} /></span>
                    <div className="method-body">
                      <b>Únete al equipo</b>
                      <a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>
                    </div>
                  </li>
                  <li>
                    <span className="ic"><Icon name="shield" size={22} /></span>
                    <div className="method-body">
                      <b>Derechos ARCO (privacidad)</b>
                      <a href={mailto("Ejercicio de derechos ARCO")}>
                        Escríbenos con asunto "Derechos ARCO"
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="ic"><Icon name="pin" size={22} /></span>
                    <div className="method-body">
                      <b>Ubicación</b>
                      Ciudad de México, México
                    </div>
                  </li>
                  <li>
                    <span className="ic"><Icon name="clock" size={22} /></span>
                    <div className="method-body">
                      <b>Horario de respuesta</b>
                      Lunes a viernes, 9:00–19:00 hrs (CDMX)
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="card">
                  <h3>¿Tienes un negocio restaurantero?</h3>
                  <p>
                    Conoce el programa piloto e ideemos juntos cómo resolver tus
                    contrataciones.
                  </p>
                  <Link
                    href="/piloto"
                    className="btn btn-primary"
                    style={{ display: "inline-block", marginTop: "var(--sp-4)" }}
                  >
                    Ver programa piloto →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
