import type { Metadata } from "next";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { Products } from "@/components/blocks/products";
import { SubHero } from "@/components/blocks/sub-hero";
import { getProductCategories } from "@/models/product-category";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore CoreLinkCable optical fiber, fiber cable, fiber cable assemblies, and cable tie product families.",
};

export default async function ProductsPage() {
  const categories = await getProductCategories({
    page: 1,
    limit: 100,
  });

  const transformedCategories = categories.map((category) => ({
    id: category.id,
    uuid: category.uuid,
    name: category.name,
    title: category.title,
    description: category.description,
    features:
      category.features &&
      typeof category.features === "object" &&
      Array.isArray(category.features)
        ? (category.features as string[])
        : [],
    coverUrl: category.coverUrl,
  }));

  return (
    <>
      <Header />
      <main>
        <SubHero
          title="Products"
          bgImage="/images/corelink-products-banner.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />

        <Products categories={transformedCategories} />
      </main>
      <Footer />
    </>
  );
}
