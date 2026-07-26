import Link from "next/link";
import { CoreLinkBrand } from "@/components/corelink-brand";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  copyright?: string;
  menuItems?: MenuItem[];
}

const defaultConfig = {
  copyright: "© 2026 CoreLink Cable. All rights reserved.",
  menuItems: [
    {
      title: "EXPLORE",
      links: [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about" },
        { text: "Products", url: "/products" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "PRODUCT LINES",
      links: [
        { text: "Optical Fiber", url: "/products/optical-fiber" },
        { text: "Fiber Cable", url: "/products/fiber-cable" },
        {
          text: "Fiber Cable Assemblies",
          url: "/products/fiber-cable-assemblies",
        },
        { text: "Cable Tie", url: "/products/cable-tie" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { text: "Terms of Service", url: "/terms-of-service" },
        { text: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
  ],
};

export const Footer = ({
  copyright = defaultConfig.copyright,
  menuItems = defaultConfig.menuItems,
}: FooterProps) => {
  return (
    <section className="py-20 bg-[#151515] text-[rgba(255,255,255,0.5)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/" aria-label="CoreLink Cable home">
                  <CoreLinkBrand inverted />
                </Link>
              </div>
              <p className="mt-5 max-w-sm leading-relaxed">
                Optical fiber, cable, connectivity, and copper systems for
                dependable network infrastructure.
              </p>
              <p className="mt-5 font-bold">{copyright}</p>
            </div>
            {menuItems.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link) => (
                    <li
                      key={`${link.text}-${link.url}`}
                      className="hover:text-white font-medium"
                    >
                      <Link href={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};
