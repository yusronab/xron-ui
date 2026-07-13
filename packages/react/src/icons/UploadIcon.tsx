import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface UploadIconProps extends SVGProps<SVGSVGElement> {}

export const UploadIcon = forwardRef<SVGSVGElement, UploadIconProps>(
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
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 20h14" />
      </svg>
    );
  },
);

UploadIcon.displayName = UploadIcon.name;
