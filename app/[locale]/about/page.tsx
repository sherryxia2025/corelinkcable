import {
  Globe2,
  MapPin,
  ShieldCheck,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { SubHero } from "@/components/blocks/sub-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CoreLinkCable and our approach to high-performance fiber optic connectivity.",
};

const challenges = [
  {
    title: "Value of Reliable Suppliers",
    description:
      "In a constrained market, suppliers that can guarantee stable, high-quality output gain significant competitive advantage and market favor.",
    icon: ShieldCheck,
  },
  {
    title: "Growing Customization Needs",
    description:
      "Customers increasingly seek tailored solutions to meet the unique demands of their data center architectures and outdoor network deployments.",
    icon: SlidersHorizontal,
  },
  {
    title: "Regional Market Focus",
    description:
      "Texas-based operations provide proximity to key North American markets, enabling faster response times and localized support.",
    icon: MapPin,
  },
];

const sustainabilityStatements = [
  "All humanity journeys to comprehend the nature of all things.",
  "The future unfolds infinitely, bound by no single path.",
  "Light is the silent thread interlinking the cosmos.",
  "Optical communications binds human wisdom to the endless universe.",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <SubHero
          title="About Us"
          bgImage="/images/corelink-about-banner.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative min-h-[340px] overflow-hidden rounded-md sm:min-h-[470px]">
                <Image
                  src="/images/corelink-about-innovation.jpg"
                  alt="Fiber optic research and development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 text-base leading-8 text-[#555] md:text-lg">
                <p>
                  A professional fiber optic connectivity provider specializing
                  in end-to-end design, R&amp;D, manufacturing, and sales of
                  high-performance optical cables and components for global
                  markets.
                </p>
                <p>
                  Based in Austin, TX — the heart of North America’s data center
                  hub. This prime location ensures proximity to key clients and
                  seamless access to critical tech infrastructure.
                </p>
                <p>
                  A collective of seasoned optical engineers and industry
                  veterans, committed to delivering innovative solutions and
                  unmatched professional technical support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#160a3d] py-20 text-white md:py-28">
          <div
            className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_20%,rgba(119,101,255,.6),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(36,104,238,.5),transparent_42%)]"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 text-center md:px-6 lg:px-8">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <Target className="size-6" />
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Our Vision &amp; Mission
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-xl">
              Innovate fiber connectivity solutions, build digital
              infrastructure and connect the boundless digital world.
            </p>
          </div>
        </section>

        <section className="bg-[#f4e9ff] py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="mx-auto max-w-4xl text-center text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#2b2140] sm:text-4xl md:text-5xl">
              Industry Challenges &amp; Opportunities
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {challenges.map((challenge) => {
                const Icon = challenge.icon;

                return (
                  <article
                    key={challenge.title}
                    className="rounded-md border border-[#7a22db]/10 bg-white/65 p-7 text-center md:p-8"
                  >
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#7a22db] text-white">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-[#2b2140]">
                      {challenge.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#665b73]">
                      {challenge.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                  Sustainable development connects all beings in the universe.
                </h2>
                <div className="mt-7 space-y-4">
                  {sustainabilityStatements.map((statement) => (
                    <p
                      key={statement}
                      className="border-l-2 border-[#7765ff] pl-4 text-base leading-7 text-[#666] md:text-lg"
                    >
                      {statement}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[340px] overflow-hidden rounded-md sm:min-h-[470px]">
                <Image
                  src="/images/corelink-about-infrastructure.jpg"
                  alt="Optical communication infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f9] py-20 md:py-28 lg:py-32">
          <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#7765ff]/10 text-[#7765ff]">
              <Globe2 className="size-7" />
            </span>
            <h2 className="mx-auto mt-7 max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
              We endeavor to serve and connect global users, allowing wisdom’s
              achievements to be shared by all mankind.
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
