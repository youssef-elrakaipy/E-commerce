import { GetCategories } from "@/fetching-data/Fetching";
import Categories from "./categories";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "categories",
};

export default async function Products() {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  if (!token) {
    redirect("/login");
  }
  const category = await GetCategories();
  return <Categories category={category} />;
}
