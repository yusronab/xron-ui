import { useCallback, useState } from "react";

type Props = Readonly<{
  disabled?: boolean;
}>;

export function useDropdown({ disabled }: Props) {
  const [open, setOpen] = useState(false);

  const openDropdown = useCallback(() => {
    if (disabled) {
      return;
    }

    setOpen(true);
  }, [disabled]);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    if (disabled) {
      return;
    }

    setOpen((prev) => !prev);
  }, [disabled]);

  return {
    open,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
}
