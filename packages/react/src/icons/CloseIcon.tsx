import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface CloseIconProps extends SVGProps<SVGSVGElement> {}

export const CloseIcon = forwardRef<SVGSVGElement, CloseIconProps>(
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  },
);

CloseIcon.displayName = "CloseIcon";
