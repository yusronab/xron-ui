import type { HTMLAttributes } from "react";

import type { VariantProps } from "class-variance-authority";

import type { textVariants } from "../../variants/text";

export type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "small";

export interface TextProps
  extends
    HTMLAttributes<HTMLElement>,
    Omit<VariantProps<typeof textVariants>, "as"> {
  /**
   * HTML element to render.
   *
   * @default "p"
   */
  as?: TextElement;

  /**
   * Display a skeleton instead of the text.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Number of skeleton lines.
   *
   * @default 1
   */
  skeletonLines?: number;

  /**
   * Skeleton width.
   *
   * @default "100%"
   */
  skeletonWidth?: number | string;
}
