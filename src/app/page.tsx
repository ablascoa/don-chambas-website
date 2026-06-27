import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Don Chambas — Reclutamiento para negocios de servicio en México",
  description:
    "Don Chambas resuelve la fricción de comunicación en el reclutamiento para negocios de servicio en México.",
};

export default function LandingPage() {
  return (
    <>
      <Nav />

      <div className="hero center">
        <div className="wrap">
          <h1>
            Resolvemos la <span className="accent">fricción de comunicación</span>{" "}
            en el reclutamiento para negocios de servicio.
          </h1>
          <p className="hero-sub">
            Contratar se traba en mensajes sin responder, confirmaciones que no
            llegan y citas que se caen. Don Chambas hace que la comunicación
            entre negocios y candidatos por fin fluya.
          </p>
          <div className="hero-ctas">
            <Link href="/contacto" className="btn btn-primary">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
