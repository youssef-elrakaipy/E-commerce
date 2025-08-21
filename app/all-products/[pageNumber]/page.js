import ProductCart from "@/components/product-card/ProductCard";
import { getSomeProduct } from "@/fetching-data/Fetching";
import Numbers from "./number";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "products",
};

export default async function Poducts({ params }) {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  if (!token) {
    redirect("/login");
  }

  const page = params.pageNumber;

  const products = await getSomeProduct(page);

  return (
    <section className="mx-10 my-14">
      <ProductCart product={products} />
      <Numbers />
    </section>
  );
}
