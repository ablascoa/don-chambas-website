import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Don Chambas — Reclutamiento para negocios de servicio en México",
  description:
    "Don Chambas es la plataforma donde la comunicación entre negocios y candidatos fluye. Reclutamiento para negocios de servicio en México.",
};

export default function LandingPage() {
  return (
    <>
      <Nav />

      <div className="hero center">
        <div className="wrap">
          <h1>
            Resolvemos la <span className="accent">fricción</span> en el
            reclutamiento para negocios de servicio.
          </h1>
          <p className="hero-sub">
            Don Chambas es la plataforma donde la comunicación entre negocios y
            candidatos fluye.
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
