import ProductCart from "@/components/ProductCart";
import { getSomeProduct } from "@/fetching-data/Fetching";
import Numbers from "./number";

export const metadata = {
  title: "products",
};

export default async function Poducts({ params }) {
  const page = params.pageNumber;

  const products = await getSomeProduct(page);

  return (
    <section className="mx-10 my-14">
      <ProductCart product={products} />
      <Numbers />
    </section>
  );
}
