import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import { cn } from "../../utils";
import { modalVariants } from "../../variants/modal";

import type { ModalProps } from "./Modal.types";

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      open,
      onClose,
      children,
      className,
      size,
      closeOnEscape = true,
      closeOnOverlayClick = true,
      ...props
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => dialogRef.current as HTMLDialogElement);

    useEffect(() => {
      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const previousOverflow = document.body.style.overflow;

      const handlePointerDown = (event: PointerEvent) => {
        if (!closeOnOverlayClick) {
          return;
        }

        if (event.target === dialog) {
          onClose?.();
        }
      };

      if (open) {
        if (!dialog.open) {
          dialog.showModal();
        }

        document.body.style.overflow = "hidden";

        dialog.addEventListener("pointerdown", handlePointerDown);
      } else if (dialog.open) {
        dialog.close();
      }

      return () => {
        document.body.style.overflow = previousOverflow;

        dialog.removeEventListener("pointerdown", handlePointerDown);
      };
    }, [open, onClose, closeOnOverlayClick]);

    if (!open) {
      return null;
    }

    return createPortal(
      <dialog
        ref={dialogRef}
        className={cn(
          modalVariants({ size }),
          [
            "fixed",
            "left-1/2",
            "top-1/2",
            "-translate-x-1/2",
            "-translate-y-1/2",
            "m-0",
            "max-h-[calc(100vh-2rem)]",
            "overflow-auto",
            "p-4",
            "backdrop:bg-black/50",
            "backdrop:backdrop-blur-xs",
          ],
          className,
        )}
        onCancel={(event) => {
          if (!closeOnEscape) {
            event.preventDefault();
            return;
          }

          event.preventDefault();
          onClose?.();
        }}
        onClose={onClose}
        {...props}
      >
        {children}
      </dialog>,
      document.body,
    );
  },
);

Modal.displayName = "Modal";
