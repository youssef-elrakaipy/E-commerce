import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export default function CartIcon() {
  const pathName = usePathname();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="relative">
      <Link href="/cart-page">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="xl"
          className={`cursor-pointer transition duration-300 hover:bg-[#05ee0533] p-1.5 ${
            pathName === "/cart-page" ? "text-[#00ac00]" : "text-[#000000b8]"
          }`}
        />
      </Link>

      <span className="absolute bottom-0 right-0 w-5 h-5 text-white border-2 border-white flex items-center justify-center bg-[#00ac00] rounded-full">
        {totalQuantity}
      </span>
    </div>
  );
}
