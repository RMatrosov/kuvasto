import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import translationRU from 'locales/ru/ru.json'
import translationFI from 'locales/fi/fi.json'

const resources = {
  ru: {
    translation: translationRU
  },
  fi: {
    translation: translationFI
  }
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'ru',
  resources,
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  },
})

export default i18n