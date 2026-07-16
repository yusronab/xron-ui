import { TooltipPosition } from "./Tooltip.types";

type Coordinates = {
  top: number;
  left: number;
};

export const calculatePosition = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  position: TooltipPosition,
  offset: number,
): Coordinates => {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  switch (position) {
    case "top-left":
      return {
        top: triggerRect.top + scrollY - tooltipRect.height - offset,
        left: triggerRect.left + scrollX,
      };

    case "top-center":
      return {
        top: triggerRect.top + scrollY - tooltipRect.height - offset,
        left:
          triggerRect.left +
          scrollX +
          (triggerRect.width - tooltipRect.width) / 2,
      };

    case "top-right":
      return {
        top: triggerRect.top + scrollY - tooltipRect.height - offset,
        left: triggerRect.right + scrollX - tooltipRect.width,
      };

    case "bottom-left":
      return {
        top: triggerRect.bottom + scrollY + offset,
        left: triggerRect.left + scrollX,
      };

    case "bottom-right":
      return {
        top: triggerRect.bottom + scrollY + offset,
        left: triggerRect.right + scrollX - tooltipRect.width,
      };

    case "left":
      return {
        top:
          triggerRect.top +
          scrollY +
          (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.left + scrollX - tooltipRect.width - offset,
      };

    case "right":
      return {
        top:
          triggerRect.top +
          scrollY +
          (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.right + scrollX + offset,
      };

    case "bottom-center":
    default:
      return {
        top: triggerRect.bottom + scrollY + offset,
        left:
          triggerRect.left +
          scrollX +
          (triggerRect.width - tooltipRect.width) / 2,
      };
  }
};

export const clampPosition = (
  coords: Coordinates,
  tooltipRect: DOMRect,
  padding = 8,
): Coordinates => {
  return {
    top: Math.min(
      Math.max(coords.top, padding),
      window.innerHeight - tooltipRect.height - padding,
    ),

    left: Math.min(
      Math.max(coords.left, padding),
      window.innerWidth - tooltipRect.width - padding,
    ),
  };
};

export const getArrowClass = (position: TooltipPosition): string => {
  switch (position) {
    case "top-left":
      return "bottom-[-4px] left-3";

    case "top-center":
      return "bottom-[-4px] left-1/2 -translate-x-1/2";

    case "top-right":
      return "bottom-[-4px] right-3";

    case "bottom-left":
      return "top-[-4px] left-3";

    case "bottom-center":
      return "top-[-4px] left-1/2 -translate-x-1/2";

    case "bottom-right":
      return "top-[-4px] right-3";

    case "left":
      return "right-[-4px] top-1/2 -translate-y-1/2";

    case "right":
      return "left-[-4px] top-1/2 -translate-y-1/2";

    default:
      return "";
  }
};

export const resolvePosition = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  position: TooltipPosition,
  padding = 8,
): TooltipPosition => {
  const hasTopSpace = triggerRect.top >= tooltipRect.height + padding;

  const hasBottomSpace =
    window.innerHeight - triggerRect.bottom >= tooltipRect.height + padding;

  const hasLeftSpace = triggerRect.left >= tooltipRect.width + padding;

  const hasRightSpace =
    window.innerWidth - triggerRect.right >= tooltipRect.width + padding;

  switch (position) {
    case "top-left":
    case "top-center":
    case "top-right":
      if (!hasTopSpace && hasBottomSpace) {
        return position.replace("top", "bottom") as TooltipPosition;
      }
      break;

    case "bottom-left":
    case "bottom-center":
    case "bottom-right":
      if (!hasBottomSpace && hasTopSpace) {
        return position.replace("bottom", "top") as TooltipPosition;
      }
      break;

    case "left":
      if (!hasLeftSpace && hasRightSpace) {
        return "right";
      }
      break;

    case "right":
      if (!hasRightSpace && hasLeftSpace) {
        return "left";
      }
      break;
  }

  return position;
};
