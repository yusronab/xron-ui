import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface ChevronsLeftIconProps extends SVGProps<SVGSVGElement> {}

export const ChevronsLeftIcon = forwardRef<
  SVGSVGElement,
  ChevronsLeftIconProps
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
      <path d="m11 17-5-5 5-5" />
      <path d="m18 17-5-5 5-5" />
    </svg>
  );
});

ChevronsLeftIcon.displayName = "ChevronsLeftIcon";
