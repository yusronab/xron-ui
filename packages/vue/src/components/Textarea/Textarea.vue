<script setup lang="ts">
import { computed } from "vue";

import { cn } from "../../utils";
import { textareaVariants } from "../../variants/textarea";
import { useInput } from "../../composables/useInput";

import type { TextareaProps } from "./Textarea.types";

defineOptions({
  name: "Textarea",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: "",
  size: "md",
  error: false,
});

const emit = defineEmits<{
  "update:modelValue": [string];
}>();

const { attrs, id, disabled } = useInput();

const classes = computed(() =>
  cn(
    textareaVariants({
      size: props.size,
      error: props.error,
    }),
    attrs.class,
  ),
);

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLTextAreaElement).value);
}
</script>

<template>
  <textarea
    :id="id"
    v-bind="attrs"
    :value="modelValue"
    :disabled="disabled"
    :class="classes"
    @input="onInput"
  />
</template>
