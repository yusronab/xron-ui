import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface ChevronRightIconProps extends SVGProps<SVGSVGElement> {}

export const ChevronRightIcon = forwardRef<
  SVGSVGElement,
  ChevronRightIconProps
>(({ className, ...props }, ref) => {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
});

ChevronRightIcon.displayName = "ChevronRightIcon";
