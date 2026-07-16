import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface ChevronUpIconProps extends SVGProps<SVGSVGElement> {}

export const ChevronUpIcon = forwardRef<SVGSVGElement, ChevronUpIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-4 w-4", className)}
        aria-hidden="true"
        {...props}
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    );
  },
);

ChevronUpIcon.displayName = "ChevronUpIcon";
