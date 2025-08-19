"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartThunks";
import { useState } from "react";

export default function Details({ product }) {
  const loading = useSelector((state) => state.cart.loading);
  const [currentImage, setCurrentImage] = useState(product.imageCover);

  const dispatch = useDispatch();

  function changeImage(img) {
    setCurrentImage(img);
  }

  function addItemToCart(item) {
    dispatch(addToCart(item));
  }

  return (
    <div className="w-full min-h-screen py-8 px-2 sm:px-6 lg:px-12 xl:px-24 2xl:px-0 min-w-[320px]">
      <section className="py-6 mx-7">
        <h1 className="text-3xl text-center text-[#00ab009c]">
          Details Product
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-[30px]">
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

          <div className="basis-2/3">
            <p className="font-bold text-2xl mb-5">{product.title}</p>
            <p className="text-[#878787] mb-5">{product.description}</p>
            <p className="text-green-600 text-xl mb-3">
              {product.category.name}
            </p>

            <div className="flex justify-between">
              <span className="text-xl font-bold">&pound;{product.price}</span>

              <span className="text-[#878787] mb-4 ">
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                {product.ratingsAverage}
              </span>
            </div>

            <div>
              <button
                onClick={() => addItemToCart(product)}
                disabled={loading[product._id]}
                className={`w-full py-2.5 rounded-[5px] flex justify-center text-white transition duration-300 ${
                  loading[product._id]
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-800 cursor-pointer"
                }`}
              >
                {loading[product._id] ? "Loading..." : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
