<template>
  <layout-default v-if="$route.meta.layout">
    <router-view />
  </layout-default>
  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutDefault from "./layouts/LayoutDefault.vue";

import "@/assets/styles/reset.css";

export default defineComponent({
  name: "App",
  components: {
    LayoutDefault,
  },
});
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

body {
  background-color: rgb(35, 39, 47);

  font-family: "Montserrat", serif;
  font-weight: 400;
  font-style: normal;

  font-size: 16px;
  line-height: 1.25;
  color: rgb(246, 247, 249);
}
</style>
