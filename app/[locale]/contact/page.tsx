import type { Metadata } from "next";
import { Contact } from "@/components/blocks/contact";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { SubHero } from "@/components/blocks/sub-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CoreLinkCable about optical fiber, cable, connectivity, and project requirements.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <SubHero
        title="Contact"
        bgImage="/images/corelink-contact-banner.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Contact />
      <Footer />
    </>
  );
}
