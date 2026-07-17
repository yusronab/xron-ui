<script setup lang="ts">
import { computed, useAttrs } from "vue";

import { spinnerVariants } from "../../variants/spinner";
import { cn } from "../../utils";

import type { SpinnerProps } from "./Spinner.types";

defineOptions({
  name: "Spinner",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SpinnerProps>(), {
  size: "md",
});

const attrs = useAttrs();

const classes = computed(() =>
  cn(
    spinnerVariants({
      size: props.size,
    }),
    attrs.class,
  ),
);
</script>

<template>
  <span v-bind="attrs" :class="classes" />
</template>
