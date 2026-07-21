<script setup lang="ts">
import { computed, useAttrs } from "vue";

import { cn } from "../utils";

defineOptions({
  name: "EyeIcon",
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
    <path
      d="M2.062 12.348a1 1 0 0 1 0-.696C3.413 7.59 7.523 4.5 12 4.5s8.587 3.09 9.938 7.152a1 1 0 0 1 0 .696C20.587 16.41 16.477 19.5 12 19.5S3.413 16.41 2.062 12.348Z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
</template>
