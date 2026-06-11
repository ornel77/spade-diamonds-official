import "./About.scss";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
function About() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="about-container">
        <h2>{t("about.title")}</h2>
        <div className="about-sub-container">
          <div className="about-illustration">
            <img src={"/trio.JPG"} alt="illustration" loading="lazy" />
          </div>
          <div className="about-content lg:tracking-wide">
            <p>
              {t("about.content-p1")}
              <br />
              <br />
              {t("about.content-p2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
