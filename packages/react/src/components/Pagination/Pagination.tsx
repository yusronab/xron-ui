import { cn } from "../../utils";

import { DOTS, getPaginationRange } from "./Pagination.utils";

import type { PaginationProps } from "./Pagination.types";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "../../icons";
import { forwardRef } from "react";
import { Button } from "../Button";

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      pageSize,
      total,
      siblingCount = 1,
      className,
      buttonVariant = "primary",
      buttonSize = "md",
      buttonRounded = false,
      onPageChange,
    },
    ref,
  ) => {
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    const currentPage = Math.min(Math.max(page, 1), totalPages);

    const pages = getPaginationRange({
      total,
      page: currentPage,
      pageSize,
      siblingCount,
    });

    return (
      <nav
        ref={ref}
        className={cn("flex items-center justify-center gap-2", className)}
        aria-label="Pagination"
      >
        <Button
          variant={buttonVariant}
          size={buttonSize}
          rounded={buttonRounded}
          aria-label="Go to first page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          <ChevronsLeftIcon />
        </Button>

        <Button
          variant={buttonVariant}
          size={buttonSize}
          rounded={buttonRounded}
          aria-label="Go to previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeftIcon />
        </Button>

        {pages.map((item, index) => {
          if (item === DOTS) {
            return (
              <span
                key={`${item}-${index}`}
                aria-hidden="true"
                className="px-2 text-gray-500"
              >
                ...
              </span>
            );
          }

          return (
            <Button
              key={item}
              aria-label={`Page ${item}`}
              aria-current={currentPage === item ? "page" : undefined}
              variant={buttonVariant}
              size={buttonSize}
              rounded={buttonRounded}
              appearance={currentPage === item ? "solid" : "outline"}
              onClick={() => onPageChange(item)}
            >
              {item}
            </Button>
          );
        })}

        <Button
          variant={buttonVariant}
          size={buttonSize}
          rounded={buttonRounded}
          aria-label="Go to next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRightIcon />
        </Button>

        <Button
          variant={buttonVariant}
          size={buttonSize}
          rounded={buttonRounded}
          aria-label="Go to last page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <ChevronsRightIcon />
        </Button>
      </nav>
    );
  },
);
