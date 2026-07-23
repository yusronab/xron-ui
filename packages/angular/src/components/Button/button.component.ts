import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  booleanAttribute,
  computed,
  inject,
  input,
} from "@angular/core";

import { cn, forwardHostAttributes } from "../../utils";
import { buttonVariants } from "../../variants/button";

import { Spinner } from "../Spinner";

import type {
  ButtonAppearance,
  ButtonSize,
  ButtonVariant,
} from "./button.types";

@Component({
  selector: "xr-button",
  standalone: true,
  imports: [Spinner],
  template: `
    <button #button [class]="classes()" [disabled]="disabled() || loading()">
      <span class="inline-flex items-center gap-2">
        @if (loading()) {
          <xr-spinner [size]="size()" />
        }

        <ng-content />
      </span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  readonly variant = input<ButtonVariant>();

  readonly appearance = input<ButtonAppearance>("solid");

  readonly size = input<ButtonSize>("md");

  readonly rounded = input(false, {
    transform: booleanAttribute,
  });

  readonly fullWidth = input(false, {
    transform: booleanAttribute,
  });

  readonly loading = input(false, {
    transform: booleanAttribute,
  });

  readonly disabled = input(false, {
    transform: booleanAttribute,
  });

  protected readonly classes = computed(() =>
    cn(
      buttonVariants({
        variant: this.variant(),
        appearance: this.appearance(),
        size: this.size(),
        rounded: this.rounded(),
        fullWidth: this.fullWidth(),
      }),
    ),
  );

  @ViewChild("button", { static: true })
  private readonly button!: ElementRef<HTMLButtonElement>;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    forwardHostAttributes(
      this.host.nativeElement,
      this.button.nativeElement,
      this.renderer,
    );
  }
}
