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
        v-model="loginData[key].value"
        :label="translate(field.labelKey)"
        :placeholder="translate(field.placeholderKey)"
        :errors="loginData[key].errors"
      />
      <button-component @click="clickHandler">
        {{ translate(TranslationKeys.LOGIN) }}
      </button-component>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { TranslationKeys } from "@/models/enums/TranslationKeys";
import { useTranslate } from "@/composables/useTranslate";
import { InputType } from "@/models/enums/InputType";

import ButtonComponent from "@/components/shared/ButtonComponent.vue";
import InputComponent from "@/components/shared/InputComponent.vue";

export default defineComponent({
  name: "AuthView",
  components: { ButtonComponent, InputComponent },
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
        errors: [] as string[],
      },
      password: {
        value: "",
        errors: [] as string[],
      },
    });

    const clickHandler = () => console.log(1);
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
.auth ._image {
  max-width: 72px;
  margin: 0 auto;
}
.auth ._switch {
  color: rgb(88, 196, 220);
}
</style>
