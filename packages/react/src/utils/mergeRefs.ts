import { Ref } from "react";

export const mergeRefs = <T>(...refs: Array<Ref<T> | undefined>) => {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (typeof ref === "function") {
        ref(value);
        return;
      }

      ref.current = value;
    });
  };
};
