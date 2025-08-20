import { GetSpecificProduct } from "@/fetching-data/Fetching";
import Details from "../Details";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "details",
};

export default async function ProductDetails({ params }) {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  if (!token) {
    redirect("/login");
  }

  const { id } = await params;

  const product = await GetSpecificProduct(id);

  return <Details product={product} />;
}
