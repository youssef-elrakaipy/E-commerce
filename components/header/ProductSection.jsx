import ProductCart from "../product-card/ProductCard";

export default function ProductSection({ product }) {
  return (
    <section className=" px-4 mb-[100px]">
      <h2 className="text-[#00ac00] sm:mx-6 text-4xl mb-[50px]">
        Popular Products
      </h2>

      <ProductCart product={product} />
    </section>
  );
}
