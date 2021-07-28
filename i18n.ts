import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/assets/translations/en.json';

const FALL_BACK_LANG = 'en';

export const resources = {
  en: {
    translation: en,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: FALL_BACK_LANG,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
});

export default i18n;
