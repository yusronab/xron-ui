import { forwardRef } from "react";

import { cn } from "../utils";

import type { SVGProps } from "react";

export interface AvatarIconProps extends SVGProps<SVGSVGElement> {}

export const AvatarIcon = forwardRef<SVGSVGElement, AvatarIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-5 w-5", className)}
        aria-hidden="true"
        {...props}
      >
        <circle cx="12" cy="8" r="4" />

        <path d="M4 20a8 8 0 0 1 16 0" />
      </svg>
    );
  },
);

AvatarIcon.displayName = "AvatarIcon";
