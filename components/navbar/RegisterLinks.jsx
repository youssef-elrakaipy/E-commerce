import { usePathname } from "next/navigation";
import Link from "next/link";

export default function RegisterLinks({
  href,
  label,
  className = "",
  onClick = null,
}) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`text-[#000000b8] w-[90px] h-[40px] flex items-center justify-center transition duration-300 ${
        pathName === href ? "bg-[#00ac00] text-white" : "hover:bg-[#05ee0533]"
      } ${className}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
