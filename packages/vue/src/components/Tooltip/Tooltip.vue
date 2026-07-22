<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, useAttrs, useId, watch } from "vue";

import { cn } from "../../utils";
import { tooltipVariants } from "../../variants/tooltip";

import {
  calculatePosition,
  clampPosition,
  getArrowClass,
  resolvePosition,
} from "./Tooltip.utils";

import type { TooltipPosition, TooltipProps } from "./Tooltip.types";

defineOptions({
  name: "Tooltip",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TooltipProps>(), {
  position: "bottom-center",
  size: "md",
  delay: 200,
  offset: 8,
  disabled: false,
  arrow: true,
});

const attrs = useAttrs();

const id = useId();

const triggerRef = ref<HTMLElement>();
const tooltipRef = ref<HTMLElement>();

const open = ref(false);

const coords = ref({
  top: -99999,
  left: -99999,
});

const currentPosition = ref<TooltipPosition>(props.position);

let showTimer = 0;

let resizeObserver: ResizeObserver | undefined;

function updatePosition() {
  if (!triggerRef.value || !tooltipRef.value) {
    return;
  }

  const triggerRect = triggerRef.value.getBoundingClientRect();
  const tooltipRect = tooltipRef.value.getBoundingClientRect();

  if (!tooltipRect.width || !tooltipRect.height) {
    return;
  }

  const position = resolvePosition(triggerRect, tooltipRect, props.position);

  currentPosition.value = position;

  coords.value = clampPosition(
    calculatePosition(triggerRect, tooltipRect, position, props.offset),
    tooltipRect,
  );
}

async function openTooltip() {
  if (props.disabled) {
    return;
  }

  window.clearTimeout(showTimer);

  showTimer = window.setTimeout(async () => {
    open.value = true;

    await nextTick();

    requestAnimationFrame(updatePosition);
  }, props.delay);
}

function closeTooltip() {
  window.clearTimeout(showTimer);

  open.value = false;
}

function handleViewportChange() {
  if (open.value) {
    updatePosition();
  }
}

watch(open, async (value) => {
  resizeObserver?.disconnect();

  window.removeEventListener("resize", handleViewportChange);
  window.removeEventListener("scroll", handleViewportChange, true);

  if (!value) {
    return;
  }

  await nextTick();

  requestAnimationFrame(() => {
    updatePosition();

    resizeObserver = new ResizeObserver(updatePosition);

    if (triggerRef.value) {
      resizeObserver.observe(triggerRef.value);
    }

    if (tooltipRef.value) {
      resizeObserver.observe(tooltipRef.value);
    }

    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);
  });
});

onBeforeUnmount(() => {
  window.clearTimeout(showTimer);

  resizeObserver?.disconnect();

  window.removeEventListener("resize", handleViewportChange);
  window.removeEventListener("scroll", handleViewportChange, true);
});
</script>

<template>
  <div
    ref="triggerRef"
    class="inline-block"
    :aria-describedby="open ? id : undefined"
    @mouseenter="openTooltip"
    @mouseleave="closeTooltip"
    @focusin="openTooltip"
    @focusout="closeTooltip"
  >
    <slot />
  </div>

  <Teleport to="body">
    <div
      v-if="open"
      ref="tooltipRef"
      :id="id"
      role="tooltip"
      :class="
        cn(
          tooltipVariants({
            size,
          }),
          'z-50',
          attrs.class,
        )
      "
      :style="{
        position: 'absolute',
        top: `${coords.top}px`,
        left: `${coords.left}px`,
      }"
    >
      {{ content }}

      <div
        v-if="arrow"
        :class="
          cn(
            'absolute h-2 w-2 rotate-45 bg-gray-900',
            getArrowClass(currentPosition),
          )
        "
      />
    </div>
  </Teleport>
</template>
