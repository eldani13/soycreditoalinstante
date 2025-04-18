"use client";

import Image from "next/image";

const marcas = ["/marca1.png", "/marca2.png", "/marca3.png"];

export default function MarcasCarrusel() {
  return (
    <div className="overflow-hidden py-10">
      <div className="flex animate-marquee gap-12 w-full">
        {[...marcas, ...marcas,...marcas, ...marcas].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo}
              alt={`Marca ${index}`}
              width={100}
              height={100}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
