import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section className="flex gap-2">
      <button onClick={() => changeLanguage("fr")} className={`px-2 p-0.5 rounded-md ${i18n.language == "fr" && "bg-white text-black"}`}>
        FR
      </button>
      <p>|</p>
      <button onClick={() => changeLanguage("en")} className={`px-2 p-0.5 rounded-md ${i18n.language == "en" && "bg-white text-black"}`}>EN</button>
    </section>
  );
};

export default LanguageSwitcher;
