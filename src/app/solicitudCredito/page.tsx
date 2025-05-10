"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SolicitudCredito from "@/components/SolicitudCredito";

export default function SolicitandoCredito() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full">
        <SolicitudCredito />
      </main>

      <Footer />
    </div>
  );
}
