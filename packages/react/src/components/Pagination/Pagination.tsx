import { cn } from "../../utils";

import { paginationItemVariants } from "../../variants/pagination";

import { DOTS, getPaginationRange } from "./Pagination.utils";

import type { PaginationProps } from "./Pagination.types";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "../../icons";
import { forwardRef } from "react";

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      pageSize,
      total,
      siblingCount = 1,
      size,
      rounded,
      className,
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

    const paginationItemClass = paginationItemVariants({
      size,
      rounded,
    });

    return (
      <nav
        ref={ref}
        className={cn("flex items-center justify-center gap-2", className)}
        aria-label="Pagination"
      >
        <button
          type="button"
          aria-label="Go to first page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
          className={paginationItemClass}
        >
          <ChevronsLeftIcon />
        </button>

        <button
          type="button"
          aria-label="Go to previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={paginationItemClass}
        >
          <ChevronLeftIcon />
        </button>

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
            <button
              key={item}
              aria-label={`Page ${item}`}
              aria-current={currentPage === item ? "page" : undefined}
              type="button"
              onClick={() => onPageChange(item)}
              className={paginationItemVariants({
                size,
                rounded,
                active: currentPage === item,
              })}
            >
              {item}
            </button>
          );
        })}

        <button
          type="button"
          aria-label="Go to next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={paginationItemClass}
        >
          <ChevronRightIcon />
        </button>

        <button
          type="button"
          aria-label="Go to last page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
          className={paginationItemClass}
        >
          <ChevronsRightIcon />
        </button>
      </nav>
    );
  },
);
