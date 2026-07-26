import {
  Check,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { SubHero } from "@/components/blocks/sub-hero";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CoreLinkCable and our approach to high-performance fiber optic connectivity.",
};

const principles = [
  {
    title: "Value of Reliable Suppliers",
    description:
      "In a constrained market, suppliers that can guarantee stable, high-quality output gain significant competitive advantage and market favor.",
    icon: TrendingUp,
  },
  {
    title: "Growing Customization Needs",
    description:
      "Customers increasingly seek tailored solutions to meet the unique demands of their data center architectures and outdoor network deployments.",
    icon: Lightbulb,
  },
  {
    title: "Regional Market Focus",
    description:
      "Texas-based operations provide proximity to key North American markets, enabling faster response times and localized support.",
    icon: HeartHandshake,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Fiber expertise",
    description:
      "Product choices aligned to transmission, bend, density, and installation conditions.",
  },
  {
    number: "02",
    title: "Coordinated portfolio",
    description:
      "Optical fiber, fiber cable, assemblies, and cable management in one product family.",
  },
  {
    number: "03",
    title: "Project support",
    description:
      "Responsive coordination from early specification through delivery and deployment.",
  },
  {
    number: "04",
    title: "Global outlook",
    description:
      "Solutions prepared for telecom, data center, industrial, energy, and access networks.",
  },
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
                  alt="CoreLink optical technology research"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                  Who we are
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                  Connecting the physical layer with purpose.
                </h2>
                <div className="mt-6 space-y-5 text-base leading-7 text-[#666] md:text-lg">
                  <p>
                    A professional fiber optic connectivity provider
                    specializing in end-to-end design, R&amp;D, manufacturing,
                    and sales of high-performance optical cables and components
                    for global markets.
                  </p>
                  <p>
                    Based in Austin, TX — the heart of North America’s data
                    center hub. This prime location ensures proximity to key
                    clients and seamless access to critical tech infrastructure.
                  </p>
                  <p>
                    A collective of seasoned optical engineers and industry
                    veterans, committed to delivering innovative solutions and
                    unmatched professional technical support.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-black/10 pt-7">
                  {["Core", "Link", "Cable"].map((word) => (
                    <div key={word}>
                      <p className="text-xl font-extrabold text-[#11131b]">
                        {word}
                      </p>
                      <div className="mt-2 h-1 w-8 rounded-full bg-[#7765ff]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[440px] items-center overflow-hidden py-20 text-white">
          <Image
            src="/images/corelink-about-infrastructure.jpg"
            alt="Connected data infrastructure"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#16084e]/90 via-[#331080]/75 to-[#090d22]/70"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 text-center md:px-6 lg:px-8">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <Target className="size-6" />
            </span>
            <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/70">
              Our mission
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Our Vision &amp; Mission
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
              Innovate fiber connectivity solutions, build digital
              infrastructure and connect the boundless digital world.
            </p>
          </div>
        </section>

        <section className="bg-[#f4e9ff] py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                Our principles
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#2b2140] sm:text-4xl">
                Industry Challenges &amp; Opportunities
              </h2>
              <p className="mt-5 text-base leading-7 text-[#665b73]">
                Reliable supply, tailored solutions, and responsive regional
                support define the opportunity ahead.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article key={principle.title} className="text-center">
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#7a22db] text-white">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-2xl font-extrabold text-[#2b2140]">
                      {principle.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#665b73]">
                      {principle.description}
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
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                  Built for the future
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                  Sustainable development connects all beings in the universe.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-[#666] md:text-lg">
                  All humanity journeys to comprehend the nature of all things.
                </p>
                <div className="mt-7 space-y-4">
                  {[
                    "The future unfolds infinitely, bound by no single path.",
                    "Light is the silent thread interlinking the cosmos.",
                    "Optical communications binds human wisdom to the endless universe.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#7765ff]/10">
                        <Check className="size-4 text-[#7765ff]" />
                      </span>
                      <span className="text-[#555]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-[#7765ff] px-6 text-sm font-bold text-white transition-colors hover:bg-[#6554eb]"
                >
                  EXPLORE OUR PRODUCTS&nbsp;&nbsp;→
                </Link>
              </div>

              <div className="relative min-h-[340px] overflow-hidden rounded-md sm:min-h-[470px]">
                <Image
                  src="/images/corelink-about-infrastructure.jpg"
                  alt="Fiber-connected data infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f9] py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#7765ff]/10 text-[#7765ff]">
                <Globe2 className="size-6" />
              </span>
              <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl">
                We endeavor to serve and connect global users,
              </h2>
              <p className="mt-5 text-base leading-7 text-[#666] md:text-lg">
                allowing wisdom’s achievements to be shared by all mankind.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => (
                <article key={item.number} className="bg-white p-7 md:p-8">
                  <span className="font-mono text-xs tracking-[0.24em] text-[#7765ff]">
                    {item.number}
                  </span>
                  <h3 className="mt-8 text-xl font-extrabold text-[#11131b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#666]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#694cff] to-[#2468ee] py-14 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                  Work with CoreLink
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Let&apos;s build the connection together.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                  Tell us about your application, environment, quantities, and
                  target schedule.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-white px-7 text-sm font-bold text-[#11131b] transition-colors hover:bg-white/90"
              >
                CONTACT OUR TEAM&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
