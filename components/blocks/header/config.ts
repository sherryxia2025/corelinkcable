export interface NavItem {
  label: string;
  href: string;
}

export interface NavConfig {
  brandName: string;
  items: NavItem[];
}

export const defaultNavConfig: NavConfig = {
  brandName: process.env.NEXT_PUBLIC_APP_NAME || "CoreLinkCable",
  items: [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "PRODUCTS", href: "/products" },
    { label: "CONTACT", href: "/contact" },
  ],
};
