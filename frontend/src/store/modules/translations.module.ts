import { Module } from "vuex";
import { State as RootState } from "@/store/index";
import { TranslationKeys } from "@/models/enums/TranslationKeys";
import en from "@/locales/en";
import uk from "@/locales/uk";
import { TranslationsState } from "../models/TranslationState";

const translationsModule: Module<TranslationsState, RootState> = {
  namespaced: true,
  state: {
    locale: "en",
    translations: { en, uk },
  },
  getters: {
    translate:
      (state) =>
      (key: TranslationKeys): string => {
        return state.translations[state.locale]?.[key] || key;
      },
  },
  mutations: {
    setLocale(state, locale: string) {
      state.locale = locale;
    },
  },
  actions: {
    changeLocale({ commit }, locale: string) {
      commit("setLocale", locale);
    },
  },
};

export default translationsModule;
