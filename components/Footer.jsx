import Image from "next/image";

import amazon from "@/public/amazon-pay.png";
import paypal from "@/public/paypal.png";
import masterCard from "@/public/mastercard.webp";
import googlePlay from "@/public/google-play.png";
import appleStore from "@/public/apple-store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-[30px] px-[70px]">
      <div>
        <p className="text-3xl gray-500 mb-2.5 text-center sm:text-left">
          Get the FreshCart App
        </p>
        <p className="text-[#55555566]">
          We will send you a link, open it on your phone to download the app.
        </p>

        <div className="flex gap-2.5 lg:gap-[50px] mt-2.5 pb-10 border-b-2 flex-col lg:flex-row border-[#c0bebe61]">
          <form className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Email.."
              className="bg-white rounded-[5px] w-full px-5 py-2"
            />
          </form>

          <button className="bg-[#00ac00] text-white px-10 py-2.5 rounded-[7px] cursor-pointer transition duration-300 hover:bg-green-700">
            Share App Link
          </button>
        </div>
      </div>

      <div className="flex justify-between flex-col  mt-[50px] lg:flex-row items-center lg:items-start">
        <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row mb-[50px] lg:mb-0 ">
          <p className="text-[#5b5b5b] self-center lg:self-start">
            Payment Partners
          </p>

          <div className="flex items-center gap-5 justify-center">
            <Image
              src={amazon}
              alt="Amazon"
              className="h-5 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src={masterCard}
              alt="MasterCard"
              className="h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src={paypal}
              alt="PayPal"
              className="h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div className="flex gap-5 items-center flex-col lg:flex-row">
          <p className="gray-500 text-center sm:text-left">
            Get deliveries with FreshCart
          </p>

          <div className="flex items-center gap-1">
            <Image
              src={googlePlay}
              alt="googlePlay"
              className="h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            />

            <Image
              src={appleStore}
              alt="appleStore"
              className="h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="mt-[40px] flex justify-center gap-2">
        <FontAwesomeIcon
          icon={faFacebook}
          size="xl"
          className="text-[#000000b8] cursor-pointer transition duration-300 hover:text-[#008000c7]"
        />

        <FontAwesomeIcon
          icon={faTwitter}
          size="xl"
          className="text-[#000000b8] cursor-pointer transition duration-300 hover:text-[#008000c7]"
        />

        <FontAwesomeIcon
          icon={faInstagram}
          size="xl"
          className="text-[#000000b8] cursor-pointer transition duration-300 hover:text-[#008000c7]"
        />

        <FontAwesomeIcon
          icon={faLinkedin}
          size="xl"
          className="text-[#000000b8] cursor-pointer transition duration-300 hover:text-[#008000c7]"
        />
      </div>
      <p className="text-sm text-gray-500 flex justify-center mt-8 text-center">
        © 2025 FreshCart. All rights reserved.
      </p>
    </footer>
  );
}
