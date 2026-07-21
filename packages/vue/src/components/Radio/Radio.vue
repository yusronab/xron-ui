<script setup lang="ts">
import { computed, inject } from "vue";

import { cn } from "../../utils";

import { radioGroupKey } from "../../composables/radio-group";
import { useInput } from "../../composables/useInput";

import type { RadioProps } from "./Radio.types";

defineOptions({
  name: "Radio",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<RadioProps>(), {
  error: false,
});

const { attrs, id, disabled } = useInput();

function useRadioGroup() {
  const group = inject(radioGroupKey);

  if (!group) {
    throw new Error("Radio must be used inside RadioGroup.");
  }

  return group;
}

const group = useRadioGroup();

const checked = computed(() => group.modelValue.value === props.value);

function onChange() {
  group.updateValue(props.value);
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
      type="radio"
      :checked="checked"
      :value="value"
      :disabled="disabled"
      class="peer sr-only"
      @change="onChange"
    />

    <span
      :class="
        cn(
          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all',
          checked ? 'border-blue-500' : 'border-gray-300',
          'peer-focus:ring-2 peer-focus:ring-blue-500',
          error && !checked && 'border-red-500',
          'dark:border-gray-600',
        )
      "
    >
      <span
        :class="
          cn(
            'h-2.5 w-2.5 rounded-full bg-blue-500 transition-all',
            checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
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
