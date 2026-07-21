<script setup lang="ts">
import { computed, useAttrs } from "vue";

import { cn } from "../utils";

defineOptions({
  name: "UploadIcon",
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
    <path d="M12 16V4" />
    <path d="m7 9 5-5 5 5" />
    <path d="M5 20h14" />
  </svg>
</template>
