<template>
  <div class="input-component">
    <div class="input-wrapper">
      <label v-if="label" :for="id">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{ 'input-error': errors?.length > 0 }"
        @input="onInput"
      />
    </div>
    <ul v-if="errors?.length > 0" class="input-errors">
      <li v-for="(item, index) in errors" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { InputType } from "@/models/InputType";

export default defineComponent({
  name: "InputComponent",
  props: {
    id: {
      type: String,
      required: false,
    },
    type: {
      type: String as PropType<InputType>,
      default: InputType.TEXT,
    },
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    errors: {
      type: Array as PropType<string[]>,
      default: [] as string[],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit(
        "update:modelValue",
        props.type === InputType.NUMBER ? Number(target.value) : target.value
      );
    };

    return {
      onInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.input-component,
.input-wrapper {
  display: flex;
  flex-direction: column;
}
.input-wrapper {
  input,
  label {
    display: block;
    width: 100%;
  }
  input {
    border-radius: 12px;
    padding: 12px 16px;
  }
}
.input-component {
  row-gap: 6px;
}
.input-wrapper {
  row-gap: 10px;
}
.input-errors {
  li {
    color: #cf6679;
    font-size: 0.875rem;
  }
}
</style>
