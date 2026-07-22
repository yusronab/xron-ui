import { useMemo, useState } from "react";

import { cn } from "../../utils";
import { avatarVariants } from "../../variants/avatar";

import { AvatarIcon } from "../../icons";

import { Skeleton } from "../Skeleton";

import type { AvatarProps } from "./Avatar.types";

const iconSizes = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
} as const;

export function Avatar({
  className,
  src,
  alt,
  name,
  size,
  rounded,
  loading = false,
  onError,
  ...props
}: Readonly<AvatarProps>) {
  const [imageError, setImageError] = useState(false);

  const initials = useMemo(() => {
    if (!name) {
      return "";
    }

    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  }, [name]);

  const classes = cn(
    avatarVariants({
      size,
      rounded,
    }),
    className,
  );

  if (loading) {
    return <Skeleton className={classes} radius={rounded ? "full" : "md"} />;
  }

  let content: React.ReactNode;

  if (src && !imageError) {
    content = (
      <img
        src={src}
        alt={alt ?? name}
        className="h-full w-full object-cover"
        onError={(event) => {
          setImageError(true);
          onError?.(event);
        }}
        {...props}
      />
    );
  } else if (initials) {
    content = <span className="font-medium">{initials}</span>;
  } else {
    content = <AvatarIcon className={iconSizes[size ?? "md"]} />;
  }

  return <div className={classes}>{content}</div>;
}
