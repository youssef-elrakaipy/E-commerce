"use client";

import { useEffect, useState } from "react";

import gorcery from "@/public/grocery-banner.png";
import gorcery2 from "@/public/grocery-banner-2.jpeg";
import Image from "next/image";

const IMAGES = [
  { src: "/img1.avif", alt: "Image1" },
  { src: "/img2.avif", alt: "Image2" },
  { src: "/img3.avif", alt: "Image3" },
  { src: "/img4.avif", alt: "Image4" },
  { src: "/img5.avif", alt: "Image5" },
  { src: "/img6.avif", alt: "Image6" },
];

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev < IMAGES.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative w-full lg:basis-2/3 h-[150px]  md:h-[300px] mb-[40px] md:mb-0 ">
        {IMAGES.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`absolute top-0 left-0 object-cover transition duration-[3000ms] ${
              index === imageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        <div className="absolute top-[110%] right-[45%] flex gap-4 md:top-[105%] md:right-[50%]">
          {IMAGES.map((_, index) => (
            <span
              key={index}
              className={`block w-[10px] h-[10px] rounded-full bg-gray-200 transition duration-1000 ${
                index === imageIndex ? "bg-gray-500" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="w-full lg:basis-1/3 flex flex-col gap-3">
        <Image
          src={gorcery}
          alt="Grocery"
          className="w-full h-[145px] object-cover"
        />
        <Image
          src={gorcery2}
          alt="Grocery 2"
          className="w-full h-[145px] object-cover"
        />
      </div>
    </>
  );
}
