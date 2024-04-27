import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en/translation.json';
import ar from './assets/locales/ar/translation.json';

import LanguageDetector from 'i18next-browser-languagedetector';

const resources: Resource = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    keySeparator: '.',
    lng: 'ar',
    resources,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
