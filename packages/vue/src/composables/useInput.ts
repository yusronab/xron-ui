import { computed, useAttrs, useId } from "vue";

export function useInput() {
  const attrs = useAttrs();

  const id = computed(() => (attrs.id as string | undefined) ?? useId());

  const disabled = computed(() => Boolean(attrs.disabled));

  return {
    attrs,
    id,
    disabled,
  };
}
