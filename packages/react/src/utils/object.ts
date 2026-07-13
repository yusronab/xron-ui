export function getStringValue(value: unknown): string {
  if (typeof value === "string" || typeof value === "number") {
    return value.toString();
  }

  return "";
}

export function normalizeFiles(files: FileList): File[] {
  return Array.from(files);
}
