// "use client";

// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import blackHeart from "@/public/blackHeart.png";
// import redHeart from "@/public/redHeart.png";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/store/CartSlice";

// export default function ProductCart({ product }) {
//   const dispatch = useDispatch();

//   function addItem() {
//     dispatch(addToCart(product));
//   }

//   return (
//     <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
//       {product.map((product, index) => (
//         <div
//           key={index}
//           className="min-w-[300px] border-2 border-[#08ff0857] rounded-[5px] px-4"
//         >
//           <div className="h-[250px] w-full p-4 flex items-center justify-center relative cursor-pointer">
//             <Image
//               src={product.imageCover}
//               alt={product.title}
//               fill
//               className="object-contain"
//             />
//           </div>

//           <div>
//             <p className="text-[#00ac00] text-xs">
//               onSale {product.category.name}
//             </p>
//             <p className="text-[#00ac00]">{product.title}</p>

//             <div className="flex justify-between">
//               <span className="text-[#00ac00]">&euro;{product.price}</span>

//               <span>
//                 <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
//                 {product.ratingsAverage}
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center justify-between mt-5 mb-1 mx-2 gap-3">
//             <button
//               onClick={addItem}
//               className="bg-[#00ac00dc] flex-1 py-2 text-white rounded-[5px] hover:bg-green-700 transition duration-300"
//             >
//               Add To Cart
//             </button>

//             <Image
//               src={blackHeart}
//               alt="Heart"
//               width={25}
//               height={25}
//               className="w-[25px] h-[25px]"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import blackHeart from "@/public/blackHeart.png";
import redHeart from "@/public/redHeart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/store/WishlistSlice";
import { addToWishlist, removeFromWishlist } from "@/store/WishlistThuncks";
import { addToCart } from "@/store/cartThunks";

export default function ProductCart({ product }) {
  const liked = useSelector((state) => state.wishlist.liked);
  const loading = useSelector((state) => state.cart.loading);
  const dispatch = useDispatch();

  function addItem(product) {
    dispatch(addToCart(product));
  }

  function onToggleHeart(product) {
    dispatch(toggleWishlist(product.id));
    if (liked[product.id]) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
      {product.map((product, index) => (
        <div
          key={index}
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

          <div className="mt-auto mb-1 mx-2">
            <div className="flex items-center gap-2 overflow-hidden">
              <button
                disabled={loading[product._id]}
                onClick={() => addItem(product)}
                className={`flex-1 py-2 text-white rounded-[5px] transition-all duration-300 transform translate-y-full group-hover:translate-y-0 ${
                  loading[product._id]
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00ac00dc] hover:bg-green-700 cursor-pointer"
                }`}
              >
                {loading[product._id] ? "Loading..." : "Add To Cart"}
              </button>

              <Image
                src={liked[product.id] ? redHeart : blackHeart}
                alt="Heart"
                width={25}
                height={25}
                className="w-[25px] h-[25px] flex-shrink-0 cursor-pointer"
                onClick={() => onToggleHeart(product)}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
