export interface InputFileProps {
  modelValue?: File | File[] | null;

  placeholder?: string;

  preview?: boolean;

  previewShape?: "square" | "circle";

  previewSize?: number;

  maxSize?: number;

  allowedTypes?: string[];

  size?: "sm" | "md" | "lg";

  rounded?: boolean;

  error?: boolean;
}
