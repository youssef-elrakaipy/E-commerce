import RegisterLinks from "./RegisterLinks";

export default function SignInLinks({ token }) {
  return (
    <>
      <RegisterLinks href="/" label="Home" className={token ? "" : "hidden"} />
      <RegisterLinks
        href="/all-products/1"
        label="Products"
        className={token ? "" : "hidden"}
      />
      <RegisterLinks
        href="/categories"
        label="Categories"
        className={token ? "" : "hidden"}
      />
      <RegisterLinks
        href="/wishlist"
        label="Wishlist"
        className={token ? "" : "hidden"}
      />
    </>
  );
}
