import LanguageSelector from "./LanguageSelector";
import SignInLinks from "./SignInLinks";

import SocialIcons from "./SocialIcons";
import CartIcon from "./CartIcon";
import AuthLinks from "./AuthLinks";

export default function MobileMenu({ onClose, token }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-[#55555526] bg-opacity-40 z-10"
        onClick={onClose}
      ></div>

      <div className="absolute top-[63px] left-0 w-full bg-gray-200 flex flex-col items-center gap-4 py-6 lg:hidden z-20">
        <div className="md:hidden flex flex-col items-center gap-4">
          <LanguageSelector />
          <SocialIcons />
          {token && <CartIcon />}
          <AuthLinks token={token} />
        </div>

        <div className="lg:hidden">
          <SignInLinks token={token} />
        </div>
      </div>
    </>
  );
}
