"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { HeroImage } from "@/data/home";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 6000;

type HeroSlideshowProps = {
  images: HeroImage[];
};

// Decorative background that crossfades between images. The first image is
// server-rendered and preloaded; the rest load after the page does. Rotation
// pauses while the tab is hidden and never starts with reduced motion.
export function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [rotating, setRotating] = useState(false);
  const [slide, setSlide] = useState<{ active: number; previous?: number }>({
    active: 0,
  });
  const loaded = useRef<boolean[]>([true]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (images.length < 2 || reducedMotion.matches) {
      return;
    }

    const start = () => setRotating(true);

    if (document.readyState === "complete") {
      const timeout = window.setTimeout(start);
      return () => window.clearTimeout(timeout);
    }

    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, [images.length]);

  useEffect(() => {
    if (!rotating) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;

    // Advance only to an image that has finished loading.
    const advance = () => {
      if (reducedMotion.matches) {
        return;
      }

      setSlide((current) => {
        const next = (current.active + 1) % images.length;

        return loaded.current[next]
          ? { active: next, previous: current.active }
          : current;
      });
    };

    const schedule = () => {
      window.clearInterval(interval);

      if (!document.hidden) {
        interval = window.setInterval(advance, SLIDE_DURATION_MS);
      }
    };

    schedule();
    document.addEventListener("visibilitychange", schedule);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [rotating, images.length]);

  return (
    <div aria-hidden="true" className="absolute inset-0 isolate opacity-40">
      {(rotating ? images : images.slice(0, 1)).map((image, index) => (
        <div
          // The incoming image fades in above the outgoing one, which stays
          // opaque underneath so the crossfade never shows the background.
          className={cn(
            image.mobileSrc
              ? "absolute top-[8.46%] left-[-22.48%] h-[91.58%] w-[132.05%] lg:inset-0 lg:size-full"
              : "absolute inset-0",
            index === slide.active
              ? "z-10 opacity-100 transition-opacity duration-[1200ms] ease-in-out"
              : index === slide.previous
                ? "opacity-100"
                : "opacity-0",
          )}
          key={image.src}
        >
          <picture>
            {image.mobileSrc && (
              <source
                media="(max-width: 1023px)"
                srcSet={image.mobileSrc}
                type="image/jpeg"
              />
            )}
            <Image
              alt=""
              className="object-cover object-center"
              fetchPriority={index === 0 ? undefined : "low"}
              fill
              loading={index === 0 ? undefined : "eager"}
              onLoad={() => {
                loaded.current[index] = true;
              }}
              priority={index === 0}
              sizes="100vw"
              src={image.src}
              style={
                image.objectPosition
                  ? { objectPosition: image.objectPosition }
                  : undefined
              }
            />
          </picture>
        </div>
      ))}
    </div>
  );
}
