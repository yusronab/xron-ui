import { forwardRef, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

import { MultiSelectProps } from "./MultiSelect.types";
import {
  useDropdown,
  useDropdownPosition,
  useKeyboardNavigation,
  useOutsideClick,
} from "../../hooks";

import { cn, getStringValue } from "../../utils";
import { selectVariants } from "../../variants/select";

import { Spinner } from "../Spinner";
import { SelectOption } from "../Select/SelectOption";
import { ChevronDownIcon } from "../../icons";
import { Checkbox, CheckboxIndicator } from "../Checkbox";
import type { SelectOption as Option } from "../Select";
import { useFormControl } from "../FormControl/FormControl.context";

export const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      className,
      size,
      rounded,
      error,
      values = [],
      options,
      labelKey,
      valueKey,
      placeholder = "Select...",
      loading,
      loadingText = "Loading...",
      emptyText = "No data",
      disabled,
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

    const selectedOptions = useMemo(() => {
      return options.filter((item) =>
        values.some(
          (value) => getStringValue(item[valueKey]) === String(value),
        ),
      );
    }, [options, values, valueKey]);

    const selectedIndex = useMemo(() => {
      return options.findIndex((item) =>
        values.some(
          (value) => getStringValue(item[valueKey]) === String(value),
        ),
      );
    }, [options, values, valueKey]);

    const selectedText = (() => {
      if (selectedOptions.length === 0) {
        return placeholder;
      }

      if (renderValue) {
        return renderValue(selectedOptions);
      }

      return selectedOptions
        .map((option) => getStringValue(option[labelKey]))
        .join(", ");
    })();

    function handleSelect(option: Option) {
      const optionValue = option[valueKey] as string | number;

      const exists = values.some(
        (value) => String(value) === String(optionValue),
      );

      const nextValues = exists
        ? values.filter((value) => String(value) !== String(optionValue))
        : [...values, optionValue];

      const nextOptions = options.filter((item) =>
        nextValues.some(
          (value) => getStringValue(item[valueKey]) === String(value),
        ),
      );

      onChange?.(nextValues, nextOptions);
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

    const allSelected = options.length > 0 && values.length === options.length;

    const indeterminate = values.length > 0 && values.length < options.length;

    function handleSelectAll(checked: boolean) {
      if (checked) {
        const nextValues = options.map(
          (option) => option[valueKey] as string | number,
        );

        onChange?.(nextValues, options);

        return;
      }

      onChange?.([], []);
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

      return (
        <>
          <div className="border-b p-2">
            <Checkbox
              label="Select All"
              checked={allSelected}
              indeterminate={indeterminate}
              onCheckedChange={handleSelectAll}
            />
          </div>

          {options.map((option, index) => {
            const selected = values.some(
              (value) => String(value) === getStringValue(option[valueKey]),
            );

            return (
              <SelectOption
                key={getStringValue(option[valueKey])}
                option={option}
                labelKey={labelKey}
                selected={selected}
                active={index === activeIndex}
                onSelect={handleSelect}
                optionRef={(node) => {
                  optionRefs.current[index] = node;
                }}
                renderOption={(option, state) => (
                  <div className="flex items-center gap-3">
                    <CheckboxIndicator checked={state.selected} />

                    <div className="min-w-0 flex-1">
                      {renderOption
                        ? renderOption(option, state)
                        : String(option[labelKey])}
                    </div>
                  </div>
                )}
              />
            );
          })}
        </>
      );
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

MultiSelect.displayName = "MultiSelect";
