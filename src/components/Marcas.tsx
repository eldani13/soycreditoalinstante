"use client";

import Slider from "react-slick";
import Image from "next/image";

const sponsors = [
  { image: "/xiaomi-logo.png", name: "Xiaomi" },
  { image: "/samsung-logo.png", name: "Samsung" },
  { image: "/oppo-logo.png", name: "Oppo" },
  { image: "/tecno-logo.png", name: "Tecno" },
  { image: "/realme-logo.png", name: "Realme" },
  { image: "/motorola-logo.png", name: "Motorola" },
  { image: "/infinix-logo.png", name: "Infinix" },
  { image: "/honor-logo.png", name: "Honor" },
  { image: "/apple-logo.svg", name: "Apple", icono: true },
];

export const Marcas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="mx-auto mb-12 mt-16 max-w-7xl px-4">
      <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Marcas aliadas
      </h3>
      <Slider {...settings}>
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="px-2">
            <div className="flex h-20 items-center justify-center">
              <div
                className={`relative ${
                  sponsor.icono ? "h-8 w-8" : "h-8 w-28"
                }`}
              >
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
