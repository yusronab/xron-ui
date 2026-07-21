<script setup lang="ts">
import { computed, provide } from "vue";

import { radioGroupKey } from "../../composables/radio-group";

import type { RadioGroupProps } from "./RadioGroup.types";

defineOptions({
  name: "RadioGroup",
});

const props = defineProps<RadioGroupProps>();

const emit = defineEmits<{
  "update:modelValue": [string | number | boolean];
}>();

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

provide(radioGroupKey, {
  modelValue,

  updateValue(value) {
    modelValue.value = value;
  },
});
</script>

<template>
  <div role="radiogroup" class="flex flex-col gap-2">
    <slot />
  </div>
</template>
