import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ImageGallery from "./ImageGallery";
import { AddProduct } from "./AddProduct";

export default function Details({ product }) {
  return (
    <div className="w-full min-h-screen py-8 px-2 sm:px-6 lg:px-12 xl:px-24 2xl:px-0 min-w-[320px]">
      <section className="py-6 mx-7">
        <h1 className="text-3xl text-center text-[#00ab009c]">
          Details Product
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-[30px]">
          <ImageGallery product={product} />

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
            <AddProduct product={product} />
          </div>
        </div>
      </section>
    </div>
  );
}
