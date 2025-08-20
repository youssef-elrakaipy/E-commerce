"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  faSquarePlus,
  faSquareMinus,
} from "@fortawesome/free-regular-svg-icons";
import {
  clearCart,
  removeSpecificItem,
  updateCartProductQuantity,
} from "@/store/cartThunks";
import Link from "next/link";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const loading = useSelector((state) => state.cart.loading);
  const dispatch = useDispatch();

  function increaseQuantity(item) {
    dispatch(
      updateCartProductQuantity({ id: item.id, count: item.quantity + 1 })
    );
  }

  function decreaseQuantity(item) {
    if (item.quantity > 0) {
      dispatch(
        updateCartProductQuantity({ id: item.id, count: item.quantity - 1 })
      );
    }
  }

  function clearAllCart() {
    dispatch(clearCart());
  }

  function removeItem(item) {
    dispatch(removeSpecificItem(item.id));
  }

  return (
    <div className="w-full min-h-screen py-8 px-2 sm:px-6 lg:px-12 xl:px-24 2xl:px-0 bg-white min-w-[320px]">
      <div className=" bg-gray-50 rounded shadow p-4 w-[75%] mx-auto">
        <h1 className="text-4xl text-[#00ab009c] mb-[40px] text-center sm:text-left">
          Shop Cart
        </h1>
        {cartItems.length === 0 && (
          <p className="text-[#03ae039c] text-xl mb-[30px]">Cart is Empty</p>
        )}

        <div>
          {cartItems.length !== 0 && (
            <div className="flex justify-between flex-col sm:flex-row">
              <p className="text-[#00ac00dc] text-center sm:text-left mb-2 sm:mb-0">
                Total Cart Price:&pound;{totalPrice}
              </p>

              <button
                onClick={clearAllCart}
                className="bg-red-700 hover:bg-red-800 text-white py-2 px-10 rounded cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          )}

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-[#dbdbdbbd] pb-4 mb-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="w-[150px] h-[150px] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center mb-4 sm:mb-0 sm:text-left ">
                  <p className="text-[#00ac00dc]">{item.title}</p>

                  <p className="text-[#00ac00dc]">price: &pound;{item.price}</p>

                  <button
                    className="text-[#00ac00dc] cursor-pointer"
                    onClick={() => removeItem(item)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} /> Remove
                  </button>
                </div>
              </div>

              <div className="text-[#00ac00dc] flex gap-2 items-center">
                <button
                  disabled={loading[item.id]}
                  onClick={() => increaseQuantity(item)}
                  className={` ${
                    loading[item.id]
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-green-600 cursor-pointer"
                  }`}
                >
                  <FontAwesomeIcon icon={faSquarePlus} size="2xl" />
                </button>

                <span>{item.quantity}</span>

                <button
                  disabled={loading[item.id]}
                  className={`  ${
                    loading[item.id]
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-green-600 cursor-pointer"
                  }`}
                  onClick={() => decreaseQuantity(item)}
                >
                  <FontAwesomeIcon icon={faSquareMinus} size="2xl" />
                </button>
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <div className="flex justify-center sm:justify-start">
              <Link
                href="/check-out"
                className="text-white bg-green-600 hover:bg-green-800 w-[150px] py-2 rounded flex  justify-center transition duration-300 "
              >
                CheckOut
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
