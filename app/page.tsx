import Banner from "@/components/Banner";
import Header from "../components/Header";
import Materiales from "@/components/Materiales";
import Novedad from "@/components/Novedad";
import Proyectos from "@/components/Proyectos";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Tableros from "@/components/Tableros";

export default function Home() {
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
      <Footer />
    </div>
  );
}
