import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import '../src/locales/en/translation.json'
import '../src/locales/ru/translation.json'
import '../src/locales/pl/translation.json'



i18n.use(I18NextHttpBackend).use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: '/brainwave-main/locales/{{lng}}/translation.json'
    }
})

export default i18n;