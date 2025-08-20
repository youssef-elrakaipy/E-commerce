import Cart from "./Cart";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Cart",
};

export default async function CartPage() {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  if (!token) {
    redirect("/login");
  }
  return <Cart />;
}
