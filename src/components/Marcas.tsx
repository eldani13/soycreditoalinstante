import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const sponsors = [
  { image: "/xiaomi-logo.png" },
  { image: "/samsung-logo.png" },
  { image: "/oppo-logo.png" },
  { image: "/tecno-logo.png" },
  { image: "/realme-logo.png" },
  { image: "/motorola-logo.png" },
  { image: "/infinix-logo.png" },
  { image: "/honor-logo.png" },
];

export const Marcas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto mt-10 mb-10 px-4 max-w-7xl">
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <div key={index}>
            <div className="flex justify-center items-center h-full">
              <div className="w-32 h-32 md:w-48 md:h-48 relative flex justify-center items-center mx-auto">
                <Image
                  src={sponsor.image}
                  alt={`Sponsor ${index}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
