import illu from "../../assets/image/sd7.jpeg";
import "./About.scss";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="about-container">
        <h2>{t("about.title")}</h2>
        <div className="about-sub-container">
          <div className="about-content">
            <p>
              
             {t("about.content-p1")}
              <br /><br />
                {t("about.content-p2")}
            </p>
          </div>
          <div className="about-illustration">
            <img src={illu} alt="illustration" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
