import { createPortal } from "react-dom";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";

import { cn, getStringValue } from "../../utils";
import { autocompleteVariants } from "../../variants/autocomplete";

import { Spinner } from "../Spinner";
import { CloseIcon } from "../../icons";

import type { AutocompleteProps } from "./Autocomplete.types";

import {
  useDropdown,
  useDropdownPosition,
  useKeyboardNavigation,
  useOutsideClick,
} from "../../hooks";
import type { SelectOption as Option } from "../Select";
import { SelectOption } from "../Select/SelectOption";
import { useFormControl } from "../FormControl/FormControl.context";

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      className,
      size,
      rounded,
      error,
      value,
      options,
      loading,
      disabled,
      placeholder,
      labelKey,
      valueKey,
      loadingText = "Loading...",
      emptyText = "No data",
      clearable,
      debounce,
      clearIcon,
      clearIconClassName,
      onSearch,
      onChange,
      renderOption,
      ...props
    },
    ref,
  ) => {
    const formControl = useFormControl();

    const rootRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [keyword, setKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const { open, openDropdown, closeDropdown } = useDropdown({
      disabled,
    });

    function setRefs(node: HTMLInputElement | null) {
      inputRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }

    const filteredOptions = useMemo(() => {
      if (onSearch) return options;

      return options.filter((option) => {
        const label = getStringValue(option[labelKey]);

        return label.toLowerCase().includes(keyword.toLowerCase());
      });
    }, [keyword, options, labelKey, onSearch]);

    useEffect(() => {
      const selected = options.find(
        (option) => String(option[valueKey]) === String(value),
      );

      if (selected) {
        setKeyword(getStringValue(selected[labelKey]));
      } else if (value == null || value === "") {
        setKeyword("");
      }
    }, [value, options, labelKey, valueKey]);

    const { dropdownStyle } = useDropdownPosition({
      open,
      triggerRef: inputRef,
    });

    function handleSelect(option: Option) {
      setKeyword(getStringValue(option[labelKey]));

      onChange?.(option[valueKey] as string | number, option);

      closeDropdown();
    }

    const { activeIndex, optionRefs, handleKeyDown, setActiveIndex } =
      useKeyboardNavigation({
        open,
        options: filteredOptions,
        selectedIndex: -1,
        onSelect: handleSelect,
        onClose: closeDropdown,
      });

    useOutsideClick({
      refs: [rootRef, dropdownRef],
      onOutsideClick: closeDropdown,
    });

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
        <SelectOption
          key={getStringValue(option[valueKey])}
          option={option}
          labelKey={labelKey}
          selected={getStringValue(option[valueKey]) === String(value)}
          active={activeIndex === index}
          renderOption={renderOption}
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
            id={props.id ?? formControl?.id}
            value={keyword}
            placeholder={placeholder}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            onFocus={openDropdown}
            onChange={(e) => {
              setKeyword(e.target.value);
              setActiveIndex(-1);
              openDropdown();
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
                closeDropdown();
                onChange?.("", {});
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {clearIcon ?? (
                <CloseIcon
                  className={cn(
                    "h-4 w-4 text-gray-400 transition-colors",
                    clearIconClassName,
                  )}
                />
              )}
            </button>
          )}
        </div>

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

Autocomplete.displayName = "Autocomplete";
