import Image from "next/image";

interface CoreLinkBrandProps {
  inverted?: boolean;
  compact?: boolean;
}

export function CoreLinkBrand({ compact = false }: CoreLinkBrandProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center overflow-hidden bg-white ${
        compact ? "h-9 w-[145px]" : "h-12 w-[193px]"
      }`}
    >
      <Image
        src="/corelink-logo.jpg"
        alt="CoreLink Cable — Connecting the Future"
        width={3332}
        height={829}
        sizes={compact ? "145px" : "193px"}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
