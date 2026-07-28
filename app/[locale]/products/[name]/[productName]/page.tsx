import { Check, FileText } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { SubHero } from "@/components/blocks/sub-hero";
import { ProductGallery } from "@/components/products/product-gallery";
import { Link } from "@/i18n/navigation";
import { parseProductDetailMetadata } from "@/lib/product-detail";
import { findProductByCategoryAndName } from "@/models/product";

interface ProductDetailPageProps {
  params: Promise<{
    name: string;
    productName: string;
    locale: string;
  }>;
}

function decodeSegment(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isUsableImageUrl(value: string): boolean {
  return value.startsWith("/") || /^https?:\/\//i.test(value);
}

async function getProductFromParams(params: ProductDetailPageProps["params"]) {
  const { name, productName } = await params;
  return findProductByCategoryAndName(
    decodeSegment(name),
    decodeSegment(productName),
  );
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductFromParams(params);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = product.title || product.name;
  const description =
    product.description ||
    `Explore specifications and product details for ${title} from CoreLinkCable.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: product.coverUrl ? [{ url: product.coverUrl }] : undefined,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const product = await getProductFromParams(params);

  if (!product?.category) {
    notFound();
  }

  const category = product.category;
  const title = product.title || product.name;
  const detail = parseProductDetailMetadata(product.metadata);
  const images = Array.from(
    new Set(
      [product.coverUrl, ...detail.gallery]
        .filter((image): image is string => Boolean(image))
        .filter(isUsableImageUrl),
    ),
  );
  const specificationEntries = Object.entries(detail.specifications);

  return (
    <>
      <Header />
      <main>
        <SubHero
          title="Product Details"
          bgImage={category.bannerUrl || "/images/corelink-network-rack.jpg"}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            {
              label: category.title,
              href: `/products/${encodeURIComponent(category.name)}`,
            },
            { label: title },
          ]}
        />

        <section className="bg-white py-14 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)] lg:gap-16">
              <ProductGallery images={images} alt={title} />

              <div className="lg:sticky lg:top-32">
                <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#11131b] sm:text-4xl lg:text-5xl">
                  {title}
                </h1>

                {detail.characteristics.length > 0 ? (
                  <div className="mt-8">
                    <h2 className="text-lg font-extrabold text-[#11131b]">
                      {detail.characteristicsTitle || "Product Highlights"}
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {detail.characteristics.map((characteristic) => (
                        <li
                          key={characteristic}
                          className="flex items-start gap-3 text-sm leading-6 text-[#5e616a]"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#7765ff]/10 text-[#7765ff]">
                            <Check className="size-3.5" />
                          </span>
                          {characteristic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {specificationEntries.length > 0 ? (
          <section
            id="specifications"
            className="scroll-mt-24 bg-white py-16 md:py-20 lg:py-24"
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#7765ff]/10 text-[#7765ff]">
                    <FileText className="size-5" />
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl">
                    Technical Specifications
                  </h2>
                </div>

                <div className="mt-9 overflow-hidden rounded-md border border-black/10">
                  <table className="w-full border-collapse text-left">
                    <tbody>
                      {specificationEntries.map(([label, value], index) => (
                        <tr
                          key={label}
                          className={
                            index % 2 === 0 ? "bg-[#f7f7f9]" : "bg-white"
                          }
                        >
                          <th className="w-[42%] border-r border-black/10 px-5 py-4 text-sm font-bold text-[#30323a] md:px-7">
                            {label}
                          </th>
                          <td className="px-5 py-4 text-sm leading-6 text-[#5e616a] md:px-7">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-gradient-to-r from-[#694cff] to-[#2468ee] py-14 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Need this product for your network?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                  Send us your application, quantities, environment, and target
                  schedule. Our team will help confirm the right configuration.
                </p>
              </div>
              <Link
                href={`/contact?product=${encodeURIComponent(title)}`}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-white px-7 text-sm font-bold text-[#11131b] transition-colors hover:bg-white/90"
              >
                INQUIRE NOW&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
