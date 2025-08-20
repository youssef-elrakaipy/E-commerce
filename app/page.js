import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { GetCategories, GetProduct } from "@/fetching-data/Fetching";
import ImageSlider from "@/components/header/ImageSlider";
import ProductSection from "@/components/header/ProductSection";
import SliderSection from "@/components/header/SliderSection";

export const metadata = {
  title: "home",
};

export default async function Home() {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  if (!token) {
    redirect("/login");
  }

  const category = await GetCategories();
  const product = await GetProduct();
  return (
    <>
      <header className="w-full mt-7">
        <div className="flex flex-col md:flex-row  gap-3 w-full h-auto">
          <ImageSlider />
        </div>

        <SliderSection category={category} />

        <ProductSection product={product} />
      </header>
    </>
  );
}
