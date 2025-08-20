"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ImageLogo from "@/public/freshcart-logo.svg";
import Menu from "@/public/burger-menu.svg";

import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu.jsx";
import SignInLinks from "./SignInLinks";
import { useDispatch } from "react-redux";
import { getUserCart } from "@/store/cartThunks";
import { getUserWishlist } from "@/store/WishlistThuncks";

import SocialIcons from "./SocialIcons";
import CartIcon from "./CartIcon";
import AuthLinks from "./AuthLinks";

export default function NavBar({ token }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  function getToken() {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
  }

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(getUserCart());
      dispatch(getUserWishlist());
    }
  }, [dispatch, token]);

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav className="bg-gray-200 py-3.5 px-5 md:px-10 flex justify-between items-center sticky top-0 z-40">
      <div className="flex">
        <Image
          src={ImageLogo}
          alt="Image Logo"
          width={170}
          height={170}
          className="cursor-pointer mr-5"
        />

        <div className="hidden lg:flex">
          <SignInLinks token={token} />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-5 relative">
        <LanguageSelector />
        <SocialIcons />
        {token && <CartIcon />}
        <AuthLinks token={token} />
      </div>

      <Image
        src={Menu}
        alt="Menu Logo"
        width={25}
        height={25}
        className="block lg:hidden cursor-pointer transition rounded-[5px] duration-300 hover:bg-[#05ee0533]"
        onClick={handleMenuToggle}
      />

      {isMenuOpen && <MobileMenu onClose={handleMenuToggle} token={token} />}
    </nav>
  );
}
