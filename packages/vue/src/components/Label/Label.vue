<script setup lang="ts">
import { computed, inject, useAttrs } from "vue";

import { cn } from "../../utils";

import type { LabelProps } from "./Label.types";
import { formControlKey } from "../../composables/form-control";

defineOptions({
  name: "Label",
  inheritAttrs: false,
});

const props = defineProps<LabelProps>();

const attrs = useAttrs();

const formControl = inject(formControlKey, null);

const htmlFor = computed(() => props.htmlFor ?? formControl?.id.value);
</script>

<template>
  <label
    v-bind="attrs"
    :for="htmlFor"
    :class="
      cn('text-sm font-medium text-gray-900 dark:text-gray-100', attrs.class)
    "
  >
    <slot />
  </label>
</template>
