<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, useAttrs, watch } from "vue";

import { cn } from "../../utils";
import { modalVariants } from "../../variants/modal";

import type { ModalProps } from "./Modal.types";

defineOptions({
  name: "Modal",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: false,
  size: "md",
  closeOnEscape: true,
  closeOnOverlayClick: true,
});

const emit = defineEmits<{
  "update:modelValue": [boolean];
  close: [];
}>();

const attrs = useAttrs();

const dialogRef = ref<HTMLDialogElement>();

const classes = computed(() =>
  cn(
    modalVariants({
      size: props.size,
    }),
    [
      "fixed",
      "left-1/2",
      "top-1/2",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "m-0",
      "max-h-[calc(100vh-2rem)]",
      "overflow-auto",
      "p-4",
      "backdrop:bg-black/50",
      "backdrop:backdrop-blur-xs",
    ],
    (attrs.class as string | undefined) ?? "",
  ),
);

function close() {
  emit("update:modelValue", false);
  emit("close");
}

watch(
  () => props.modelValue,
  async (open) => {
    await nextTick();

    const dialog = dialogRef.value;

    if (!dialog) {
      return;
    }

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }

      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) {
        dialog.close();
      }

      document.body.style.overflow = "";
    }
  },
  {
    immediate: true,
  },
);

function handleCancel(event: Event) {
  if (!props.closeOnEscape) {
    event.preventDefault();
    return;
  }

  event.preventDefault();

  close();
}

function handlePointerDown(event: PointerEvent) {
  if (!props.closeOnOverlayClick) {
    return;
  }

  if (event.target === dialogRef.value) {
    close();
  }
}

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <Teleport to="body">
    <dialog
      v-if="modelValue"
      ref="dialogRef"
      v-bind="$attrs"
      :class="classes"
      @cancel="handleCancel"
      @close="close"
      @pointerdown="handlePointerDown"
    >
      <slot />
    </dialog>
  </Teleport>
</template>
