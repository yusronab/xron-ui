import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface CheckIconProps extends SVGProps<SVGSVGElement> {}

export const CheckIcon = forwardRef<SVGSVGElement, CheckIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-3.5 w-3.5", className)}
        aria-hidden="true"
        {...props}
      >
        <path d="m5 13 4 4L19 7" />
      </svg>
    );
  },
);

CheckIcon.displayName = "CheckIcon";
