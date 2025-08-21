"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imageCover);

  function changeImage(img) {
    setCurrentImage(img);
  }
  return (
    <div>
      <div className="relative w-full md:w-[400px] h-[400px] md:h-[600px] ">
        <Image
          src={currentImage}
          alt={product.title}
          fill
          className="object-contain shadow"
        />
      </div>

      <ul className="flex gap-3 mt-3 justify-center">
        {product.images.map((image, index) => (
          <li
            key={index}
            onClick={() => changeImage(image)}
            className={`relative w-[60px] h-[60px] transition duration-300 hover:scale-110 rounded-[5px] border-2 ${
              image === currentImage
                ? " border-[#00ab009c]"
                : "border-transparent"
            }`}
          >
            <Image
              fill
              src={image}
              alt="sub Image"
              className="object-cover cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
