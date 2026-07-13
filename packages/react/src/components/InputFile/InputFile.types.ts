import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { inputVariants } from "../../variants/input";

type FileValue = File | File[] | null;

export interface InputFileProps
  extends
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "type" | "size" | "value" | "onChange"
    >,
    VariantProps<typeof inputVariants> {
  value?: FileValue;

  placeholder?: string;

  preview?: boolean;

  previewShape?: "square" | "circle";

  previewSize?: number;

  maxSize?: number;

  allowedTypes?: string[];

  renderFileName?: (files: File[]) => React.ReactNode;

  renderPreview?: (files: File[]) => React.ReactNode;

  renderIcon?: () => React.ReactNode;

  renderClearButton?: (clear: () => void) => React.ReactNode;

  onValidationError?: (message: string) => void;

  onChange?: (file: File | File[] | null) => void;
}
