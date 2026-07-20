import {
  CSSProperties,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from "react";

type Props = Readonly<{
  open: boolean;
  triggerRef: RefObject<HTMLElement | null>;
}>;

export function useDropdownPosition({ open, triggerRef }: Props) {
  const [dropdownStyle, setDropdownStyle] = useState<CSSProperties>({});

  const updateDropdownPosition = useCallback(() => {
    if (!triggerRef.current) {
      return;
    }

    const rect = triggerRef.current.getBoundingClientRect();

    setDropdownStyle({
      position: "fixed",
      top: rect.bottom + 8,
      left: rect.left,
      width: rect.width,
      zIndex: 9999,
    });
  }, [triggerRef]);

  useEffect(() => {
    if (!open) {
      return;
    }

    updateDropdownPosition();

    window.addEventListener("resize", updateDropdownPosition);
    window.addEventListener("scroll", updateDropdownPosition, true);

    return () => {
      window.removeEventListener("resize", updateDropdownPosition);
      window.removeEventListener("scroll", updateDropdownPosition, true);
    };
  }, [open, updateDropdownPosition]);

  return {
    dropdownStyle,
    updateDropdownPosition,
  };
}
