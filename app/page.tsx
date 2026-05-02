import { getInstagramToken } from "@/api/Index";
import Banner from "@/components/Banner";
import Header from "../components/Header";
import Materiales from "@/components/Materiales";
import Novedad from "@/components/Novedad";
import Proyectos from "@/components/Proyectos";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Tableros from "@/components/Tableros";
import RedesSociales from "@/components/RedesSociales";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVOS | Remodelá sin obra",
  description: "Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes. No solo vendemos insumos, sino que ayudamos a construir espacios mejor diseñados y más eficientes.",
  alternates: {
    canonical: "https://ivos.com.ar",
  },
  openGraph: {
    url: "https://ivos.com.ar",
  },
};

export default async function Home() {
    const instagramToken = await getInstagramToken();

    return (
        <div className="">
            <Header />
            <Banner />
            <Novedad />
            <Materiales />
            <Proyectos />
            <Tableros />
            <Nosotros />
            <Contact />
            <RedesSociales instagramToken={instagramToken} />
            <Footer />
        </div>
    );
}
