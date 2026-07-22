import { forwardRef, useEffect, useMemo, useRef, useState } from "react";

import { CloseIcon, UploadIcon } from "../../icons";
import { cn, normalizeFiles } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputFileProps } from "./InputFile.types";
import { useFormControl } from "../FormControl/FormControl.context";

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  (
    {
      className,
      size,
      rounded,
      error,
      disabled,
      value,
      placeholder = "Choose file...",
      accept,
      multiple,
      preview = false,
      previewShape = "square",
      previewSize = 120,
      maxSize,
      allowedTypes,
      onValidationError,
      onChange,
      renderClearButton,
      renderFileName,
      renderIcon,
      renderPreview,
      ...props
    },
    ref,
  ) => {
    const formControl = useFormControl();

    const inputRef = useRef<HTMLInputElement>(null);

    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [dragging, setDragging] = useState(false);

    function validate(file: File): boolean {
      if (maxSize && file.size > maxSize) {
        onValidationError?.(
          `Maximum file size is ${Math.round(maxSize / 1024 / 1024)} MB`,
        );

        return false;
      }

      if (allowedTypes && !allowedTypes.includes(file.type)) {
        onValidationError?.("Invalid file type");

        return false;
      }

      return true;
    }

    function setRefs(node: HTMLInputElement | null) {
      inputRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }

    function openFilePicker() {
      if (disabled) {
        return;
      }

      inputRef.current?.click();
    }

    function handleFiles(files: FileList) {
      const validFiles = normalizeFiles(files).filter(validate);

      if (multiple) {
        onChange?.(validFiles);

        return;
      }

      onChange?.(validFiles[0] ?? null);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const files = event.target.files;

      if (!files) {
        onChange?.(null);

        return;
      }

      handleFiles(files);
    }

    function handleClear() {
      onChange?.(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }

      setPreviewUrls([]);
    }

    function handleDragOver(event: React.DragEvent<HTMLButtonElement>) {
      event.preventDefault();
      event.stopPropagation();

      if (!disabled) {
        setDragging(true);
      }
    }

    function handleDragLeave(_event: React.DragEvent<HTMLButtonElement>) {
      setDragging(false);
    }

    function handleDrop(event: React.DragEvent<HTMLButtonElement>) {
      event.preventDefault();
      event.stopPropagation();

      setDragging(false);

      if (disabled) {
        return;
      }

      const files = event.dataTransfer.files;

      if (!files.length) {
        return;
      }

      handleFiles(files);
    }

    const files = useMemo(() => {
      if (!value) {
        return [];
      }

      return Array.isArray(value) ? value : [value];
    }, [value]);

    const previewFiles = useMemo(() => {
      return files.filter((file) => file.type.startsWith("image/"));
    }, [files]);

    const fileName = useMemo(() => {
      if (files.length === 0) {
        return placeholder;
      }

      if (files.length === 1) {
        return files[0].name;
      }

      return `${files.length} files selected`;
    }, [files, placeholder]);

    useEffect(() => {
      if (previewFiles.length === 0) {
        setPreviewUrls([]);

        return;
      }

      const urls = previewFiles.map((file) => URL.createObjectURL(file));

      setPreviewUrls(urls);

      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    }, [previewFiles]);

    const displayFileName = (() => {
      if (renderFileName) {
        return renderFileName(files);
      }

      if (dragging) {
        return "Drop files here...";
      }

      return fileName;
    })();

    return (
      <div className="w-full">
        <input
          ref={setRefs}
          id={props.id ?? formControl?.id}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />

        <div className="relative w-full">
          <button
            type="button"
            onClick={openFilePicker}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            disabled={disabled}
            className={cn(
              inputVariants({
                size,
                rounded,
                error,
              }),
              "flex w-full items-center justify-between",
              dragging && "border-blue-500 bg-blue-50",
              className,
            )}
          >
            <span className="truncate text-left">{displayFileName}</span>

            {renderIcon ? (
              renderIcon()
            ) : (
              <UploadIcon className="shrink-0 text-gray-500" />
            )}
          </button>

          {value &&
            (renderClearButton ? (
              renderClearButton(handleClear)
            ) : (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClear();
                }}
                className="absolute right-10 top-1/2 cursor-pointer -translate-y-1/2 text-gray-400 hover:text-red-500"
                aria-label="Clear file"
              >
                <CloseIcon />
              </button>
            ))}
        </div>

        {preview &&
          previewFiles.length > 0 &&
          (renderPreview ? (
            renderPreview(previewFiles)
          ) : (
            <div className="mt-3 flex flex-wrap gap-3">
              {previewUrls.map((url, index) => (
                <img
                  key={url}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  width={previewSize}
                  height={previewSize}
                  className={cn(
                    "border object-cover",
                    previewShape === "circle" ? "rounded-full" : "rounded-md",
                  )}
                  style={{
                    width: previewSize,
                    height: previewSize,
                  }}
                />
              ))}
            </div>
          ))}
      </div>
    );
  },
);

InputFile.displayName = InputFile.name;
