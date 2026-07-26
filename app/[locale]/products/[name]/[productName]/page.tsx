import {
  ArrowDownToLine,
  Check,
  FileText,
  MessageSquareText,
} from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { SubHero } from "@/components/blocks/sub-hero";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductRichText } from "@/components/products/product-rich-text";
import { Link } from "@/i18n/navigation";
import { parseProductDetailMetadata } from "@/lib/product-detail";
import {
  findProductByCategoryAndName,
  getProducts,
  ProductStatus,
} from "@/models/product";
import { ProductCard } from "../product-card";

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

  const title = product.title || product.name;
  const detail = parseProductDetailMetadata(product.metadata);
  const images = Array.from(
    new Set(
      [product.coverUrl, ...detail.gallery]
        .filter((image): image is string => Boolean(image))
        .filter(isUsableImageUrl),
    ),
  );
  const specifications = {
    ...detail.additionalMetadata,
    ...detail.specifications,
  };
  const specificationEntries = Object.entries(specifications);
  const relatedProducts = (
    await getProducts({
      categoryUuid: product.categoryUuid || undefined,
      status: ProductStatus.Online,
      page: 1,
      limit: 5,
    })
  )
    .filter((relatedProduct) => relatedProduct.uuid !== product.uuid)
    .slice(0, 4);

  const hasOverview = Boolean(
    detail.detailContent.trim() || product.description?.trim(),
  );
  const hasTechnicalContent =
    specificationEntries.length > 0 || detail.applications.length > 0;

  return (
    <>
      <Header />
      <main>
        <SubHero
          title="Product Details"
          bgImage={
            product.category.bannerUrl || "/images/corelink-network-rack.jpg"
          }
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            {
              label: product.category.title,
              href: `/products/${encodeURIComponent(product.category.name)}`,
            },
            { label: title },
          ]}
        />

        <section className="bg-white py-14 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)] lg:gap-16">
              <ProductGallery images={images} alt={title} />

              <div className="lg:sticky lg:top-32">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                  {product.category.title}
                </p>
                <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#11131b] sm:text-4xl lg:text-5xl">
                  {title}
                </h1>

                {product.description ? (
                  <p className="mt-6 whitespace-pre-wrap text-base leading-8 text-[#5e616a] md:text-lg">
                    {product.description}
                  </p>
                ) : null}

                {detail.model || detail.brand ? (
                  <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-black/10 bg-black/10">
                    {detail.model ? (
                      <div className="bg-white p-5">
                        <dt className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a8d95]">
                          Model
                        </dt>
                        <dd className="mt-2 font-bold text-[#11131b]">
                          {detail.model}
                        </dd>
                      </div>
                    ) : null}
                    {detail.brand ? (
                      <div className="bg-white p-5">
                        <dt className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a8d95]">
                          Brand
                        </dt>
                        <dd className="mt-2 font-bold text-[#11131b]">
                          {detail.brand}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                ) : null}

                {detail.characteristics.length > 0 ? (
                  <div className="mt-8">
                    <h2 className="text-lg font-extrabold text-[#11131b]">
                      Key Characteristics
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

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/contact?product=${encodeURIComponent(title)}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#7765ff] px-7 text-sm font-bold text-white transition-colors hover:bg-[#6554eb]"
                  >
                    <MessageSquareText className="size-4" />
                    REQUEST A QUOTE
                  </Link>
                  {detail.datasheetUrl ? (
                    <a
                      href={detail.datasheetUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-[#11131b]/20 px-7 text-sm font-bold text-[#11131b] transition-colors hover:border-[#7765ff] hover:text-[#6654ef]"
                    >
                      <ArrowDownToLine className="size-4" />
                      DOWNLOAD DATASHEET
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        {hasOverview || hasTechnicalContent ? (
          <nav className="sticky top-0 z-20 border-y border-black/10 bg-white/95 backdrop-blur">
            <div className="container mx-auto flex gap-7 overflow-x-auto px-4 py-4 text-sm font-bold text-[#555963] md:px-6 lg:px-8">
              {hasOverview ? (
                <a
                  href="#overview"
                  className="whitespace-nowrap hover:text-[#6654ef]"
                >
                  Product Overview
                </a>
              ) : null}
              {specificationEntries.length > 0 ? (
                <a
                  href="#specifications"
                  className="whitespace-nowrap hover:text-[#6654ef]"
                >
                  Technical Specifications
                </a>
              ) : null}
              {detail.applications.length > 0 ? (
                <a
                  href="#applications"
                  className="whitespace-nowrap hover:text-[#6654ef]"
                >
                  Applications
                </a>
              ) : null}
            </div>
          </nav>
        ) : null}

        {hasOverview ? (
          <section
            id="overview"
            className="scroll-mt-24 bg-[#f7f7f9] py-16 md:py-20 lg:py-24"
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                  Product overview
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl">
                  Built for dependable connection.
                </h2>
                <div className="mt-8 rounded-md bg-white p-7 shadow-sm md:p-10">
                  {detail.detailContent ? (
                    <ProductRichText content={detail.detailContent} />
                  ) : (
                    <p className="whitespace-pre-wrap leading-8 text-[#555963]">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}

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

        {detail.applications.length > 0 ? (
          <section
            id="applications"
            className="scroll-mt-24 bg-[#11131b] py-16 text-white md:py-20"
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#9d91ff]">
                  Applications
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                  Designed for real network environments.
                </h2>
                <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2">
                  {detail.applications.map((application) => (
                    <div
                      key={application}
                      className="flex items-start gap-3 bg-[#11131b] p-6"
                    >
                      <Check className="mt-0.5 size-5 shrink-0 text-[#9d91ff]" />
                      <p className="leading-7 text-white/75">{application}</p>
                    </div>
                  ))}
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

        {relatedProducts.length > 0 ? (
          <section className="bg-white py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                    Related products
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl">
                    More from {product.category.title}
                  </h2>
                </div>
                <Link
                  href={`/products/${encodeURIComponent(product.category.name)}`}
                  className="text-sm font-bold text-[#6654ef] hover:text-[#4937d7]"
                >
                  VIEW ALL PRODUCTS&nbsp;&nbsp;→
                </Link>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.uuid}
                    product={relatedProduct}
                    href={`/products/${encodeURIComponent(product.category.name)}/${encodeURIComponent(relatedProduct.name)}`}
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
