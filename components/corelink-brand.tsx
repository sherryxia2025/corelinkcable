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
      className={`inline-flex items-center ${compact ? "gap-2" : "gap-3"} ${
        inverted ? "text-white" : "text-[#11131b]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`relative block shrink-0 ${compact ? "size-7" : "size-9"}`}
      >
        <span
          className={`absolute left-0 top-0 rounded-full border-[3px] border-current ${
            compact ? "size-[18px]" : "size-6"
          }`}
        />
        <span
          className={`absolute bottom-0 right-0 rounded-full border-[3px] border-[#7765ff] ${
            compact ? "size-[18px]" : "size-6"
          }`}
        />
      </span>
      <span
        className={`whitespace-nowrap font-extrabold tracking-[-0.055em] ${
          compact ? "text-base" : "text-lg"
        }`}
      >
        CORELINK <span className="font-medium">CABLE</span>
      </span>
    </span>
  );
}
