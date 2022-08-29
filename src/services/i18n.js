import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      app_name: "https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg",
    },
  },
  ar: {
    translation: {
      app_name: "https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-ar.svg",
    },
  },
};
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources,
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "locales/{{lng}}/translation.json",
    },
  });
export default i18next;
