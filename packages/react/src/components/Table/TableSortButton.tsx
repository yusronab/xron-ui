import { forwardRef } from "react";

import { cn } from "../../utils";

import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "../../icons";

import type { SortDirection } from "./Table.types";
import type { ButtonHTMLAttributes, ForwardedRef, ReactNode } from "react";

interface TableSortButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;

  direction?: SortDirection;

  children: ReactNode;
}

function TableSortButtonComponent(
  {
    active,
    direction,
    children,
    className,
    ...props
  }: Readonly<TableSortButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  function renderIcon() {
    if (!active || direction == null) {
      return <ChevronsUpDownIcon />;
    }

    if (direction === "asc") {
      return <ChevronUpIcon />;
    }

    return <ChevronDownIcon />;
  }

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex items-center gap-2",
        "font-semibold",
        "transition-colors",
        "hover:text-blue-600",
        "focus:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-blue-500/30",
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      {renderIcon()}
    </button>
  );
}

TableSortButtonComponent.displayName = "TableSortButton";

export const TableSortButton = forwardRef(TableSortButtonComponent);
