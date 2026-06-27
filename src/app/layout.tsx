import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-next",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donchambas.com.mx"),
  title: "Don Chambas — Reclutamiento de personal para el sector restaurantero",
  description:
    "Reclutamiento de personal para el sector restaurantero. Don Chambas es la plataforma donde la comunicación entre negocios y candidatos fluye.",
  openGraph: {
    title: "Don Chambas",
    description:
      "Reclutamiento de personal para el sector restaurantero. ¿Buscas jale o quien jale?",
    locale: "es_MX",
    type: "website",
    siteName: "Don Chambas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/base.css" />
        <link rel="stylesheet" href="/styles/site.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
