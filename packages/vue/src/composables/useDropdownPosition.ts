import { onBeforeUnmount, ref, watch, type Ref } from "vue";

interface DropdownStyle {
  position: "fixed";
  top: string;
  left: string;
  width: string;
  zIndex: number;
}

interface UseDropdownPositionReturn {
  dropdownStyle: Ref<Partial<DropdownStyle>>;
  updateDropdownPosition: () => void;
}

export function useDropdownPosition(
  open: Ref<boolean>,
  triggerRef: Ref<HTMLElement | undefined>,
): UseDropdownPositionReturn {
  const dropdownStyle = ref<Partial<DropdownStyle>>({});

  function updateDropdownPosition() {
    if (!triggerRef.value) {
      return;
    }

    const rect = triggerRef.value.getBoundingClientRect();

    dropdownStyle.value = {
      position: "fixed",
      top: `${rect.bottom + 8}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      zIndex: 9999,
    };
  }

  watch(open, (value) => {
    if (!value) {
      return;
    }

    updateDropdownPosition();

    window.addEventListener("resize", updateDropdownPosition);
    window.addEventListener("scroll", updateDropdownPosition, true);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateDropdownPosition);
    window.removeEventListener("scroll", updateDropdownPosition, true);
  });

  return {
    dropdownStyle,
    updateDropdownPosition,
  };
}
