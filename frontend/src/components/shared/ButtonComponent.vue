<template>
  <button @click="onClick" :class="['_button', type]" type="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ComponentType } from "@/models/enums/ComponentType";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    type: {
      type: String as PropType<ComponentType>,
      default: ComponentType.PRIMARY,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const onClick = () => {
      emit("click");
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
._button {
  width: 100%;
  padding: 16px 24px;
  font-weight: 700;
  border-radius: 16px;
  border-style: solid;
  border-width: 1px;
  &._primary {
    color: rgb(64, 71, 86);
    background-color: rgb(88, 196, 220);
    border-color: transparent;
  }
  &._secondary {
    color: rgb(246, 247, 249);
    background-color: transparent;
    border-color: rgb(64, 71, 86);
  }
}
</style>
