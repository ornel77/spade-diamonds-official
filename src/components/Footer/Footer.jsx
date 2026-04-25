
import { SiFacebook, SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { RiSoundcloudLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-6">
      <div className="container flex flex-col justify-center h-full gap-6 ">
        <h3 className="text-center text-2xl uppercase">{t("footer.title")}</h3>
        <ul className="socials flex justify-center gap-8 border-b border-gray-400 pb-5">
          <li>
            <a href="https://www.instagram.com/spadediamonds/" target="_blank">
              {" "}
              <SiInstagram size={32} />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@SpadeDiamonds/featured"
              target="_blank"
            >
              {" "}
              <IoLogoYoutube size={32} />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/spadediamonds" target="_blank">
              {" "}
              <SiFacebook size={32} />{" "}
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/spadediamonds" target="_blank">
              {" "}
              <RiSoundcloudLine size={32} />{" "}
            </a>
          </li>
        </ul>
        <p className="copy text-sm text-center">&copy; 2026 SPADE DIAMONDS</p>
      </div>
    </footer>
  );
}

export default Footer;
