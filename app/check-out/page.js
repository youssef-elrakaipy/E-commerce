import CheckOut from "./CheckOut";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "checkout",
};

export default async function CheckOutPage() {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  if (!token) {
    redirect("/login");
  }
  return <CheckOut />;
}
