import { createPortal } from "react-dom";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";

import { cn } from "../../utils";
import { selectVariants } from "../../variants/select";
import type { SelectOption as Option, SelectProps } from "./Select.types";

import { Spinner } from "../Spinner";
import { SelectOption } from "./SelectOption";
import { ChevronDownIcon } from "../../icons";

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      size,
      rounded,
      error,
      value,
      options,
      labelKey,
      valueKey,
      placeholder = "Select...",
      loading,
      loadingText = "Loading...",
      emptyText = "No data",
      disabled,
      onChange,
      ...props
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const [open, setOpen] = useState(false);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

    const selectedOption = useMemo(() => {
      return options.find((item) => String(item[valueKey]) === String(value));
    }, [options, value, valueKey]);

    const selectedText = selectedOption
      ? String(selectedOption[labelKey])
      : placeholder;

    useEffect(() => {
      function handleOutside(event: MouseEvent) {
        if (
          rootRef.current &&
          !rootRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      }

      document.addEventListener("mousedown", handleOutside);

      return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    function handleSelect(option: Option) {
      onChange?.(option[valueKey] as string | number, option);

      setOpen(false);
    }

    function setRefs(node: HTMLButtonElement | null) {
      triggerRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }

    function updateDropdownPosition() {
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
    }

    useEffect(() => {
      if (!open) return;

      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          setOpen(false);
        }
      }

      updateDropdownPosition();

      window.addEventListener("resize", updateDropdownPosition);
      window.addEventListener("scroll", updateDropdownPosition, true);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("resize", updateDropdownPosition);
        window.removeEventListener("scroll", updateDropdownPosition, true);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [open]);

    function toggle() {
      if (disabled) return;

      setOpen((prev) => !prev);
    }

    const dropdownContent = (() => {
      if (loading) {
        return (
          <div className="flex items-center justify-center gap-2 p-3 text-sm">
            <Spinner size="sm" />
            {loadingText}
          </div>
        );
      }

      if (options.length === 0) {
        return (
          <div className="p-3 text-center text-sm text-muted-foreground">
            {emptyText}
          </div>
        );
      }

      return options.map((option) => (
        <SelectOption
          key={String(option[valueKey])}
          option={option}
          labelKey={labelKey}
          selected={String(option[valueKey]) === String(value)}
          onSelect={handleSelect}
        />
      ));
    })();

    return (
      <div ref={rootRef} className="relative w-full">
        <button
          ref={setRefs}
          type="button"
          disabled={disabled}
          onClick={toggle}
          className={cn(
            selectVariants({
              size,
              rounded,
              error,
            }),
            className,
          )}
          {...props}
        >
          <span className="truncate">{selectedText}</span>

          <ChevronDownIcon
            className={cn("transition-transform", open && "rotate-180")}
          />
        </button>

        {open &&
          createPortal(
            <div
              style={dropdownStyle}
              className={cn(
                "max-h-64 overflow-auto border bg-white shadow-md",
                "dark:border-gray-700",
                "dark:bg-gray-900",
                rounded ? "rounded-2xl" : "rounded-md",
              )}
            >
              {dropdownContent}
            </div>,
            document.body,
          )}
      </div>
    );
  },
);

Select.displayName = "Select";
