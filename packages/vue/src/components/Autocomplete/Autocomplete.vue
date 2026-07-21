<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { cn } from "../../utils";
import { autocompleteVariants } from "../../variants/autocomplete";

import { useInput } from "../../composables/useInput";
import { useDropdown } from "../../composables/useDropdown";
import { useDropdownPosition } from "../../composables/useDropdownPosition";
import { useKeyboardNavigation } from "../../composables/useKeyboardNavigation";
import { useOutsideClick } from "../../composables/useOutsideClick";

import Spinner from "../Spinner/Spinner.vue";

import { CloseIcon } from "../../icons";

import type { AutocompleteProps } from "./Autocomplete.types";
import type { Option } from "../Select";

defineOptions({
  name: "Autocomplete",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<AutocompleteProps>(), {
  placeholder: "",
  loading: false,
  loadingText: "Loading...",
  emptyText: "No data",
  clearable: false,
  debounce: 300,
  size: "md",
  rounded: false,
  error: false,
});

const emit = defineEmits<{
  "update:modelValue": [string | number | undefined];
  change: [string | number | undefined, Option | undefined];
  search: [string];
}>();

const { attrs, id, disabled } = useInput();

const rootRef = ref<HTMLElement>();
const inputRef = ref<HTMLInputElement>();
const dropdownRef = ref<HTMLElement>();

const keyword = ref("");
const searchKeyword = ref("");

const { open, openDropdown, closeDropdown } = useDropdown(
  () => !!disabled.value,
);

watch(
  () => props.modelValue,
  () => {
    const selected = props.options.find(
      (item) => String(item[props.valueKey]) === String(props.modelValue),
    );

    if (selected) {
      keyword.value = String(selected[props.labelKey] ?? "");
    } else if (
      props.modelValue === undefined ||
      props.modelValue === null ||
      props.modelValue === ""
    ) {
      keyword.value = "";
    }
  },
  {
    immediate: true,
  },
);

const filteredOptions = computed(() => {
  if (props.onSearch) {
    return props.options;
  }

  return props.options.filter((option) =>
    String(option[props.labelKey] ?? "")
      .toLowerCase()
      .includes(keyword.value.toLowerCase()),
  );
});

function handleSelect(option: Option) {
  keyword.value = String(option[props.labelKey] ?? "");

  const value = option[props.valueKey] as string | number;

  emit("update:modelValue", value);
  emit("change", value, option);

  closeDropdown();
}

const selectedIndex = computed(() =>
  filteredOptions.value.findIndex(
    (item) => String(item[props.valueKey]) === String(props.modelValue),
  ),
);

const { activeIndex, optionRefs, handleKeyDown, setActiveIndex } =
  useKeyboardNavigation({
    open,
    options: filteredOptions,
    selectedIndex,
    onSelect: handleSelect,
    onClose: closeDropdown,
  });

useOutsideClick([rootRef, dropdownRef], closeDropdown);

const { dropdownStyle } = useDropdownPosition(open, inputRef);

let timer: ReturnType<typeof setTimeout>;

watch(keyword, (value) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    searchKeyword.value = value;
  }, props.debounce);
});

watch(searchKeyword, async (value) => {
  emit("search", value);

  if (props.onSearch) {
    await props.onSearch(value);
  }
});

const showClear = computed(
  () => props.clearable && keyword.value && !disabled.value && !props.loading,
);

function clear() {
  keyword.value = "";

  emit("update:modelValue", undefined);
  emit("change", undefined, undefined);

  closeDropdown();
}

const classes = computed(() =>
  cn(
    autocompleteVariants({
      size: props.size,
      rounded: props.rounded,
      error: props.error,
    }),
    props.clearable && "pr-10",
    attrs.class,
  ),
);
</script>

<template>
  <div ref="rootRef" class="relative w-full">
    <div class="relative">
      <input
        ref="inputRef"
        v-bind="attrs"
        v-model="keyword"
        :id="id"
        :disabled="disabled"
        :placeholder="placeholder"
        :class="classes"
        @focus="openDropdown"
        @keydown="handleKeyDown"
        @input="
          () => {
            setActiveIndex(-1);
            openDropdown();
          }
        "
      />

      <button
        v-if="showClear"
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2"
        @click="clear"
      >
        <slot name="clear">
          <CloseIcon
            :class="
              cn('h-4 w-4 text-gray-400 transition-colors', clearIconClass)
            "
          />
        </slot>
      </button>
    </div>

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

        <template v-else-if="filteredOptions.length === 0">
          <div class="p-3 text-center text-sm text-gray-500">
            {{ emptyText }}
          </div>
        </template>

        <template v-else>
          <button
            v-for="(option, index) in filteredOptions"
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
