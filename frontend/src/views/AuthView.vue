<template>
  <main class="auth">
    <div class="_block _flex _f-dir-col _y-gap-16">
      <div class="_image">
        <img src="../assets/logo.png" alt="" />
      </div>
      <input-component
        v-for="(field, key) in fields"
        :key="key"
        :id="key"
        :type="field.type"
        v-model="loginData[key]"
        :label="translate(field.labelKey)"
        :placeholder="translate(field.placeholderKey)"
      />
      <button-component @click="clickHandler">
        {{ translate(TranslationKeys.LOGIN) }}
      </button-component>
      <span v-if="error" class="_error">{{ error }}</span>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { TranslationKeys } from "@/models/enums/TranslationKeys";
import { useTranslate } from "@/composables/useTranslate";
import { InputType } from "@/models/enums/InputType";

import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import InputComponent from "@/components/shared/InputComponent.vue";
import { UserApi } from "@/api/modules/user";
import { LoginDto } from "@/models/dto/LoginDto";
import { Token } from "@/models/browser/Token";
import router from "@/router";
import { State } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  name: "AuthView",
  components: { ButtonComponent, InputComponent },
  setup() {
    const { translate } = useTranslate();
    const store = useStore<State>();
    const error = ref("");

    const fields = {
      email: {
        type: InputType.TEXT,
        labelKey: TranslationKeys.EMAIL,
        placeholderKey: TranslationKeys.EMAIL,
      },
      password: {
        type: InputType.PASSWORD,
        labelKey: TranslationKeys.PASSWORD,
        placeholderKey: TranslationKeys.PASSWORD,
      },
    };

    const loginData = reactive<LoginDto>({
      email: "",
      password: "",
    });

    const userApi = new UserApi();
    const fetchUser = () => {
      userApi
        .fetchUser()
        .then((data) => {
          console.log("AuthView", data);
          store.commit("user/setUser", data);
          router.replace("/home");
        })
        .catch((err) => console.log("AuthView fetchUser Error", err));
    };
    const clickHandler = () => {
      userApi
        .login(loginData)
        .then((data) => {
          error.value = "";
          Token.set(data.access_token);
          fetchUser();
        })
        .catch((err) => {
          console.log("AuthView login Error", err);
          error.value = "* Wrong email or password :(";
        });
    };
    return {
      translate,
      TranslationKeys,
      clickHandler,
      InputType,
      fields,
      loginData,
      error,
    };
  },
});
</script>

<style scoped>
.auth {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.auth ._block {
  flex: 0 1 500px;
}
.auth ._image {
  max-width: 72px;
  margin: 0 auto;
}
.auth ._error {
  color: #cf6679;
  display: inline-block;
  margin-left: 8px;
}
</style>
