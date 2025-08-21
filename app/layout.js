import "@/fontawesome";

import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { cookies } from "next/headers";
import Providers from "@/store/Provider";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/Toast";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>
          <NavBar token={token?.value} />
          {children}
          <ToastProvider />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
