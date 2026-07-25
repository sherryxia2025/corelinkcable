interface CoreLinkBrandProps {
  inverted?: boolean;
  compact?: boolean;
}

export function CoreLinkBrand({
  inverted = false,
  compact = false,
}: CoreLinkBrandProps) {
  const primary = inverted ? "text-white" : "text-[#0b1c2e]";

  return (
    <span
      className={`inline-flex items-center ${compact ? "gap-2.5" : "gap-3.5"} ${primary}`}
    >
      <span
        aria-hidden="true"
        className={`relative block shrink-0 ${compact ? "h-7 w-8" : "h-9 w-10"}`}
      >
        <span className="absolute inset-y-0 left-0 w-[3px] bg-[#1268e8]" />
        <span className="absolute left-0 top-0 h-[3px] w-7 bg-[#1268e8]" />
        <span className="absolute bottom-0 left-0 h-[3px] w-7 bg-[#1268e8]" />
        <span
          className={`absolute right-0 top-1/2 h-[3px] -translate-y-1/2 bg-current ${
            compact ? "w-6" : "w-7"
          }`}
        />
        <span className="absolute right-0 top-[4px] h-2 w-2 border-2 border-current" />
        <span className="absolute bottom-[4px] right-0 h-2 w-2 border-2 border-current" />
      </span>
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span
          className={`font-bold tracking-[0.025em] ${compact ? "text-[15px]" : "text-[18px]"}`}
        >
          CORELINK
        </span>
        <span
          className={`mt-1 font-semibold tracking-[0.22em] text-[#1268e8] ${
            compact ? "text-[8px]" : "text-[9px]"
          }`}
        >
          CABLE
        </span>
      </span>
    </span>
  );
}
