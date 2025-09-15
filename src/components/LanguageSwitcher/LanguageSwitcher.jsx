import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section className="flex gap-2">
      <button onClick={() => changeLanguage("fr")}>FR</button>
      <p>|</p>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </section>
  );
};

export default LanguageSwitcher;
