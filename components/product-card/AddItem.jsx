"use client";

import Image from "next/image";

import blackHeart from "@/public/blackHeart.png";
import redHeart from "@/public/redHeart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/store/WishlistSlice";
import { addToWishlist, removeFromWishlist } from "@/store/WishlistThuncks";
import { addToCart } from "@/store/cartThunks";

export default function AddItem({ product }) {
  const liked = useSelector((state) => state.wishlist.liked);
  const loading = useSelector((state) => state.cart.loading);
  const dispatch = useDispatch();

  function addItem(product) {
    dispatch(addToCart(product));
  }

  function onToggleHeart(product) {
    dispatch(toggleWishlist(product._id));
    if (liked[product._id]) {
      dispatch(removeFromWishlist(product._id));
    } else {
      dispatch(addToWishlist(product));
    }
  }
  return (
    <div className="mt-auto mb-1 mx-2">
      <div className="flex items-center gap-2 overflow-hidden">
        <div className="w-full relative transition duration-300 transform translate-y-0 sm:translate-y-full group-hover:sm:translate-y-0 ">
          <button
            disabled={loading[product._id]}
            onClick={() => addItem(product)}
            className={`flex-1 py-2 text-white rounded-[5px] w-full transition duration-300 ${
              loading[product._id]
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00ac00dc] hover:bg-green-700 cursor-pointer"
            }`}
          >
            {loading[product._id] ? "Loading..." : "Add To Cart"}
          </button>

          {loading[product._id] && (
            <span className="w-6 h-6 border-4 border-gray-100 border-t-transparent rounded-full absolute top-2 right-7 transition duration-300 animate-spin"></span>
          )}
        </div>

        <Image
          src={liked[product._id] ? redHeart : blackHeart}
          alt="Heart"
          width={25}
          height={25}
          className="w-[25px] h-[25px] flex-shrink-0 cursor-pointer"
          onClick={() => onToggleHeart(product)}
        />
      </div>
    </div>
  );
}
