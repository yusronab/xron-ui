<script setup lang="ts">
import { computed } from "vue";

import Button from "../Button/Button.vue";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "../../icons";

import { DOTS, getPaginationRange } from "./Pagination.utils";

import type { PaginationProps } from "./Pagination.types";

defineOptions({
  name: "Pagination",
});

const props = withDefaults(defineProps<PaginationProps>(), {
  siblingCount: 1,
  buttonVariant: "primary",
  buttonSize: "md",
  buttonRounded: false,
});

const emit = defineEmits<{
  pageChange: [number];
}>();

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.total / props.pageSize)),
);

const currentPage = computed(() =>
  Math.min(Math.max(props.page, 1), totalPages.value),
);

const pages = computed(() =>
  getPaginationRange({
    total: props.total,
    page: currentPage.value,
    pageSize: props.pageSize,
    siblingCount: props.siblingCount,
  }),
);

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value || page === currentPage.value) {
    return;
  }

  emit("pageChange", page);
}
</script>

<template>
  <nav class="flex items-center justify-center gap-2" aria-label="Pagination">
    <Button
      :variant="buttonVariant"
      :size="buttonSize"
      :rounded="buttonRounded"
      aria-label="Go to first page"
      :disabled="currentPage === 1"
      @click="goToPage(1)"
    >
      <ChevronsLeftIcon />
    </Button>

    <Button
      :variant="buttonVariant"
      :size="buttonSize"
      :rounded="buttonRounded"
      aria-label="Go to previous page"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      <ChevronLeftIcon />
    </Button>

    <template v-for="(item, index) in pages" :key="`${item}-${index}`">
      <span v-if="item === DOTS" class="px-2 text-gray-500" aria-hidden="true">
        ...
      </span>

      <Button
        v-else
        :variant="buttonVariant"
        :size="buttonSize"
        :rounded="buttonRounded"
        :appearance="currentPage === item ? 'solid' : 'outline'"
        :aria-label="`Page ${item}`"
        :aria-current="currentPage === item ? 'page' : undefined"
        @click="goToPage(item)"
      >
        {{ item }}
      </Button>
    </template>

    <Button
      :variant="buttonVariant"
      :size="buttonSize"
      :rounded="buttonRounded"
      aria-label="Go to next page"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
    >
      <ChevronRightIcon />
    </Button>

    <Button
      :variant="buttonVariant"
      :size="buttonSize"
      :rounded="buttonRounded"
      aria-label="Go to last page"
      :disabled="currentPage === totalPages"
      @click="goToPage(totalPages)"
    >
      <ChevronsRightIcon />
    </Button>
  </nav>
</template>
