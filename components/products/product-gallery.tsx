"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0] || "");

  if (images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-md bg-[#f4f5f8] text-sm font-medium text-[#8b8e98]">
        Image coming soon
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-md border border-black/5 bg-[#f4f5f8]">
        <Image
          src={activeImage}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-contain p-5 sm:p-8"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={cn(
              "relative size-20 shrink-0 overflow-hidden rounded-sm border bg-white transition-colors",
              image === activeImage
                ? "border-[#7765ff] ring-2 ring-[#7765ff]/15"
                : "border-black/10 hover:border-[#7765ff]/50",
            )}
            aria-label={`View product image ${index + 1}`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
