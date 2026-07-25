export interface NavItem {
  label: string;
  href: string;
}

export interface NavConfig {
  brandName: string;
  items: NavItem[];
}

export const defaultNavConfig: NavConfig = {
  brandName: process.env.NEXT_PUBLIC_APP_NAME || "CoreLink Cable",
  items: [
    { label: "HOME", href: "/" },
    { label: "PRODUCTS", href: "/#products" },
    { label: "ABOUT US", href: "/#about" },
    { label: "CONTACT", href: "/#contact" },
  ],
};
