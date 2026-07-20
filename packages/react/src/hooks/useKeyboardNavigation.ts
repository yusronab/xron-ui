import { useCallback, useEffect, useRef, useState } from "react";

type Props<T> = Readonly<{
  open: boolean;
  options: T[];
  selectedIndex: number;
  onSelect: (option: T) => void;
  onClose: () => void;
}>;

export function useKeyboardNavigation<T>({
  open,
  options,
  selectedIndex,
  onSelect,
  onClose,
}: Props<T>) {
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (!open) {
        if (
          event.key === "ArrowDown" ||
          event.key === "ArrowUp" ||
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
        }

        return;
      }

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();

          setActiveIndex((prev) => Math.min(prev + 1, options.length - 1));
          break;

        case "ArrowUp":
          event.preventDefault();

          setActiveIndex((prev) => Math.max(prev - 1, 0));
          break;

        case "Enter":
          event.preventDefault();

          if (activeIndex >= 0) {
            onSelect(options[activeIndex]);
          }

          break;

        case "Escape":
          event.preventDefault();
          onClose();
          break;
      }
    },
    [activeIndex, onClose, onSelect, open, options],
  );

  useEffect(() => {
    if (!open) {
      setActiveIndex(-1);
      return;
    }

    setActiveIndex(Math.max(selectedIndex, 0));
  }, [open, selectedIndex]);

  useEffect(() => {
    if (activeIndex < 0) {
      return;
    }

    optionRefs.current[activeIndex]?.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, open]);

  return {
    activeIndex,
    optionRefs,
    handleKeyDown,
    setActiveIndex,
  };
}
