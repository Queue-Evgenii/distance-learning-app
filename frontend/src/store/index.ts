import { createStore } from "vuex";
import { TranslationsState } from "./models/TranslationState";

import translationsModule from "./modules/translations.module";
import userModule from "./modules/user.module";
import { UserState } from "./models/UserState";

export interface State {
  translations: TranslationsState;
  user: UserState;
}

export const store = createStore<State>({
  modules: {
    translations: translationsModule,
    user: userModule,
  },
});
