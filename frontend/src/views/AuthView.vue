<template>
  <main class="auth">
    <h1>
      {{
        isLogin
          ? translate(TranslationKeys.LOGIN)
          : translate(TranslationKeys.SIGNUP)
      }}
    </h1>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TranslationKeys } from "@/models/TranslationKeys";
import { useTranslate } from "@/composables/useTranslate";

export default defineComponent({
  name: "AuthView",
  components: {},
  data() {
    return {
      isLogin: true,
    };
  },
  setup() {
    const { translate } = useTranslate();
    return { translate, TranslationKeys };
  },
});
</script>
