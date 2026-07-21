<script setup lang="ts">
import { computed, ref } from "vue";

import { EyeIcon, EyeOffIcon } from "../../icons";
import { cn } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputPasswordProps } from "./InputPassword.types";
import { useInput } from "../../composables/useInput";

defineOptions({
  name: "InputPassword",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputPasswordProps>(), {
  modelValue: "",
  size: "md",
  rounded: false,
  error: false,
});

const emit = defineEmits<{
  "update:modelValue": [string];
}>();

const { attrs, id, disabled } = useInput();

const visible = ref(false);

const classes = computed(() =>
  cn(
    inputVariants({
      size: props.size,
      rounded: props.rounded,
      error: props.error,
    }),
    "pr-10",
    attrs.class,
  ),
);

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}

function toggleVisibility() {
  if (disabled.value) {
    return;
  }

  visible.value = !visible.value;
}
</script>

<template>
  <div class="relative w-full">
    <input
      :id="id"
      v-bind="attrs"
      :value="modelValue"
      :type="visible ? 'text' : 'password'"
      :disabled="disabled"
      :class="classes"
      @input="onInput"
    />

    <button
      type="button"
      :disabled="disabled"
      class="absolute inset-y-0 right-3 flex cursor-pointer items-center text-gray-500 hover:text-gray-700 disabled:pointer-events-none"
      :aria-label="visible ? 'Hide password' : 'Show password'"
      tabindex="-1"
      @click="toggleVisibility"
    >
      <EyeOffIcon v-if="visible" />

      <EyeIcon v-else />
    </button>
  </div>
</template>
