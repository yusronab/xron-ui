import type { ImgHTMLAttributes } from "react";

import type { VariantProps } from "class-variance-authority";

import type { avatarVariants } from "../../variants/avatar";

export interface AvatarProps
  extends
    Omit<ImgHTMLAttributes<HTMLImageElement>, "size" | "loading">,
    VariantProps<typeof avatarVariants> {
  src?: string;

  alt?: string;

  name?: string;

  loading?: boolean;
}
