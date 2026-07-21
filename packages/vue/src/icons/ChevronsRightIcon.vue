<script setup lang="ts">
import { computed, useAttrs } from "vue";

import { cn } from "../utils";

defineOptions({
  name: "ChevronsRightIcon",
  inheritAttrs: false,
});

const attrs = useAttrs();

const classes = computed(() => cn("h-4 w-4", attrs.class));
</script>

<template>
  <svg
    v-bind="attrs"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="classes"
  >
    <path d="m13 17 5-5-5-5" />
    <path d="m6 17 5-5-5-5" />
  </svg>
</template>
