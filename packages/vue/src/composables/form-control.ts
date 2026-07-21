import type { InjectionKey, ComputedRef } from "vue";

export interface FormControlContext {
  id: ComputedRef<string>;
}

export const formControlKey: InjectionKey<FormControlContext> =
  Symbol("FormControl");
