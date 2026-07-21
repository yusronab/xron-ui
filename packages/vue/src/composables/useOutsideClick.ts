import { onBeforeUnmount, onMounted, type Ref } from "vue";

export function useOutsideClick(
  refs: Ref<HTMLElement | undefined>[],
  onOutsideClick: () => void,
) {
  function handleMouseDown(event: MouseEvent) {
    const target = event.target as Node;

    const inside = refs.some((ref) => ref.value?.contains(target));

    if (!inside) {
      onOutsideClick();
    }
  }

  onMounted(() => {
    document.addEventListener("mousedown", handleMouseDown);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("mousedown", handleMouseDown);
  });
}
