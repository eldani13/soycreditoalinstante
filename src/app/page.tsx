"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Objetivos from "@/components/Objetivos";
import Presencia from "@/components/Presencia";
import Alianza from "@/components/Alianza";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Spam from "@/components/Spam";
import PhoneSlider from "@/components/PhoneSlider";
import CreditoCelular from "@/components/CreditoCelular";
import { Marcas } from "@/components/Marcas";

export default function Home() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {atTop && <Spam />}
      <Navbar offsetTop={atTop ? 40 : 0} />
      <main className={`pt-[${atTop ? 104 : 64}px] bg-white`}>
        <Hero />
        <PhoneSlider />
        <Marcas />
        <QuienesSomos />
        <Objetivos />
        <CreditoCelular />
        <Presencia />
        <Alianza />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
