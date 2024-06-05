import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { RiSoundcloudLine } from "react-icons/ri";

import "./Footer.scss";
import footerImg from "../../assets/image/sd4.jpeg";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <p className="copy">&copy; SPADE DIAMONDS 2023</p>
        <ul className="socials">
          <li>
            <a href="https://www.instagram.com/spadediamonds/" target="_blank">
              {" "}
              <SiInstagram />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@SpadeDiamonds/featured"
              target="_blank"
            >
              {" "}
              <IoLogoYoutube />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/spadediamonds" target="_blank">
              {" "}
              <SiFacebook />{" "}
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/spadediamonds" target="_blank">
              {" "}
              <RiSoundcloudLine />{" "}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
