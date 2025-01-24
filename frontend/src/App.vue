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
import "@/assets/styles/flex.css";
import { UserApi } from "./api/modules/user";
import router from "./router";
import { useStore } from "vuex";
import { State } from "./store";

export default defineComponent({
  name: "App",
  components: {
    LayoutDefault,
  },
  setup() {
    const store = useStore<State>();
    const userApi = new UserApi();

    userApi
      .fetchUser()
      .then((data) => {
        console.log("App", data);
        store.commit("user/setUser", data);
        router.replace("/home");
      })
      .catch((err) => {
        console.log("App fetchUser Error", err);
        router.replace("/auth");
      });
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

._block {
  padding: 24px;
  border: 1px solid rgb(246, 247, 249);
  border-radius: 16px;
}
._image img {
  width: 100%;
  object-fit: contain;
}
</style>
