import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface MinusIconProps extends SVGProps<SVGSVGElement> {}

export const MinusIcon = forwardRef<SVGSVGElement, MinusIconProps>(
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
        <path d="M5 12h14" />
      </svg>
    );
  },
);

MinusIcon.displayName = "MinusIcon";
