import { useStore } from "vuex";
import { TranslationKeys } from "@/models/enums/TranslationKeys";
import { State } from "@/store";

export function useTranslate() {
  const store = useStore<State>();
  const translate = (key: TranslationKeys) =>
    store.getters["translations/translate"](key);

  return {
    translate,
  };
}
