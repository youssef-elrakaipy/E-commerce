import { GetSpecificProduct } from "@/fetching-data/Fetching";
import Details from "../Details";

export const metadata = {
  title: "details",
};

export default async function ProductDetails({ params }) {
  const id = params.id;

  const product = await GetSpecificProduct(id);

  return <Details product={product} />;
}
