// import RegisterLinks from "./RegisterLinks";
// import { deleteToken } from "@/actions/LogOut";

// export default function AuthLinks({ token }) {
//   return (
//     <>
//       <RegisterLinks
//         label={token ? "SignOut" : "LogIn"}
//         href="/login"
//         onClick={token ? deleteToken : undefined}
//       />
//       <RegisterLinks
//         label="Register"
//         href="/signup"
//         className={token ? "hidden" : ""}
//       />
//     </>
//   );
// }

"use client";

import RegisterLinks from "./RegisterLinks";
import { deleteToken } from "@/actions/LogOut";
import { useRouter } from "next/navigation";

export default function AuthLinks({ token }) {
  const router = useRouter();

  async function handleSignOut() {
    await deleteToken();
    router.refresh();
  }

  return (
    <>
      <RegisterLinks
        label={token ? "SignOut" : "LogIn"}
        href={token ? "#" : "/login"}
        onClick={token ? handleSignOut : undefined}
      />
      <RegisterLinks
        label="Register"
        href="/signup"
        className={token ? "hidden" : ""}
      />
    </>
  );
}
