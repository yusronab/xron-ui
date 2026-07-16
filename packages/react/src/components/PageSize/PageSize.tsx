import { forwardRef } from "react";

import { Select } from "../Select";

import type { PageSizeProps } from "./PageSize.types";

const defaultOptions = [
  {
    label: "10",
    value: 10,
  },
  {
    label: "20",
    value: 20,
  },
  {
    label: "50",
    value: 50,
  },
  {
    label: "100",
    value: 100,
  },
];

export const PageSize = forwardRef<HTMLButtonElement, PageSizeProps>(
  (
    {
      value,
      options = defaultOptions,
      prefix,
      suffix,
      onChange,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="flex items-center gap-2">
        {prefix}

        <Select
          ref={ref}
          className={className}
          value={value}
          options={options}
          labelKey="label"
          valueKey="value"
          onChange={(value) => onChange?.(Number(value))}
          {...props}
        />

        {suffix}
      </div>
    );
  },
);

PageSize.displayName = "PageSize";
