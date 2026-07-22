import { createContext, useContext } from "react";

export interface FormControlContextValue {
  id: string;
  error?: boolean;
  required?: boolean;
}

export const FormControlContext = createContext<FormControlContextValue | null>(
  null,
);

export function useFormControl() {
  return useContext(FormControlContext);
}
