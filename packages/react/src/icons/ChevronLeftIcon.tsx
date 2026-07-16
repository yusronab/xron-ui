import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface ChevronLeftIconProps extends SVGProps<SVGSVGElement> {}

export const ChevronLeftIcon = forwardRef<SVGSVGElement, ChevronLeftIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-4 w-4", className)}
        {...props}
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    );
  },
);

ChevronLeftIcon.displayName = "ChevronLeftIcon";
