import { nextTick, ref, watch, type Ref } from "vue";

import type { Option } from "../components/Select/Select.types";

interface Props {
  open: Ref<boolean>;

  options: Ref<Option[]>;

  selectedIndex: Ref<number>;

  onSelect: (option: Option) => void;

  onClose: () => void;
}

export function useKeyboardNavigation({
  open,
  options,
  selectedIndex,
  onSelect,
  onClose,
}: Props) {
  const activeIndex = ref(-1);

  const optionRefs = ref<(HTMLElement | null)[]>([]);

  async function scrollIntoView() {
    await nextTick();

    optionRefs.value[activeIndex.value]?.scrollIntoView({
      block: "nearest",
    });
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (!open.value) {
      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
      }

      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        activeIndex.value = Math.min(
          activeIndex.value + 1,
          options.value.length - 1,
        );

        scrollIntoView();
        break;

      case "ArrowUp":
        event.preventDefault();

        activeIndex.value = Math.max(activeIndex.value - 1, 0);

        scrollIntoView();
        break;

      case "Enter":
        event.preventDefault();

        if (activeIndex.value >= 0) {
          onSelect(options.value[activeIndex.value]);
        }

        break;

      case "Escape":
        event.preventDefault();
        onClose();
        break;
    }
  }

  watch(open, (value) => {
    if (!value) {
      activeIndex.value = -1;
      return;
    }

    activeIndex.value = Math.max(selectedIndex.value, 0);
  });

  return {
    activeIndex,
    optionRefs,
    handleKeyDown,
  };
}
