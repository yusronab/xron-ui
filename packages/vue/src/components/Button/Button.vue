<script setup lang="ts">
import { computed, useAttrs } from "vue";

import { cn } from "../../utils";
import { buttonVariants } from "../../variants/button";

import Spinner from "../Spinner/Spinner.vue";

import type { ButtonProps } from "./Button.types";

defineOptions({
  name: "Button",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<ButtonProps>(), {
  appearance: "solid",
  size: "md",
  loading: false,
  disabled: false,
});

const attrs = useAttrs();

const classes = computed(() =>
  cn(
    buttonVariants({
      variant: props.variant,
      appearance: props.appearance,
      size: props.size,
      rounded: props.rounded,
      fullWidth: props.fullWidth,
    }),
    attrs.class,
  ),
);
</script>

<template>
  <button v-bind="attrs" :disabled="disabled || loading" :class="classes">
    <span class="inline-flex items-center gap-2">
      <Spinner v-if="loading" :size="size" />

      <slot />
    </span>
  </button>
</template>
