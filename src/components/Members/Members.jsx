
import "./Members.scss";
import { useTranslation } from "react-i18next";

function Members() {
  const {t} = useTranslation()
  return (
    <section className="container">
      <div className="members-container">
        <h2>{t("members.title")}</h2>
        <div className="grid-container">
          <div
            className="sub-container"
          >
            <img src="/sd8.webp" alt="wendy" loading="lazy" />
            <p>
              <span className="name">Wendy</span>
              <span className="function"> - {t("members.function-w")}</span>
            </p>
          </div>

          <div
            className="sub-container"
          >
            <img src="/sd9.jpg" alt="ed" loading="lazy" />
            <p>
              <span className="name">Edwin</span>
              <span className="function"> - {t("members.function-e")}</span>
            </p>
          </div>
          <div
            className="sub-container"
          >
            <img src="/sd10.webp" alt="ornel" loading="lazy" />
            <p>
              <span className="name">Ornella</span>
              <span className="function"> - {t("members.function-o")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
