"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { addToCart } from "@/store/cartThunks";

import { removeFromWishlist } from "@/store/WishlistThuncks";

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const loading = useSelector((state) => state.cart.loading);

  const dispatch = useDispatch();

  function addItemToCart(item) {
    dispatch(addToCart(item));
  }

  function removeItemFromWishlist(item) {
    dispatch(removeFromWishlist(item.id));
  }

  return (
    <div className="w-full min-h-screen py-8 px-2 sm:px-6 lg:px-12 xl:px-24 2xl:px-0 bg-white min-w-[320px]">
      <div className=" bg-gray-50 rounded shadow p-4 w-[75%] mx-auto">
        <h1 className="text-4xl text-[#00ab009c] mb-[40px] text-center sm:text-left">
          My Wishlist
        </h1>
        {wishlistItems.length === 0 && (
          <p className="text-[#03ae039c] text-xl mb-[30px]">
            Wishlist is Empty
          </p>
        )}

        <div>
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-[#dbdbdbbd] pb-4 mb-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="w-[150px] h-[150px] relative">
                  <Image
                    src={item.imageCover}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center mb-4 sm:mb-0 sm:text-left ">
                  <p className="text-[#00ac00dc]">{item.title}</p>

                  <p className="text-[#868686]">price: &pound;{item.price}</p>

                  <button
                    onClick={() => removeItemFromWishlist(item)}
                    className="text-red-700 hover:text-red-900 transition duration-300 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faTrashCan} /> Remove
                  </button>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => addItemToCart(item)}
                  disabled={loading[item.id]}
                  className={`w-[150px] py-2 rounded flex justify-center text-white transition duration-300 px-4 ${
                    loading[item.id]
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-800 cursor-pointer"
                  }`}
                >
                  {loading[item.id] ? "Loading..." : "Add to cart"}
                </button>

                {loading[item.id] && (
                  <span className="w-5 h-5 border-4 border-gray-100 border-t-transparent rounded-full absolute top-[10px] right-2.5 transition duration-300 animate-spin"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
