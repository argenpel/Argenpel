"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

type ProductGalleryProps = {
  images: Product["images"];
  productName: string;
};

const arrowButtonClassName =
  "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center text-ink hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark";

function GalleryChevron({ previous = false }: { previous?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-7", previous && "rotate-180")}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="m9 6 6 6-6 6" stroke="white" strokeWidth="5" />
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex];
  const canRotate = images.length > 1;

  if (!selectedImage) {
    return null;
  }

  const rotate = (direction: -1 | 1) => {
    setSelectedIndex(
      (currentIndex) =>
        (currentIndex + direction + images.length) % images.length,
    );
  };

  return (
    <div className="group relative aspect-[500/349] min-w-0 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt={selectedImage.alt}
          className="object-cover"
          fill
          sizes="(min-width: 1330px) 500px, calc(100vw - 48px)"
          src={selectedImage.src}
          style={{
            objectPosition: selectedImage.objectPosition,
            transform: selectedImage.scale
              ? `scale(${selectedImage.scale})`
              : undefined,
          }}
        />
      </div>

      {canRotate ? (
        <div aria-label={`Imágenes de ${productName}`} role="group">
          <button
            aria-label={`Ver imagen anterior de ${productName}`}
            className={cn(arrowButtonClassName, "left-2")}
            onClick={() => rotate(-1)}
            type="button"
          >
            <GalleryChevron previous />
          </button>
          <button
            aria-label={`Ver imagen siguiente de ${productName}`}
            className={cn(arrowButtonClassName, "right-2")}
            onClick={() => rotate(1)}
            type="button"
          >
            <GalleryChevron />
          </button>
          <p aria-live="polite" className="sr-only">
            Imagen {selectedIndex + 1} de {images.length}
          </p>
        </div>
      ) : null}
    </div>
  );
}
