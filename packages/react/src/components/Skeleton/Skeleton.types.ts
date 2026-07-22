import type { HTMLAttributes } from "react";

export interface SkeletonProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  width?: number | string;

  height?: number | string;

  lines?: number;

  radius?: "none" | "sm" | "md" | "lg" | "full";

  animation?: "pulse" | "wave" | "none";
}
