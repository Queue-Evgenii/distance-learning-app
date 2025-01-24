import { createStore } from "vuex";
import translationsModule, {
  TranslationsState,
} from "./modules/translations.module";

export interface State {
  translations: TranslationsState;
}

export const store = createStore<State>({
  modules: {
    translations: translationsModule,
  },
});
