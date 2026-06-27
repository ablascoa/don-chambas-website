import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Don Chambas — Reclutamiento de personal para el sector restaurantero",
  description:
    "Reclutamiento de personal para el sector restaurantero. Don Chambas es la plataforma donde la comunicación entre negocios y candidatos fluye.",
};

export default function LandingPage() {
  return (
    <>
      <Nav />

      <div className="hero center">
        <div className="wrap">
          <h1>
            Reclutamiento de personal para el{" "}
            <span className="accent">sector restaurantero</span>.
          </h1>
          <p>
            <span className="dc-tagline">¿Buscas jale o quien jale?</span>
          </p>
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
