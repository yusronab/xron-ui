import { createPortal } from "react-dom";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";

import { cn, getStringValue } from "../../utils";
import { autocompleteVariants } from "../../variants/autocomplete";

import { Spinner } from "../Spinner";
import { AutocompleteOption } from "./AutocompleteOption";
import { CloseIcon } from "../../icons";

import type {
  AutocompleteOption as Option,
  AutocompleteProps,
} from "./Autocomplete.types";

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
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
      loading,
      loadingText = "Loading...",
      emptyText = "No data",
      disabled,
      placeholder,
      clearable,
      debounce,
      onSearch,
      onChange,
      ...props
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const [open, setOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

    function setRefs(node: HTMLInputElement | null) {
      inputRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }

    const filteredOptions = useMemo(() => {
      if (onSearch) {
        return options;
      }

      return options.filter((option) => {
        const label = getStringValue(option[labelKey]);

        return label.toLowerCase().includes(keyword.toLowerCase());
      });
    }, [keyword, options, labelKey, onSearch]);

    function updateDropdownPosition() {
      if (!inputRef.current) {
        return;
      }

      const rect = inputRef.current.getBoundingClientRect();

      setDropdownStyle({
        position: "fixed",
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }

    function handleSelect(option: Option) {
      setKeyword(getStringValue(option[labelKey]));

      onChange?.(option[valueKey] as string | number, option);

      setOpen(false);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      if (!open) {
        return;
      }

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();

          setActiveIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0,
          );

          break;

        case "ArrowUp":
          event.preventDefault();

          setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1,
          );

          break;

        case "Enter":
          event.preventDefault();

          if (activeIndex >= 0) {
            handleSelect(filteredOptions[activeIndex]);
          }

          break;

        case "Escape":
          setOpen(false);
          break;
      }
    }

    useEffect(() => {
      function outside(event: MouseEvent) {
        if (
          rootRef.current &&
          !rootRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      }

      document.addEventListener("mousedown", outside);

      return () => document.removeEventListener("mousedown", outside);
    }, []);

    useEffect(() => {
      if (!open) {
        return;
      }

      setActiveIndex(-1);
      updateDropdownPosition();

      window.addEventListener("resize", updateDropdownPosition);
      window.addEventListener("scroll", updateDropdownPosition, true);

      return () => {
        window.removeEventListener("resize", updateDropdownPosition);
        window.removeEventListener("scroll", updateDropdownPosition, true);
      };
    }, [open]);

    useEffect(() => {
      if (activeIndex < 0) {
        return;
      }

      optionRefs.current[activeIndex]?.scrollIntoView({
        block: "nearest",
      });
    }, [activeIndex]);

    useEffect(() => {
      const timer = window.setTimeout(() => {
        setSearchKeyword(keyword);
      }, debounce ?? 300);

      return () => window.clearTimeout(timer);
    }, [keyword, debounce]);

    useEffect(() => {
      onSearch?.(searchKeyword);
    }, [searchKeyword, onSearch]);

    const dropdownContent = (() => {
      if (loading) {
        return (
          <div className="flex items-center justify-center gap-2 p-3 text-sm">
            <Spinner size="sm" />
            {loadingText}
          </div>
        );
      }

      if (filteredOptions.length === 0) {
        return (
          <div className="p-3 text-center text-sm text-gray-500">
            {emptyText}
          </div>
        );
      }

      return filteredOptions.map((option, index) => (
        <AutocompleteOption
          key={getStringValue(option[valueKey])}
          option={option}
          labelKey={labelKey}
          selected={getStringValue(option[valueKey]) === String(value)}
          active={activeIndex === index}
          optionRef={(node) => {
            optionRefs.current[index] = node;
          }}
          onSelect={handleSelect}
        />
      ));
    })();

    return (
      <div ref={rootRef}>
        <div className="relative">
          <input
            ref={setRefs}
            value={keyword}
            placeholder={placeholder}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            onFocus={() => setOpen(true)}
            onChange={(e) => {
              setKeyword(e.target.value);
              setActiveIndex(-1);
              setOpen(true);
            }}
            className={cn(
              autocompleteVariants({
                size,
                rounded,
                error,
              }),
              clearable && "pr-10",
              className,
            )}
            {...props}
          />
          {clearable && keyword && (
            <button
              type="button"
              onClick={() => {
                setKeyword("");
                setOpen(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <CloseIcon />
            </button>
          )}
        </div>

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

Autocomplete.displayName = "Autocomplete";
