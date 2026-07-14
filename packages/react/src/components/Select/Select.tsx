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
    const dropdownRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

    const selectedOption = useMemo(() => {
      return options.find((item) => String(item[valueKey]) === String(value));
    }, [options, value, valueKey]);

    const selectedText = selectedOption
      ? String(selectedOption[labelKey])
      : placeholder;

    useEffect(() => {
      function handleOutside(event: MouseEvent) {
        const target = event.target as Node;

        if (
          rootRef.current?.contains(target) ||
          dropdownRef.current?.contains(target)
        ) {
          return;
        }

        setOpen(false);
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

    function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
      if (!open) {
        if (
          event.key === "ArrowDown" ||
          event.key === "ArrowUp" ||
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          setOpen(true);
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
            handleSelect(options[activeIndex]);
          }

          break;

        case "Escape":
          event.preventDefault();
          setOpen(false);
          break;
      }
    }

    useEffect(() => {
      if (!open) {
        setActiveIndex(-1);
        return;
      }

      const selectedIndex = options.findIndex(
        (option) => String(option[valueKey]) === String(value),
      );

      setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }, [open, options, value, valueKey]);

    useEffect(() => {
      if (!open) return;

      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          setOpen(false);
        }
      }

      setActiveIndex(-1);
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

    useEffect(() => {
      if (activeIndex < 0) return;

      optionRefs.current[activeIndex]?.scrollIntoView({
        block: "nearest",
      });
    }, [activeIndex]);

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

      return options.map((option, index) => (
        <SelectOption
          key={String(option[valueKey])}
          option={option}
          labelKey={labelKey}
          selected={String(option[valueKey]) === String(value)}
          onSelect={handleSelect}
          active={index === activeIndex}
          optionRef={(node) => {
            optionRefs.current[index] = node;
          }}
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
          onKeyDown={handleKeyDown}
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
              ref={dropdownRef}
              style={dropdownStyle}
              className={cn(
                "max-h-64 overflow-auto border bg-white shadow-md",
                "dark:border-gray-700",
                "dark:bg-gray-900",
                "text-gray-900",
                "dark:text-gray-100",
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
