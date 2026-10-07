"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ComponentProps } from "react";

// A <details> menu that closes on Escape, outside click, focus leaving it,
// link activation and route changes.
export function Disclosure(props: ComponentProps<"details">) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) {
      ref.current.open = false;
    }
  }, [pathname]);

  useEffect(() => {
    const details = ref.current;

    if (!details) {
      return;
    }

    const isOutside = (target: EventTarget | null) =>
      target instanceof Node && !details.contains(target);

    let pointerInside = false;

    const clearPointerInteraction = () => {
      pointerInside = false;
    };

    const handlePointerDown = (event: PointerEvent) => {
      pointerInside = !isOutside(event.target);
      if (details.open && isOutside(event.target)) {
        details.open = false;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Nested menus handle Escape first; the outer menu stays open.
      if (event.key !== "Escape" || !details.open || event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      details.open = false;
      details.querySelector("summary")?.focus();
    };

    const handleFocusOut = (event: FocusEvent) => {
      // Safari can focus the dialog before a tapped link receives its click.
      if (
        details.open &&
        !pointerInside &&
        (event.relatedTarget === null || isOutside(event.relatedTarget))
      ) {
        details.open = false;
      }
    };

    const handleClick = (event: MouseEvent) => {
      clearPointerInteraction();
      if (event.target instanceof Element && event.target.closest("a")) {
        details.open = false;
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointercancel", clearPointerInteraction);
    document.addEventListener("keydown", clearPointerInteraction, true);
    details.addEventListener("keydown", handleKeyDown);
    details.addEventListener("focusout", handleFocusOut);
    details.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointercancel", clearPointerInteraction);
      document.removeEventListener("keydown", clearPointerInteraction, true);
      details.removeEventListener("keydown", handleKeyDown);
      details.removeEventListener("focusout", handleFocusOut);
      details.removeEventListener("click", handleClick);
    };
  }, []);

  return <details ref={ref} {...props} />;
}
