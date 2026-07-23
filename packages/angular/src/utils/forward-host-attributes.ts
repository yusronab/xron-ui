import { Renderer2 } from "@angular/core";

export function forwardHostAttributes(
  host: HTMLElement,
  target: HTMLElement,
  renderer: Renderer2,
) {
  const attributes = host.attributes;

  for (const attribute of Array.from(attributes)) {
    switch (attribute.name) {
      case "class":
      case "style":
        continue;
    }

    renderer.setAttribute(target, attribute.name, attribute.value);
  }
}
