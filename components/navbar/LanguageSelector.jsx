"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);

  function toggleLanguageMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <div className="relative">
      <div
        className="flex items-center gap-1.5 p-2.5 cursor-pointer transition duration-300 hover:bg-[#05ee0533]"
        onClick={toggleLanguageMenu}
      >
        <p className="text-[#000000b8]">Language</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>

      {open && (
        <div className="absolute top-[57px] left-0 bg-white shadow-xl rounded-[5px] w-[120px] z-10">
          <p className="text-[#00c300bf] px-4 py-2 hover:bg-[#05ee0533] cursor-pointer transition duration-300">
            EN
          </p>
          <p className="text-[#00c300bf] px-4 py-2 hover:bg-[#05ee0533] cursor-pointer transition duration-300">
            AR
          </p>
        </div>
      )}
    </div>
  );
}
