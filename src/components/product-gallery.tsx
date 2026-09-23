"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

type ProductGalleryProps = {
  images: Product["images"];
  productName: string;
};

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
            className={cn(
              "absolute top-1/2 left-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-3xl leading-none text-white",
              "opacity-100 transition-opacity hover:bg-ink focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100",
            )}
            onClick={() => rotate(-1)}
            type="button"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            aria-label={`Ver imagen siguiente de ${productName}`}
            className={cn(
              "absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-3xl leading-none text-white",
              "opacity-100 transition-opacity hover:bg-ink focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100",
            )}
            onClick={() => rotate(1)}
            type="button"
          >
            <span aria-hidden="true">›</span>
          </button>
          <p aria-live="polite" className="sr-only">
            Imagen {selectedIndex + 1} de {images.length}
          </p>
        </div>
      ) : null}
    </div>
  );
}
