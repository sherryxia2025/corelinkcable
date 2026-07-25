import { CoreLinkBrand } from "@/components/corelink-brand";
import { Link } from "@/i18n/navigation";

const footerGroups = [
  {
    title: "COMPANY",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "PRODUCT SYSTEMS",
    links: [
      { label: "Optical Fiber", href: "/products#optical-fiber" },
      { label: "Fiber Optic Cable", href: "/products#fiber-cable" },
      { label: "Cable Assemblies", href: "/products#assemblies" },
      { label: "Connectivity & Copper", href: "/products#connectivity" },
    ],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Request a Quote", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-[#1268e8] bg-[#071524] text-white">
      <div className="container mx-auto px-4 py-14 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" aria-label="CoreLink Cable home">
              <CoreLinkBrand inverted />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/62">
              Optical and copper connection systems engineered for dependable
              network infrastructure.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[10px] font-bold tracking-[0.16em] text-white/45">
              <span>CORE</span>
              <span className="h-px w-5 bg-[#1268e8]" />
              <span>LINK</span>
              <span className="h-px w-5 bg-[#1268e8]" />
              <span>CABLE</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="border-b border-white/14 pb-3 text-[10px] font-bold tracking-[0.16em] text-white/45">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/72 transition-colors hover:text-[#64a3ff]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/12 pt-6 text-[10px] tracking-[0.1em] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 CORELINK CABLE. ALL RIGHTS RESERVED.</span>
          <span>THE CORE THAT CONNECTS EVERYTHING.</span>
        </div>
      </div>
    </footer>
  );
}
