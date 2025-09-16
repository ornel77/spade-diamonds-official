// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import direct des fichiers JSON
import enTranslation from "./locales/en/en.json";
import frTranslation from "./locales/fr/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react se charge déjà de la sécurité
    },
    detection: {
      order: ["localStorage", "navigator"], // détecte langue navigateur ou localStorage
      caches: ["localStorage"], // garde en mémoire le choix
    },
  });

export default i18n;
