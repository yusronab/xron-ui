import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface ChevronsRightIconProps extends SVGProps<SVGSVGElement> {}

export const ChevronsRightIcon = forwardRef<
  SVGSVGElement,
  ChevronsRightIconProps
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
      <path d="m13 17 5-5-5-5" />
      <path d="m6 17 5-5-5-5" />
    </svg>
  );
});

ChevronsRightIcon.displayName = "ChevronsRightIcon";
