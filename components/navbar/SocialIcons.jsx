import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-[#000000b8] cursor-pointer transition duration-300 hover:text-[#008000c7]"
      />
      <FontAwesomeIcon
        icon={faFacebook}
        className="text-[#000000b8] cursor-pointer transition duration-300 hover:text-[#008000c7]"
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        className="text-[#000000b8] cursor-pointer transition duration-300 hover:text-[#008000c7]"
      />
    </div>
  );
}
