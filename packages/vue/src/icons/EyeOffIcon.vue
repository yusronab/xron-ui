<script setup lang="ts">
import { computed, useAttrs } from "vue";

import { cn } from "../utils";

defineOptions({
  name: "EyeOffIcon",
  inheritAttrs: false,
});

const attrs = useAttrs();

const classes = computed(() => cn("h-4 w-4", attrs.class));
</script>

<template>
  <svg
    v-bind="attrs"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="classes"
    aria-hidden="true"
  >
    <path d="m3 3 18 18" />
    <path d="M10.58 10.58A2 2 0 0 0 13.42 13.42" />
    <path
      d="M9.88 5.09A10.94 10.94 0 0 1 12 4.9c4.78 0 8.73 3.11 10 7.1a10.96 10.96 0 0 1-4.24 5.29"
    />
    <path
      d="M6.61 6.61A10.96 10.96 0 0 0 2 12c1.27 3.99 5.22 7.1 10 7.1 1.34 0 2.62-.24 3.8-.69"
    />
  </svg>
</template>
