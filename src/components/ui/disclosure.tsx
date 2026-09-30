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

    const handlePointerDown = (event: PointerEvent) => {
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
      if (details.open && isOutside(event.relatedTarget)) {
        details.open = false;
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        details.open = false;
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    details.addEventListener("keydown", handleKeyDown);
    details.addEventListener("focusout", handleFocusOut);
    details.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      details.removeEventListener("keydown", handleKeyDown);
      details.removeEventListener("focusout", handleFocusOut);
      details.removeEventListener("click", handleClick);
    };
  }, []);

  return <details ref={ref} {...props} />;
}
