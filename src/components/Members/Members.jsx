
import "./Members.scss";
import { useTranslation } from "react-i18next";

function Members() {
  const {t} = useTranslation()
  return (
    <section className="container" id="members">
      <div className="members-container">
        <h2>{t("members.title")}</h2>
        <div className="grid-container">
          <div
            className="sub-container"
          >
            <img src="/sd8.webp" alt="wendy" loading="lazy"/>
            <div>
              <p className="name">Wendy</p>
              <p className="function">{t("members.function-w")}</p>
            </div>
          </div>

          <div
            className="sub-container"
          >
        
            <img src="/sd9.jpg" alt="ed" loading="lazy" />
            <div>
              <p className="name">Edwin</p>
              <p className="function">{t("members.function-e")}</p>
            </div>
          </div>
          <div
            className="sub-container"
          >
            <img src="/sd10.webp" alt="ornel" loading="lazy" />
            <div>
              <p className="name">Ornella</p>
              <p className="function">{t("members.function-o")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
