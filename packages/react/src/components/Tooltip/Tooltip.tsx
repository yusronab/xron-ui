import {
  Children,
  cloneElement,
  FocusEventHandler,
  HTMLAttributes,
  isValidElement,
  MouseEventHandler,
  ReactElement,
  Ref,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { tooltipVariants } from "../../variants/tooltip";

import { cn, mergeRefs } from "../../utils";

import type { TooltipProps } from "./Tooltip.types";
import {
  calculatePosition,
  clampPosition,
  getArrowClass,
  resolvePosition,
} from "./Tooltip.utils";

type TriggerProps = HTMLAttributes<HTMLElement> & {
  ref?: Ref<HTMLElement>;

  onMouseEnter?: MouseEventHandler<HTMLElement>;

  onMouseLeave?: MouseEventHandler<HTMLElement>;

  onFocus?: FocusEventHandler<HTMLElement>;

  onBlur?: FocusEventHandler<HTMLElement>;
};

const TRANSITION_DURATION = 200;

export const Tooltip = ({
  children,
  content,
  className,
  size,
  delay = 200,
  disabled = false,
  arrow = true,
  position = "bottom-center",
  offset = 8,
  ...props
}: TooltipProps) => {
  const tooltipId = useId();

  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTimerRef = useRef<number>(0);
  const hideTimerRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  const [coords, setCoords] = useState({
    top: -99999,
    left: -99999,
  });

  const [currentPosition, setCurrentPosition] = useState(position);

  useEffect(() => {
    setMounted(true);

    return () => {
      window.clearTimeout(showTimerRef.current);
      window.clearTimeout(hideTimerRef.current);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();

    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    if (!tooltipRect.width || !tooltipRect.height) {
      return;
    }

    const resolvedPosition = resolvePosition(
      triggerRect,
      tooltipRect,
      position,
    );

    setCurrentPosition(resolvedPosition);

    const nextCoords = calculatePosition(
      triggerRect,
      tooltipRect,
      resolvedPosition,
      offset,
    );

    setCoords(clampPosition(nextCoords, tooltipRect));
  }, [offset, position]);

  const handleShow = () => {
    if (disabled) {
      return;
    }

    window.clearTimeout(showTimerRef.current);
    window.clearTimeout(hideTimerRef.current);

    showTimerRef.current = window.setTimeout(() => {
      setReady(false);
      setOpen(true);
    }, delay);
  };

  const handleHide = () => {
    window.clearTimeout(showTimerRef.current);

    setReady(false);
    setOpen(false);

    setCoords({
      top: -99999,
      left: -99999,
    });
  };

  useLayoutEffect(() => {
    if (!open) {
      return;
    }

    if (!triggerRef.current || !tooltipRef.current) {
      return;
    }

    updatePosition();

    setReady(true);
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) {
      return;
    }

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    const resizeObserver = new ResizeObserver(() => {
      updatePosition();
    });

    if (triggerRef.current) {
      resizeObserver.observe(triggerRef.current);
    }

    if (tooltipRef.current) {
      resizeObserver.observe(tooltipRef.current);
    }
    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, updatePosition]);

  const child = Children.only(children);

  if (!isValidElement<TriggerProps>(child)) {
    return null;
  }

  const trigger = cloneElement(child as ReactElement<TriggerProps>, {
    ref: mergeRefs(child.props.ref, triggerRef),

    "aria-describedby": open ? tooltipId : undefined,

    onMouseEnter: (event) => {
      child.props.onMouseEnter?.(event);

      handleShow();
    },

    onMouseLeave: (event) => {
      child.props.onMouseLeave?.(event);

      handleHide();
    },

    onFocus: (event) => {
      child.props.onFocus?.(event);

      handleShow();
    },

    onBlur: (event) => {
      child.props.onBlur?.(event);

      handleHide();
    },
  });

  return (
    <>
      {trigger}

      {mounted &&
        open &&
        createPortal(
          <div
            ref={tooltipRef}
            id={tooltipId}
            role="tooltip"
            data-state={ready ? "open" : "closed"}
            className={cn(
              tooltipVariants({
                size,
              }),
              className,
            )}
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              visibility: ready ? "visible" : "hidden",
            }}
            {...props}
          >
            {content}

            {arrow && (
              <div
                className={cn(
                  "absolute h-2 w-2 rotate-45 bg-gray-900",
                  getArrowClass(currentPosition),
                )}
              />
            )}
          </div>,
          document.body,
        )}
    </>
  );
};

Tooltip.displayName = "Tooltip";
