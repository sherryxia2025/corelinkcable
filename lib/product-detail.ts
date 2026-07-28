import type { Prisma } from "@/prisma/generated/prisma";

export const PRODUCT_DETAIL_KEYS = [
  "model",
  "brand",
  "gallery",
  "characteristicsTitle",
  "characteristics",
  "applications",
  "specifications",
  "detailContent",
  "datasheetUrl",
] as const;

type ProductDetailKey = (typeof PRODUCT_DETAIL_KEYS)[number];

export interface ProductDetailMetadata {
  model: string;
  brand: string;
  gallery: string[];
  characteristicsTitle: string;
  characteristics: string[];
  applications: string[];
  specifications: Record<string, string>;
  detailContent: string;
  datasheetUrl: string;
  additionalMetadata: Record<string, string>;
}

export interface ProductDetailFormInput {
  model?: string;
  brand?: string;
  galleryUrls?: string;
  characteristicsTitle?: string;
  characteristics?: string;
  applications?: string;
  specifications?: string;
  detailContent?: string;
  datasheetUrl?: string;
  additionalMetadata?: string;
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
  const reservedKeys = new Set<string>(PRODUCT_DETAIL_KEYS);
  const additionalMetadata = Object.fromEntries(
    Object.entries(source)
      .filter(([key]) => !reservedKeys.has(key))
      .map(([key, value]) => [key, asString(value)] as const)
      .filter(([, value]) => value),
  );

  return {
    model: asString(source.model),
    brand: asString(source.brand),
    gallery: asStringArray(source.gallery),
    characteristicsTitle: asString(source.characteristicsTitle),
    characteristics: asStringArray(source.characteristics),
    applications: asStringArray(source.applications),
    specifications: asStringRecord(source.specifications),
    detailContent: asString(source.detailContent),
    datasheetUrl: asString(source.datasheetUrl),
    additionalMetadata,
  };
}

export function productDetailToFormData(
  metadata: Prisma.JsonValue | null | undefined,
): Record<string, string> {
  const detail = parseProductDetailMetadata(metadata);

  return {
    model: detail.model,
    brand: detail.brand,
    galleryUrls: detail.gallery.join("\n"),
    characteristicsTitle: detail.characteristicsTitle,
    characteristics: detail.characteristics.join("\n"),
    applications: detail.applications.join("\n"),
    specifications: JSON.stringify(detail.specifications),
    detailContent: detail.detailContent,
    datasheetUrl: detail.datasheetUrl,
    additionalMetadata: JSON.stringify(detail.additionalMetadata),
  };
}

export function buildProductDetailMetadata(
  input: ProductDetailFormInput,
): Prisma.InputJsonObject {
  const additional = parseJsonRecord(input.additionalMetadata);
  const specifications = asStringRecord(parseJsonRecord(input.specifications));
  const metadata: Record<string, Prisma.InputJsonValue> = {};

  for (const [key, value] of Object.entries(additional)) {
    if (
      !PRODUCT_DETAIL_KEYS.includes(key as ProductDetailKey) &&
      value !== undefined
    ) {
      metadata[key] = value as Prisma.InputJsonValue;
    }
  }

  const model = input.model?.trim();
  const brand = input.brand?.trim();
  const gallery = parseLines(input.galleryUrls);
  const characteristicsTitle = input.characteristicsTitle?.trim();
  const characteristics = parseLines(input.characteristics);
  const applications = parseLines(input.applications);
  const detailContent = input.detailContent?.trim();
  const datasheetUrl = input.datasheetUrl?.trim();

  if (model) metadata.model = model;
  if (brand) metadata.brand = brand;
  if (gallery.length > 0) metadata.gallery = gallery;
  if (characteristicsTitle) {
    metadata.characteristicsTitle = characteristicsTitle;
  }
  if (characteristics.length > 0) {
    metadata.characteristics = characteristics;
  }
  if (applications.length > 0) metadata.applications = applications;
  if (Object.keys(specifications).length > 0) {
    metadata.specifications = specifications;
  }
  if (detailContent) metadata.detailContent = detailContent;
  if (datasheetUrl) metadata.datasheetUrl = datasheetUrl;

  return metadata as Prisma.InputJsonObject;
}
