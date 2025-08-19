import { GetCategories } from "@/fetching-data/Fetching";
import Categories from "./categories";

export const metadata = {
  title: "categories",
};

export default async function Products() {
  const category = await GetCategories();
  return <Categories category={category} />;
}
