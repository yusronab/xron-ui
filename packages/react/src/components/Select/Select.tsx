import { createPortal } from "react-dom";
import { forwardRef, useMemo, useRef } from "react";

import { cn } from "../../utils";
import { selectVariants } from "../../variants/select";
import type { SelectOption as Option, SelectProps } from "./Select.types";

import { Spinner } from "../Spinner";
import { SelectOption } from "./SelectOption";
import { ChevronDownIcon, CloseIcon } from "../../icons";

import {
  useDropdown,
  useDropdownPosition,
  useKeyboardNavigation,
  useOutsideClick,
} from "../../hooks";
import { useFormControl } from "../FormControl/FormControl.context";

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
      clearable,
      clearIcon,
      clearIconClassName,
      renderValue,
      renderOption,
      onChange,
      ...props
    },
    ref,
  ) => {
    const formControl = useFormControl();

    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { open, closeDropdown, toggleDropdown } = useDropdown({
      disabled,
    });

    const selectedOption = useMemo(() => {
      return options.find((item) => String(item[valueKey]) === String(value));
    }, [options, value, valueKey]);

    const selectedIndex = useMemo(() => {
      return options.findIndex(
        (option) => String(option[valueKey]) === String(value),
      );
    }, [options, value, valueKey]);

    const selectedText = (() => {
      if (!selectedOption) {
        return placeholder;
      }

      if (renderValue) {
        return renderValue(selectedOption);
      }

      return String(selectedOption[labelKey]);
    })();

    function handleSelect(option: Option) {
      onChange?.(option[valueKey] as string | number, option);

      closeDropdown();
    }

    useOutsideClick({
      refs: [rootRef, dropdownRef],
      onOutsideClick: closeDropdown,
    });

    const { dropdownStyle } = useDropdownPosition({
      open,
      triggerRef,
    });

    const { activeIndex, optionRefs, handleKeyDown } = useKeyboardNavigation({
      open,
      options,
      selectedIndex,
      onSelect: handleSelect,
      onClose: closeDropdown,
    });

    function setRefs(node: HTMLButtonElement | null) {
      triggerRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }

    const showClear =
      clearable &&
      !disabled &&
      !loading &&
      value !== undefined &&
      value !== null &&
      value !== "";

    function handleClear(e: React.MouseEvent) {
      e.preventDefault();
      e.stopPropagation();

      onChange?.(undefined);

      closeDropdown();
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
          renderOption={renderOption}
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
          id={props.id ?? formControl?.id}
          type="button"
          disabled={disabled}
          onClick={toggleDropdown}
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
          <span className="truncate flex-1 text-left">{selectedText}</span>

          <div className="flex items-center gap-2">
            {showClear && (
              <button
                type="button"
                tabIndex={-1}
                onClick={handleClear}
                aria-label="Clear selection"
                className="flex items-center justify-center"
              >
                {clearIcon ?? (
                  <CloseIcon
                    className={cn(
                      "h-4 w-4 text-gray-400 hover:text-gray-600",
                      clearIconClassName,
                    )}
                  />
                )}
              </button>
            )}

            <ChevronDownIcon
              className={cn("transition-transform", open && "rotate-180")}
            />
          </div>
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
