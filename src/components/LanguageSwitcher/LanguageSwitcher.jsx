import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <section className="flex gap-2">
      <button onClick={() => changeLanguage("fr")} className={`px-2 p-0.5 w-11 rounded-md flex items-center justify-center ${i18n.language == "fr" && "bg-white text-black"}`}>
        {/* <img src="/sd5.jpeg" alt="" className="w-ful h-full object-cover" /> */}
        FR
      </button>
      <p>|</p>

      <button onClick={() => changeLanguage("en")} className={`px-2 p-0.5 w-11 flex items-center justify-center  rounded-md ${i18n.language == "en" && "bg-white text-black"}`}>
        {/* <img src="/anglais.png" alt="" className="w-6 h-4 object-cover" /> */}
        EN
      </button>
    </section>
  );
};

export default LanguageSwitcher;
