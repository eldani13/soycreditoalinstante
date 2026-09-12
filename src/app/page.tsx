import dynamic from "next/dynamic";
import HomeChrome from "@/components/HomeChrome";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const PhoneSlider = dynamic(() => import("@/components/PhoneSlider"));
const Marcas = dynamic(() =>
  import("@/components/Marcas").then((mod) => mod.Marcas)
);
const QuienesSomos = dynamic(() => import("@/components/QuienesSomos"));
const Objetivos = dynamic(() => import("@/components/Objetivos"));
const CreditoCelular = dynamic(() => import("@/components/CreditoCelular"));
const Presencia = dynamic(() => import("@/components/Presencia"));
const Alianza = dynamic(() => import("@/components/Alianza"));
const Contacto = dynamic(() => import("@/components/Contacto"));

export default function Home() {
  return (
    <>
      <HomeChrome>
        <Hero />
        <PhoneSlider />
        <Marcas />
        <QuienesSomos />
        <Objetivos />
        <CreditoCelular />
        <Presencia />
        <Alianza />
        <Contacto />
      </HomeChrome>
      <Footer />
    </>
  );
}
