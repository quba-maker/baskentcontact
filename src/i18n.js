import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import trTranslation from './locales/tr.json';
import frTranslation from './locales/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: trTranslation },
      fr: { translation: frTranslation }
    },
    fallbackLng: 'fr', // Fallback to French for all non-Turkish users (e.g., Europe)
    supportedLngs: ['tr', 'fr'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    }
  });

export default i18n;
