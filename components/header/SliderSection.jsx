"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function SliderSection({ category }) {
  const sliderRef = useRef();

  function scrollLeft() {
    sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  }
  function scrollRight() {
    sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
  }

  return (
    <section className="mt-8 px-4 mb-[100px]">
      <div className="flex items-center mb-3 justify-between sm:mx-6  ">
        <h2 className="text-[#00ac00] ">Popular Categories</h2>

        <div className="flex gap-5">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="xl"
            className="bg-[#00ac00] hover:bg-green-800 transition duration-300 cursor-pointer rounded-full px-1.5 py-1 text-white"
            onClick={scrollLeft}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            size="xl"
            className="bg-[#00ac00] hover:bg-green-800 transition duration-300 cursor-pointer rounded-full px-1.5 py-1 text-white"
            onClick={scrollRight}
          />
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        ref={sliderRef}
      >
        {category.map((item) => (
          <div key={item._id} className="w-[250px] flex-shrink-0">
            <div className="relative h-[250px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="mt-2 text-center text-sm text-[#00ac00]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
