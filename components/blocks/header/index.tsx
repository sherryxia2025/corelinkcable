"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CoreLinkBrand } from "@/components/corelink-brand";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { defaultNavConfig } from "./config";

interface HeaderProps {
  brandName?: string;
  navigation?: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
}

export function Header({
  brandName = defaultNavConfig.brandName,
  navigation = defaultNavConfig.items,
  className,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-[#d8dee6] bg-white text-[#0b1c2e]",
        className,
      )}
    >
      <div className="hidden h-8 bg-[#071524] text-white lg:block">
        <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-8">
          <span className="text-[10px] font-semibold tracking-[0.2em]">
            ENGINEERED CONNECTION SYSTEMS
          </span>
          <span className="text-[10px] tracking-[0.16em] text-white/65">
            OPTICAL · COPPER · CONNECTIVITY
          </span>
        </div>
      </div>

      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 md:px-6 lg:h-[76px] lg:px-8">
        <Link href="/" aria-label={`${brandName} home`}>
          <CoreLinkBrand compact />
        </Link>

        <DesktopNavigation navigation={navigation} />

        <Link
          href="/contact"
          className="hidden h-10 items-center justify-center border border-[#1268e8] bg-[#1268e8] px-5 text-[11px] font-bold tracking-[0.12em] text-white transition-colors hover:bg-[#0b4fae] lg:inline-flex"
        >
          REQUEST A QUOTE
        </Link>

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-[#cfd6df] text-[#0b1c2e] lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <MobileNavigation
          navigation={navigation}
          onNavigate={() => setIsMobileMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}

function normalizePath(path: string) {
  const segments = path.split("/").filter(Boolean);
  if (
    segments.length > 0 &&
    routing.locales.includes(segments[0] as (typeof routing.locales)[number])
  ) {
    segments.shift();
  }
  return `/${segments.join("/")}`;
}

function DesktopNavigation({
  navigation,
}: {
  navigation: Array<{ label: string; href: string }>;
}) {
  const pathname = normalizePath(usePathname());

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative py-7 text-[11px] font-bold tracking-[0.14em] text-[#334155] transition-colors hover:text-[#1268e8]",
              active &&
                "text-[#1268e8] after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#1268e8]",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileNavigation({
  navigation,
  onNavigate,
}: {
  navigation: Array<{ label: string; href: string }>;
  onNavigate: () => void;
}) {
  const pathname = normalizePath(usePathname());

  return (
    <div className="border-t border-[#d8dee6] bg-white px-4 pb-6 pt-2 lg:hidden">
      <nav>
        {navigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex h-14 items-center justify-between border-b border-[#e5eaf0] text-xs font-bold tracking-[0.14em] text-[#0b1c2e]",
                active && "text-[#1268e8]",
              )}
            >
              {item.label}
              <span aria-hidden className="font-mono text-[#1268e8]">
                →
              </span>
            </Link>
          );
        })}
      </nav>
      <Link
        href="/contact"
        onClick={onNavigate}
        className="mt-6 flex h-12 items-center justify-center bg-[#1268e8] text-xs font-bold tracking-[0.12em] text-white"
      >
        REQUEST A QUOTE
      </Link>
    </div>
  );
}
