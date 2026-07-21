import { ref } from "vue";

export function useDropdown(disabled: () => boolean) {
  const open = ref(false);

  function openDropdown() {
    if (disabled()) {
      return;
    }

    open.value = true;
  }

  function closeDropdown() {
    open.value = false;
  }

  function toggleDropdown() {
    if (disabled()) {
      return;
    }

    open.value = !open.value;
  }

  return {
    open,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
}
