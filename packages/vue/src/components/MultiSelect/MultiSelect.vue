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
import CheckboxIndicator from "../Checkbox/CheckboxIndicator.vue";

import { ChevronDownIcon } from "../../icons";

import type { MultiSelectProps } from "./MultiSelect.types";
import type { Option } from "../Select";

defineOptions({
  name: "MultiSelect",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<MultiSelectProps>(), {
  modelValue: () => [],
  placeholder: "Select...",
  loading: false,
  loadingText: "Loading...",
  emptyText: "No data",
  size: "md",
  rounded: false,
  error: false,
});

const emit = defineEmits<{
  "update:modelValue": [(string | number)[]];
  change: [(string | number)[], Option[]];
}>();

const { attrs, disabled } = useInput();

const rootRef = ref<HTMLElement>();
const triggerRef = ref<HTMLElement>();
const dropdownRef = ref<HTMLElement>();

const { open, closeDropdown, toggleDropdown } = useDropdown(
  () => !!disabled.value,
);

const selectedOptions = computed(() =>
  props.options.filter((option) =>
    props.modelValue.some(
      (value) => String(value) === String(option[props.valueKey]),
    ),
  ),
);

const selectedText = computed(() => {
  if (selectedOptions.value.length === 0) {
    return props.placeholder;
  }

  return selectedOptions.value
    .map((item) => String(item[props.labelKey]))
    .join(", ");
});

const selectedIndex = computed(() =>
  props.options.findIndex((option) =>
    props.modelValue.some(
      (value) => String(value) === String(option[props.valueKey]),
    ),
  ),
);

function handleSelect(option: Option) {
  const optionValue = option[props.valueKey] as string | number;

  const exists = props.modelValue.some(
    (value) => String(value) === String(optionValue),
  );

  const values = exists
    ? props.modelValue.filter((value) => String(value) !== String(optionValue))
    : [...props.modelValue, optionValue];

  const options = props.options.filter((item) =>
    values.some((value) => String(value) === String(item[props.valueKey])),
  );

  emit("update:modelValue", values);
  emit("change", values, options);
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

const allSelected = computed(
  () =>
    props.options.length > 0 &&
    props.modelValue.length === props.options.length,
);

const indeterminate = computed(
  () =>
    props.modelValue.length > 0 &&
    props.modelValue.length < props.options.length,
);

function toggleSelectAll() {
  if (allSelected.value) {
    emit("update:modelValue", []);
    emit("change", [], []);

    return;
  }

  const values = props.options.map(
    (item) => item[props.valueKey] as string | number,
  );

  emit("update:modelValue", values);
  emit("change", values, props.options);
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

const displayOptions = computed(() =>
  props.options.map((option) => ({
    option,
    selected: props.modelValue.some(
      (value) => String(value) === String(option[props.valueKey]),
    ),
  })),
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
        <slot name="value" :options="selectedOptions">
          {{ selectedText }}
        </slot>
      </span>

      <ChevronDownIcon
        :class="cn('transition-transform', open && 'rotate-180')"
      />
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
            type="button"
            class="flex w-full items-center gap-3 border-b px-3 py-2 text-left text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            @click="toggleSelectAll"
          >
            <CheckboxIndicator
              :checked="allSelected"
              :indeterminate="indeterminate"
            />

            <span>Select All</span>
          </button>

          <button
            v-for="({ option, selected }, index) in displayOptions"
            :key="String(option[valueKey])"
            :ref="
              (el) => {
                optionRefs[index] = el as HTMLButtonElement | null;
              }
            "
            type="button"
            :class="
              cn(
                'flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                selected && 'bg-gray-100 font-medium dark:bg-gray-800',
                activeIndex === index && 'bg-blue-100 dark:bg-blue-900',
              )
            "
            @click="handleSelect(option)"
          >
            <CheckboxIndicator
              :checked="
                modelValue.some(
                  (value) => String(value) === String(option[valueKey]),
                )
              "
            />

            <div class="min-w-0 flex-1">
              <slot
                name="option"
                :option="option"
                :selected="selected"
                :active="activeIndex === index"
              >
                {{ option[labelKey] }}
              </slot>
            </div>
          </button>
        </template>
      </div>
    </Teleport>
  </div>
</template>
