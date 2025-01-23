<template>
  <header>header</header>
  <slot></slot>
  <footer>footer</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutDefault",
});
</script>
