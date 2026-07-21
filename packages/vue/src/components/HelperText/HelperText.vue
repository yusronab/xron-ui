<script setup lang="ts">
import { computed, useAttrs } from "vue";

import { cn } from "../../utils";

import type { HelperTextProps } from "./HelperText.types";

defineOptions({
  name: "HelperText",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<HelperTextProps>(), {
  error: false,
});

const attrs = useAttrs();

const classes = computed(() =>
  cn(
    "text-sm",
    props.error ? "text-red-600" : "text-gray-500 dark:text-gray-400",
    attrs.class,
  ),
);
</script>

<template>
  <p v-bind="attrs" :class="classes">
    <slot />
  </p>
</template>
