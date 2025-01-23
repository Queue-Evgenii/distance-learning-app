<template>
  <main class="auth">
    <div class="_block">
      <input-component
        v-for="(field, key) in fields"
        :key="key"
        :id="key"
        :type="field.type"
        v-model="loginData[key].value"
        :label="translate(field.labelKey)"
        :placeholder="translate(field.placeholderKey)"
        :errors="loginData[key].errors"
      />
      <button-component @click="clickHandler">
        {{
          isLogin
            ? translate(TranslationKeys.LOGIN)
            : translate(TranslationKeys.SIGNUP)
        }}
      </button-component>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { TranslationKeys } from "@/models/TranslationKeys";
import { useTranslate } from "@/composables/useTranslate";
import { InputType } from "@/models/InputType";

import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import InputComponent from "@/components/shared/InputComponent.vue";

export default defineComponent({
  name: "AuthView",
  components: { ButtonComponent, InputComponent },
  data() {
    return {
      isLogin: true,
    };
  },
  setup() {
    const { translate } = useTranslate();
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

    const loginData = reactive({
      email: {
        value: "",
        errors: ["error"] as string[],
      },
      password: {
        value: "",
        errors: [] as string[],
      },
    });

    const clickHandler = () => {
      console.log(loginData);
    };
    return {
      translate,
      TranslationKeys,
      clickHandler,
      InputType,
      fields,
      loginData,
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
</style>
