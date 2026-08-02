import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

interface TermsOfServicePageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsOfServicePage(
  props: TermsOfServicePageProps,
) {
  const { locale } = await props.params;
  const page = source.getPage(["terms-of-service"], locale);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f6f8]">
        <section className="relative overflow-hidden bg-[#080b1b] pb-24 pt-36 text-white md:pb-28 md:pt-44">
          <div
            className="absolute -right-32 -top-32 size-[420px] rounded-full bg-[#7765ff]/25 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-40 left-1/4 size-[360px] rounded-full bg-[#2468ee]/20 blur-3xl"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {page.data.title}
            </h1>
            {page.data.description && (
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                {page.data.description}
              </p>
            )}
          </div>
        </section>

        <section className="relative z-10 -mt-12 pb-16 md:-mt-14 md:pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <article className="mx-auto max-w-5xl rounded-md border border-black/5 bg-white px-6 py-10 shadow-[0_18px_60px_rgba(8,11,27,0.08)] sm:px-10 md:px-14 md:py-14">
              <div className="mb-10 h-1 w-16 rounded-full bg-[#7765ff]" />
              <div className="prose prose-lg prose-gray max-w-none prose-headings:font-extrabold prose-headings:tracking-[-0.025em] prose-headings:text-[#11131b] prose-h2:mt-12 prose-h2:border-b prose-h2:border-black/10 prose-h2:pb-3 prose-h3:text-xl prose-p:leading-8 prose-p:text-[#5e6069] prose-li:leading-7 prose-li:text-[#5e6069] prose-li:marker:text-[#7765ff] prose-a:font-semibold prose-a:text-[#7765ff] hover:prose-a:text-[#6554eb]">
                <MDX components={getMDXComponents()} />
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata(
  props: TermsOfServicePageProps,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(["terms-of-service"], params.locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
