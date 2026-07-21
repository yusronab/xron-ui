import { computed, inject, useAttrs, useId } from "vue";
import { formControlKey } from "./form-control";

export function useInput() {
  const attrs = useAttrs();

  const formControl = inject(formControlKey, null);

  const id = computed(
    () => (attrs.id as string | undefined) ?? formControl?.id.value ?? useId(),
  );

  const disabled = computed(() => Boolean(attrs.disabled));

  return {
    attrs,
    id,
    disabled,
  };
}
