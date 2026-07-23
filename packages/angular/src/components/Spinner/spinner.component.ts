import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";

import { cn } from "../../utils";
import { spinnerVariants } from "../../variants/spinner";

@Component({
  selector: "xr-spinner",
  standalone: true,
  template: "",
  host: {
    "[class]": "classes()",
    "aria-hidden": "true",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  readonly size = input<"xs" | "sm" | "md" | "lg" | "xl">("md");

  protected readonly classes = computed(() =>
    cn(
      spinnerVariants({
        size: this.size(),
      }),
    ),
  );
}
