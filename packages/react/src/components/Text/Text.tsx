import { cn } from "../../utils";
import { textVariants } from "../../variants/text";

import { Skeleton } from "../Skeleton";

import type { TextProps } from "./Text.types";

export function Text({
  as = "p",
  className,
  align,
  truncate,
  italic,
  underline,
  loading = false,
  skeletonLines = 1,
  skeletonWidth = "100%",
  children,
  ...props
}: Readonly<TextProps>) {
  if (loading) {
    return <Skeleton lines={skeletonLines} width={skeletonWidth} />;
  }

  const Component = as;

  return (
    <Component
      className={cn(
        textVariants({
          as,
          align,
          truncate,
          italic,
          underline,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Text.displayName = "Text";
