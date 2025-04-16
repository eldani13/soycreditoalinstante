import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuienesSomos from '@/components/QuienesSomos';
import Objetivos from '@/components/Objetivos';
import Presencia from '@/components/Presencia';
import Alianza from '@/components/Alianza';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-10">
        <Hero />
        <QuienesSomos />
        <Objetivos />
        <Presencia />
        <Alianza />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
