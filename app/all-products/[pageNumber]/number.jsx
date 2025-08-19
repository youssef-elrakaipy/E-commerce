"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Numbers() {
  const patnName = usePathname();

  const PAGE_NUMBERS = [1, 2, 3];

  return (
    <div className="flex justify-center mt-[50px] gap-3">
      {PAGE_NUMBERS.map((number) => (
        <Link key={number} href={`/all-products/${number}`}>
          <div
            className={`flex justify-center items-center text-[#038e0378] w-10 h-10 text-[22px] border-[3px] cursor-pointer transition duration-300 border-[#038e0378] rounded-full ${
              patnName === `/all-products/${number}`
                ? "text-white bg-green-600 border-transparent"
                : "hover:bg-green-600 hover:text-white"
            }`}
          >
            {number}
          </div>
        </Link>
      ))}
    </div>
  );
}
