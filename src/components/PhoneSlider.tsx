"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slider1 = [
  { name: "Samsung Galaxy A05S", image: "/samsung.png" },
  { name: "Xiaomi Redmi Note 13", image: "/samsung.png" },
  { name: "Motorola G73", image: "/samsung.png" },
];

const slider2 = [
  { name: "Tecno Spark Go 2024", image: "/telefono.jpg" },
  { name: "Infinix Zero 30", image: "/telefono.jpg" },
  { name: "Oppo Reno 11", image: "/telefono.jpg" },
];

const brands = [
  { name: "samsung", image: "/samsung-logo.png" },
  { name: "honor", image: "/honor-logo.png" },
  { name: "infinix", image: "/infinix-logo.png" },
  { name: "oppo", image: "/oppo-logo.png" },
  { name: "xiaomi", image: "/xiaomi-logo.png" },
  { name: "tecno", image: "/tecno-logo.png" },
  { name: "motorola", image: "/motorola-logo.png" },
  { name: "realme", image: "/realme-logo.png" },
];

function PhoneCardSlider({ phones }: { phones: typeof slider1 }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? phones.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % phones.length);

  const phone = phones[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full max-w-[500px] aspect-[5/6] bg-white p-4 flex flex-col items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={phone.name}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full group"
        >
          <Image
            src={phone.image}
            alt={phone.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 w-full bg-[#1E40AF]/90 text-white text-center py-3 rounded-b-xl">
            <h3 className="text-lg font-bold">{phone.name}</h3>
          </div>
          <div className="absolute top-2 right-2 bg-[#FBBF24] text-black px-3 py-1 text-sm font-bold rounded-full shadow-lg">
            ¡Nuevo!
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
        <button
          onClick={prev}
          className="bg-[#1E40AF] hover:bg-blue-800 text-white font-bold p-3 rounded-full shadow-xl transition"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="bg-[#1E40AF] hover:bg-blue-800 text-white font-bold p-3 rounded-full shadow-xl transition"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </motion.div>
  );
}

function BrandLogos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex justify-center items-center"
    >
      <div className="bg-white border border-[#1E40AF] shadow-xl rounded-xl p-6 w-full max-w-[320px] mt-10 lg:mt-0">
        <h4 className="text-lg font-bold text-[#1E40AF] mb-4 text-center">
          Marcas disponibles
        </h4>
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="w-16 h-10 relative hover:scale-110 transition-transform"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PhoneSlider() {
  return (
    <motion.div
      className="bg-white py-12 px-4 md:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-phone text-4xl font-extrabold text-center text-[#1E40AF] mb-2 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Financia tu próximo smartphone
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-600 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Disfruta cuotas fijas quincenales. Estos son los favoritos de nuestros
        clientes.
      </motion.p>

      <div className="flex flex-col items-center gap-10 lg:hidden">
        <PhoneCardSlider phones={slider1} />
        <BrandLogos />
      </div>

      <div className="hidden lg:flex justify-center items-center gap-10">
        <PhoneCardSlider phones={slider1} />
        <PhoneCardSlider phones={slider2} />
        <BrandLogos />
      </div>
    </motion.div>
  );
}
