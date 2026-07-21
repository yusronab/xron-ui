import type { InjectionKey, WritableComputedRef } from "vue";

export interface RadioGroupContext {
  modelValue: WritableComputedRef<string | number | boolean | undefined>;

  updateValue: (value: string | number | boolean) => void;
}

export const radioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol("RadioGroup");
