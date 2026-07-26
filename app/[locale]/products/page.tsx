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
          bgImage="/images/corelink-network-rack.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />

        <section className="pt-14 text-center md:pt-18 lg:pt-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="mx-auto max-w-4xl text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
              Four product families. One connected portfolio.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base text-[#666] sm:text-lg">
              Select a category to view its product series and technical
              options.
            </p>
          </div>
        </section>

        <Products categories={transformedCategories} />
      </main>
      <Footer />
    </>
  );
}
