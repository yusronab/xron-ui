<script setup lang="ts">
import { computed, ref } from "vue";

import { cn } from "../../utils";
import { selectVariants } from "../../variants/select";

import { useInput } from "../../composables/useInput";
import { useDropdown } from "../../composables/useDropdown";
import { useDropdownPosition } from "../../composables/useDropdownPosition";
import { useKeyboardNavigation } from "../../composables/useKeyboardNavigation";
import { useOutsideClick } from "../../composables/useOutsideClick";

import Spinner from "../Spinner/Spinner.vue";

import { ChevronDownIcon, CloseIcon } from "../../icons";

import type { Option, SelectProps } from "./Select.types";

defineOptions({
  name: "Select",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: "Select...",
  loading: false,
  loadingText: "Loading...",
  emptyText: "No data",
  clearable: false,
  size: "md",
  error: false,
  rounded: false,
});

const emit = defineEmits<{
  "update:modelValue": [string | number | undefined];
  change: [string | number | undefined, Option | undefined];
}>();

const { attrs, disabled } = useInput();

const rootRef = ref<HTMLElement>();
const triggerRef = ref<HTMLElement>();
const dropdownRef = ref<HTMLElement>();

const { open, closeDropdown, toggleDropdown } = useDropdown(
  () => !!disabled.value,
);

const selectedOption = computed(() =>
  props.options.find(
    (item) => String(item[props.valueKey]) === String(props.modelValue),
  ),
);

const selectedIndex = computed(() =>
  props.options.findIndex(
    (item) => String(item[props.valueKey]) === String(props.modelValue),
  ),
);

function handleSelect(option: Option) {
  const value = option[props.valueKey] as string | number;

  emit("update:modelValue", value);
  emit("change", value, option);

  closeDropdown();
}

const { activeIndex, optionRefs, handleKeyDown } = useKeyboardNavigation({
  open,
  options: computed(() => props.options),
  selectedIndex,
  onSelect: handleSelect,
  onClose: closeDropdown,
});

useOutsideClick([rootRef, dropdownRef], closeDropdown);

const { dropdownStyle } = useDropdownPosition(open, triggerRef);

const showClear = computed(
  () =>
    props.clearable &&
    !disabled.value &&
    !props.loading &&
    props.modelValue !== undefined &&
    props.modelValue !== null &&
    props.modelValue !== "",
);

function clear() {
  emit("update:modelValue", undefined);
  emit("change", undefined, undefined);

  closeDropdown();
}

const classes = computed(() =>
  cn(
    selectVariants({
      size: props.size,
      rounded: props.rounded,
      error: props.error,
    }),
    attrs.class,
  ),
);
</script>

<template>
  <div ref="rootRef" class="relative w-full">
    <button
      ref="triggerRef"
      v-bind="attrs"
      type="button"
      :disabled="disabled"
      :class="classes"
      @click="toggleDropdown"
      @keydown="handleKeyDown"
    >
      <span class="flex-1 truncate text-left">
        <slot name="value" :option="selectedOption">
          {{ selectedOption ? selectedOption[labelKey] : placeholder }}
        </slot>
      </span>

      <div class="flex items-center gap-2">
        <button
          v-if="showClear"
          type="button"
          tabindex="-1"
          class="flex items-center justify-center"
          @click.stop="clear"
        >
          <slot name="clear">
            <CloseIcon class="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </slot>
        </button>

        <ChevronDownIcon
          :class="cn('transition-transform', open && 'rotate-180')"
        />
      </div>
    </button>

    <Teleport to="body">
      <div
        v-if="open"
        ref="dropdownRef"
        :style="dropdownStyle"
        :class="
          cn(
            'max-h-64 overflow-auto border bg-white shadow-md',
            'dark:border-gray-700 dark:bg-gray-900',
            'text-gray-900 dark:text-gray-100',
            rounded ? 'rounded-2xl' : 'rounded-md',
          )
        "
      >
        <template v-if="loading">
          <div class="flex items-center justify-center gap-2 p-3 text-sm">
            <Spinner size="sm" />
            {{ loadingText }}
          </div>
        </template>

        <template v-else-if="options.length === 0">
          <div class="p-3 text-center text-sm text-gray-500">
            {{ emptyText }}
          </div>
        </template>

        <template v-else>
          <button
            v-for="(option, index) in options"
            :key="String(option[valueKey])"
            :ref="
              (el) => {
                optionRefs[index] = el as HTMLButtonElement | null;
              }
            "
            type="button"
            :class="
              cn(
                'flex w-full items-center px-3 py-2 text-left text-sm transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                String(option[valueKey]) === String(modelValue) &&
                  'bg-gray-100 font-medium dark:bg-gray-800',
                activeIndex === index && 'bg-blue-100 dark:bg-blue-900',
              )
            "
            @click="handleSelect(option)"
          >
            <slot
              name="option"
              :option="option"
              :selected="String(option[valueKey]) === String(modelValue)"
              :active="activeIndex === index"
            >
              {{ option[labelKey] }}
            </slot>
          </button>
        </template>
      </div>
    </Teleport>
  </div>
</template>
