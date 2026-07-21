<script setup lang="ts">
import { computed } from "vue";

import { cn } from "../../utils";
import { useInput } from "../../composables/useInput";

import type { SwitchProps } from "./Switch.types";

defineOptions({
  name: "Switch",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  error: false,
  size: "md",
});

const emit = defineEmits<{
  "update:modelValue": [boolean];
}>();

const { attrs, id, disabled } = useInput();

const sizes = {
  sm: {
    track: "h-5 w-9",
    thumb: "h-4 w-4",
    translate: "translate-x-4",
  },

  md: {
    track: "h-6 w-11",
    thumb: "h-5 w-5",
    translate: "translate-x-5",
  },

  lg: {
    track: "h-7 w-14",
    thumb: "h-6 w-6",
    translate: "translate-x-7",
  },
} as const;

const current = computed(() => sizes[props.size]);

function onChange(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).checked);
}
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center gap-3',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        attrs.class,
      )
    "
  >
    <input
      :id="id"
      v-bind="attrs"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="peer sr-only"
      @change="onChange"
    />

    <span
      :class="
        cn(
          'relative rounded-full transition-colors',
          current.track,
          modelValue ? 'bg-blue-500' : 'bg-gray-300',
          error && !modelValue && 'bg-red-500',
          'peer-focus:ring-2 peer-focus:ring-blue-500',
        )
      "
    >
      <span
        :class="
          cn(
            'absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white transition-transform',
            current.thumb,
            modelValue ? current.translate : 'translate-x-0',
          )
        "
      />
    </span>

    <span
      v-if="$slots.default"
      class="text-sm text-gray-900 dark:text-gray-100"
    >
      <slot />
    </span>
  </div>
</template>
