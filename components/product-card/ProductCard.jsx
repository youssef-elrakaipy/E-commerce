import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AddItem from "./AddItem";

export default function ProductCart({ product }) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
      {product.map((product) => (
        <div
          key={product._id}
          className="min-w-[300px] h-[400px] border-2 border-[#08ff0857] rounded-[5px] px-4 group flex flex-col"
        >
          <Link href={`/product-details/${product._id}`}>
            <div className="h-[250px] w-full p-4 flex items-center justify-center relative cursor-pointer">
              <Image
                src={product.imageCover}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div>
            <p className="text-[#00ac00] text-xs">
              onSale {product.category.name}
            </p>
            <p className="text-[#00ac00] line-clamp-2">{product.title}</p>

            <div className="flex justify-between">
              <span className="text-[#00ac00]">&pound;{product.price}</span>

              <span>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                {product.ratingsAverage}
              </span>
            </div>
          </div>
          <AddItem product={product} />
        </div>
      ))}
    </section>
  );
}
