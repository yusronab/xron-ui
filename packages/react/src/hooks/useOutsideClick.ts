import { RefObject, useEffect } from "react";

type Props = Readonly<{
  refs: RefObject<HTMLElement | null>[];
  onOutsideClick: () => void;
}>;

export function useOutsideClick({ refs, onOutsideClick }: Props) {
  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      const target = event.target as Node;

      const isInside = refs.some((ref) => ref.current?.contains(target));

      if (isInside) {
        return;
      }

      onOutsideClick();
    }

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [refs, onOutsideClick]);
}
