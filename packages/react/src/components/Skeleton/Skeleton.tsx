import { forwardRef } from "react";

import { cn } from "../../utils";
import { skeletonVariants } from "../../variants/skeleton";

import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      width = "100%",
      height = 16,
      lines = 1,
      radius,
      animation,
      style,
      ...props
    },
    ref,
  ) => {
    const renderLine = (key: number, lineWidth: number | string) => (
      <div
        key={key}
        className={cn(
          skeletonVariants({
            radius,
            animation,
          }),
        )}
        style={{
          width: lineWidth,
          height,
        }}
      />
    );

    if (lines > 1) {
      return (
        <div
          ref={ref}
          className={cn("flex flex-col gap-2", className)}
          style={style}
          {...props}
        >
          {Array.from({ length: lines }, (_, index) =>
            renderLine(index, index === lines - 1 ? "70%" : width),
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          skeletonVariants({
            radius,
            animation,
          }),
          className,
        )}
        style={{
          width,
          height,
          ...style,
        }}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
