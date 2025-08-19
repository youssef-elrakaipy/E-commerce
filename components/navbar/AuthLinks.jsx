import RegisterLinks from "./RegisterLinks";
import { deleteToken } from "@/actions/LogOut";

export default function AuthLinks({ token }) {
  return (
    <>
      <RegisterLinks
        label={token ? "SignOut" : "LogIn"}
        href="/login"
        onClick={token ? deleteToken : undefined}
      />
      <RegisterLinks
        label="Register"
        href="/signup"
        className={token ? "hidden" : ""}
      />
    </>
  );
}
