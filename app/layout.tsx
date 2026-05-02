import type { Metadata } from "next";
import "./globals.scss";
import WhatsApp from "@/components/commons/WhatsApp";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SchemaOrg from "./SchemaOrg";

export const metadata: Metadata = {
  metadataBase: new URL("https://ivos.com.ar"),
  title: {
    default: "IVOS | Remodelá sin obra",
    template: "%s | IVOS",
  },
  description: "Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes. No solo vendemos insumos, sino que ayudamos a construir espacios mejor diseñados y más eficientes.",
  keywords: ["revestimientos", "materiales de construcción", "placas PVC", "paneles acústicos", "WPC", "aluzinc", "smart glass", "remodelación sin obra", "Salta", "Argentina"],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ivos.com.ar",
    siteName: "IVOS",
    title: "IVOS | Remodelá sin obra",
    description: "Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes.",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "IVOS - Materiales de construcción y revestimientos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IVOS | Remodelá sin obra",
    description: "Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes.",
    images: ["/assets/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <GoogleAnalytics />
        <SchemaOrg />
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
