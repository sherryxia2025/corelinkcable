import type { Metadata } from "next";
import { Contact } from "@/components/blocks/contact";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { PageHero } from "@/components/corelink/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CoreLink Cable for optical fiber, cable, assemblies, connectivity, and copper network project support.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#0b1c2e]">
        <PageHero
          eyebrow="CONTACT"
          title="Bring us the connection requirement."
          description="Share the application, installation environment, quantities, and target schedule. We will help define a practical path through the physical layer."
          image="/images/contact-hero.jpg"
          imageAlt="Network engineers working with cable infrastructure"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
