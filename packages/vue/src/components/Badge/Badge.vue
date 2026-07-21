<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { BadgeProps } from "./Badge.types";
import { cn } from "../../utils";
import { badgeVariants } from "../../variants/badge";

defineOptions({
  name: "Badge",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "primary",
  size: "md",
  outline: false,
});

const attrs = useAttrs();

const classes = computed(() =>
  cn(
    badgeVariants({
      variant: props.variant,
      size: props.size,
      outline: props.outline,
    }),
    attrs.class,
  ),
);
</script>

<template>
  <span v-bind="attrs" :class="classes">
    <slot />
  </span>
</template>
