"use client";

import { Image as ImageIcon, Loader, Upload, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
];
const MAX_FILE_SIZE = 4.5 * 1024 * 1024;

interface ImageListFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

function parseImages(value: string): string[] {
  return Array.from(
    new Set(
      value
        .split(/\r?\n/)
        .map((image) => image.trim())
        .filter(Boolean),
    ),
  );
}

export function ImageListField({
  value = "",
  onChange,
  disabled = false,
  className = "",
}: ImageListFieldProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const images = parseImages(value);

  const updateImages = (nextImages: string[]) => {
    onChange?.(nextImages.join("\n"));
  };

  const removeImage = (indexToRemove: number) => {
    updateImages(images.filter((_, index) => index !== indexToRemove));
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (selectedFiles.length === 0) return;

    const validFiles = selectedFiles.filter((file) => {
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        toast.error(`${file.name}: unsupported image type`);
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name}: image must be smaller than 4.5 MB`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) {
      event.target.value = "";
      return;
    }

    setIsUploading(true);
    const uploadedImages: string[] = [];

    try {
      for (const file of validFiles) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload/image", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (!response.ok || !data.success || !data.url) {
          toast.error(`${file.name}: ${data.error || "upload failed"}`);
          continue;
        }

        uploadedImages.push(String(data.url));
      }

      if (uploadedImages.length > 0) {
        updateImages(Array.from(new Set([...images, ...uploadedImages])));
        toast.success(
          `${uploadedImages.length} image${uploadedImages.length > 1 ? "s" : ""} uploaded`,
        );
      }
    } catch (error) {
      console.error("Gallery upload error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to upload images",
      );
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept={ALLOWED_IMAGE_TYPES.join(",")}
        multiple
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled || isUploading}
      />

      <Button
        type="button"
        variant="outline"
        onClick={() => fileInputRef.current?.click()}
        disabled={disabled || isUploading}
        className="gap-2"
      >
        {isUploading ? (
          <Loader className="size-4 animate-spin" />
        ) : (
          <Upload className="size-4" />
        )}
        {isUploading ? "Uploading..." : "Add candidate images"}
      </Button>

      {images.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative overflow-hidden rounded-md border bg-muted"
            >
              <div className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Candidate product image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-contain p-3"
                />
              </div>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => removeImage(index)}
                disabled={disabled || isUploading}
                className="absolute right-2 top-2 size-8 shadow-sm"
                aria-label={`Remove candidate image ${index + 1}`}
              >
                <X className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-36 items-center justify-center rounded-md border border-dashed bg-muted/40 text-sm text-muted-foreground">
          <div className="text-center">
            <ImageIcon className="mx-auto mb-2 size-7" />
            <p>No candidate images uploaded</p>
          </div>
        </div>
      )}
    </div>
  );
}
