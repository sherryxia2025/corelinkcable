import type { Prisma } from "@/prisma/generated/prisma";

export interface ProductDetailMetadata {
  gallery: string[];
  characteristicsTitle: string;
  characteristics: string[];
  specifications: Record<string, string>;
}

export interface ProductDetailFormInput {
  galleryUrls?: string;
  characteristicsTitle?: string;
  characteristics?: string;
  specifications?: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string {
  if (typeof value === "string") {
    return value.trim();
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return "";
}

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(asString).filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

function asStringRecord(value: unknown): Record<string, string> {
  if (!isRecord(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .map(([key, entryValue]) => [key.trim(), asString(entryValue)] as const)
      .filter(([key, entryValue]) => key && entryValue),
  );
}

function parseJsonRecord(value?: string): Record<string, unknown> {
  if (!value?.trim()) {
    return {};
  }

  try {
    const parsed = JSON.parse(value);
    return isRecord(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function parseLines(value?: string): string[] {
  return (value || "")
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseProductDetailMetadata(
  metadata: Prisma.JsonValue | null | undefined,
): ProductDetailMetadata {
  const source = isRecord(metadata) ? metadata : {};

  return {
    gallery: asStringArray(source.gallery),
    characteristicsTitle: asString(source.characteristicsTitle),
    characteristics: asStringArray(source.characteristics),
    specifications: asStringRecord(source.specifications),
  };
}

export function productDetailToFormData(
  metadata: Prisma.JsonValue | null | undefined,
): Record<string, string> {
  const detail = parseProductDetailMetadata(metadata);

  return {
    galleryUrls: detail.gallery.join("\n"),
    characteristicsTitle: detail.characteristicsTitle,
    characteristics: detail.characteristics.join("\n"),
    specifications: JSON.stringify(detail.specifications),
  };
}

export function buildProductDetailMetadata(
  input: ProductDetailFormInput,
): Prisma.InputJsonObject {
  const specifications = asStringRecord(parseJsonRecord(input.specifications));
  const metadata: Record<string, Prisma.InputJsonValue> = {};

  const gallery = parseLines(input.galleryUrls);
  const characteristicsTitle = input.characteristicsTitle?.trim();
  const characteristics = parseLines(input.characteristics);

  if (gallery.length > 0) metadata.gallery = gallery;
  if (characteristicsTitle) {
    metadata.characteristicsTitle = characteristicsTitle;
  }
  if (characteristics.length > 0) {
    metadata.characteristics = characteristics;
  }
  if (Object.keys(specifications).length > 0) {
    metadata.specifications = specifications;
  }

  return metadata as Prisma.InputJsonObject;
}
