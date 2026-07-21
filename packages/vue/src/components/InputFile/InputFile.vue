<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";

import { CloseIcon, UploadIcon } from "../../icons";
import { cn, normalizeFiles } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputFileProps } from "./InputFile.types";
import { useInput } from "../../composables/useInput";

defineOptions({
  name: "InputFile",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputFileProps>(), {
  modelValue: null,
  placeholder: "Choose file...",
  preview: false,
  previewShape: "square",
  previewSize: 120,
  rounded: false,
  error: false,
  size: "md",
});

const emit = defineEmits<{
  "update:modelValue": [File | File[] | null];
  "validation-error": [string];
}>();

const { attrs, id, disabled } = useInput();

const inputRef = ref<HTMLInputElement>();

const dragging = ref(false);

const previewUrls = ref<string[]>([]);

const files = computed<File[]>(() => {
  if (!props.modelValue) {
    return [];
  }

  return Array.isArray(props.modelValue)
    ? props.modelValue
    : [props.modelValue];
});

const previewFiles = computed(() =>
  files.value.filter((file) => file.type.startsWith("image/")),
);

const fileName = computed(() => {
  if (files.value.length === 0) {
    return props.placeholder;
  }

  if (files.value.length === 1) {
    return files.value[0].name;
  }

  return `${files.value.length} files selected`;
});

watch(
  previewFiles,
  (value) => {
    previewUrls.value.forEach(URL.revokeObjectURL);

    previewUrls.value = value.map((file) => URL.createObjectURL(file));
  },
  {
    immediate: true,
  },
);

onBeforeUnmount(() => {
  previewUrls.value.forEach(URL.revokeObjectURL);
});

function validate(file: File) {
  if (props.maxSize && file.size > props.maxSize) {
    emit(
      "validation-error",
      `Maximum file size is ${Math.round(props.maxSize / 1024 / 1024)} MB`,
    );

    return false;
  }

  if (props.allowedTypes && !props.allowedTypes.includes(file.type)) {
    emit("validation-error", "Invalid file type");

    return false;
  }

  return true;
}

function handleFiles(fileList: FileList) {
  const validFiles = normalizeFiles(fileList).filter(validate);

  const multiple = attrs.multiple !== undefined;

  emit("update:modelValue", multiple ? validFiles : (validFiles[0] ?? null));
}

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;

  if (!target.files) {
    emit("update:modelValue", null);

    return;
  }

  handleFiles(target.files);
}

function openPicker() {
  if (disabled.value) {
    return;
  }

  inputRef.value?.click();
}

function clear() {
  emit("update:modelValue", null);

  if (inputRef.value) {
    inputRef.value.value = "";
  }
}

function dragOver(event: DragEvent) {
  event.preventDefault();

  if (!disabled.value) {
    dragging.value = true;
  }
}

function dragLeave() {
  dragging.value = false;
}

function drop(event: DragEvent) {
  event.preventDefault();

  dragging.value = false;

  if (disabled.value) {
    return;
  }

  if (!event.dataTransfer?.files.length) {
    return;
  }

  handleFiles(event.dataTransfer.files);
}

const classes = computed(() =>
  cn(
    inputVariants({
      size: props.size,
      rounded: props.rounded,
      error: props.error,
    }),
    "flex w-full items-center justify-between",
    dragging.value && "border-blue-500 bg-blue-50",
    attrs.class,
  ),
);
</script>

<template>
  <div class="w-full">
    <input
      :id="id"
      ref="inputRef"
      v-bind="attrs"
      type="file"
      class="hidden"
      @change="onChange"
    />

    <div class="relative w-full">
      <button
        type="button"
        :disabled="disabled"
        :class="classes"
        @click="openPicker"
        @dragover="dragOver"
        @dragleave="dragLeave"
        @drop="drop"
      >
        <span class="truncate text-left">
          <slot name="filename" :files="files">
            {{ dragging ? "Drop files here..." : fileName }}
          </slot>
        </span>

        <slot name="icon">
          <UploadIcon class="shrink-0 text-gray-500" />
        </slot>
      </button>

      <slot v-if="files.length" name="clear" :clear="clear">
        <button
          type="button"
          class="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
          @click.stop="clear"
        >
          <CloseIcon />
        </button>
      </slot>
    </div>

    <slot
      v-if="preview && previewFiles.length"
      name="preview"
      :files="previewFiles"
    >
      <div class="mt-3 flex flex-wrap gap-3">
        <img
          v-for="(url, index) in previewUrls"
          :key="url"
          :src="url"
          :alt="`Preview ${index + 1}`"
          :width="previewSize"
          :height="previewSize"
          :style="{
            width: `${previewSize}px`,
            height: `${previewSize}px`,
          }"
          :class="
            cn(
              'border object-cover',
              previewShape === 'circle' ? 'rounded-full' : 'rounded-md',
            )
          "
        />
      </div>
    </slot>
  </div>
</template>
