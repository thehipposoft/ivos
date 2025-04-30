import type { Metadata } from "next";
import "./globals.scss";
import WhatsApp from "@/components/commons/WhatsApp";

export const metadata: Metadata = {
  title: "IVOS | Remodelá sin obra",
  description: "Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes. No solo vendemos insumos, sino que ayudamos a construir espacios mejor diseñados y más eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
