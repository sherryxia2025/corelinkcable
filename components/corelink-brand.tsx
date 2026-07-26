import Image from "next/image";

interface CoreLinkBrandProps {
  inverted?: boolean;
  compact?: boolean;
}

export function CoreLinkBrand({
  inverted = false,
  compact = false,
}: CoreLinkBrandProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center ${
        compact ? "h-9 w-[145px]" : "h-12 w-[193px]"
      }`}
    >
      <Image
        src={inverted ? "/corelink-logo-inverted.svg" : "/corelink-logo.svg"}
        alt="CoreLinkCable — Connecting the Future"
        width={920}
        height={230}
        sizes={compact ? "145px" : "193px"}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
