import Wishlist from "./Wishlist";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const metadata = {
  title: "withlist",
};

export default async function WishlistPage() {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  if (!token) {
    redirect("/login");
  }
  return <Wishlist />;
}
