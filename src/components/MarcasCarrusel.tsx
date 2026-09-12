"use client";

import Image from "next/image";

const marcas = [
  { src: "/krediya.png", name: "KrediYa" },
  { src: "/marca1.png", name: "Marca aliada" },
  { src: "/marca2.png", name: "A lo Crédito" },
  { src: "/marca3.png", name: "CréditoYa" },
];

export default function MarcasCarrusel() {
  const logos = [...marcas, ...marcas, ...marcas, ...marcas];

  return (
    <div className="mt-10 overflow-hidden py-2">
      <div className="animate-marquee flex w-max items-center gap-14">
        {logos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-20 w-44 shrink-0 items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={176}
              height={72}
              className="h-16 w-auto max-w-[176px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
