"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartThunks";

export function AddProduct({ product }) {
  const loading = useSelector((state) => state.cart.loading);

  const dispatch = useDispatch();

  function addItemToCart(item) {
    dispatch(addToCart(item));
  }

  return (
    <div className="relative">
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

      {loading[product._id] && (
        <span className="w-6 h-6 border-4 border-gray-100 border-t-transparent rounded-full absolute top-[9px] right-12 transition duration-300 animate-spin"></span>
      )}
    </div>
  );
}
