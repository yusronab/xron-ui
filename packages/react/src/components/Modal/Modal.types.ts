import type { DialogHTMLAttributes, ReactNode } from "react";

import type { VariantProps } from "class-variance-authority";

import { modalVariants } from "../../variants/modal";

export interface ModalProps
  extends
    DialogHTMLAttributes<HTMLDialogElement>,
    VariantProps<typeof modalVariants> {
  open: boolean;

  onClose?: () => void;

  children: ReactNode;

  closeOnEscape?: boolean;

  closeOnOverlayClick?: boolean;
}
