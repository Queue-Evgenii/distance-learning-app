import { useStore } from "vuex";
import { TranslationKeys } from "@/models/TranslationKeys";
import { State } from "@/store";

export function useTranslate() {
  const store = useStore<State>();

  // Определяем функцию для перевода
  const translate = (key: TranslationKeys) =>
    store.getters["translations/translate"](key);

  return {
    translate,
  };
}
