import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Don Chambas — Reclutamiento WhatsApp-first en México",
  description:
    "Don Chambas es la plataforma de reclutamiento WhatsApp-first para negocios de servicio en México.",
};

export default function LandingPage() {
  return (
    <>
      <Nav />

      <div className="hero center">
        <div className="wrap">
          <Image
            src="/images/logo-don.svg"
            alt="Don Chambas"
            width={88}
            height={88}
            priority
            style={{ margin: "0 auto var(--sp-6)" }}
          />
          <span className="eyebrow">Ciudad de México · 2026</span>
          <h1>
            Reclutamiento <span className="accent">WhatsApp-first</span> para
            negocios de servicio en México.
          </h1>
          <p className="hero-sub">
            Conectamos a los negocios de servicio con los candidatos correctos.
          </p>
          <p>
            <span className="dc-tagline">
              ¿Buscas jale o quien jale pa´ tu restaurante?
            </span>
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
