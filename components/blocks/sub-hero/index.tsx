"use client";

import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface SubHeroProps {
  title: string;
  breadcrumbs?: BreadcrumbItemType[];
  className?: string;
  bgImage?: string;
}

export const SubHero = ({
  title,
  breadcrumbs = [{ label: "Home", href: "/" }],
  className,
  bgImage,
}: SubHeroProps) => {
  return (
    <section
      className={cn(
        "relative mt-[72px] flex min-h-[360px] w-full items-center overflow-hidden bg-[#071524] py-16 lg:mt-[108px]",
        className,
      )}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,36,.96),rgba(7,21,36,.42))]"
        aria-hidden
      />

      {/* Background overlay with industrial elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Content */}
      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Page Title */}
          <h1 className="mb-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-[44px]">
            {title}
          </h1>
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb className="mb-4 sm:mb-5 md:mb-6">
              <BreadcrumbList className="text-white flex-wrap text-sm sm:text-base">
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  const key = `${item.label}-${item.href || "no-href"}-${index}`;

                  if (isLast) {
                    return (
                      <BreadcrumbItem key={key}>
                        <BreadcrumbPage className="text-white text-sm sm:text-base">
                          {item.label}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    );
                  }

                  return (
                    <Fragment key={key}>
                      <BreadcrumbItem>
                        {item.href ? (
                          <BreadcrumbLink
                            asChild
                            className="text-sm text-white transition-colors hover:text-[#64a3ff] sm:text-base"
                          >
                            <Link href={item.href}>{item.label}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <span className="text-white text-sm sm:text-base">
                            {item.label}
                          </span>
                        )}
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="mx-1 text-[#64a3ff] sm:mx-2">
                        &gt;
                      </BreadcrumbSeparator>
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          )}
        </div>
      </div>
    </section>
  );
};
