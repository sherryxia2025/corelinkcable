"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";

export interface HeroItem {
  background: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

const defaultItems: HeroItem[] = [
  {
    background: "/images/corelink-fiber-hero.jpg",
    title: "Built for Every Critical Connection",
    description:
      "Optical fiber, cable, and connectivity systems for the networks that keep the world moving.",
    buttonText: "EXPLORE OUR PRODUCTS",
    buttonHref: "/products",
  },
  {
    background: "/images/corelink-fiber-closeup.jpg",
    title: "Precision at the Core",
    description:
      "Low-loss fiber families engineered around transmission, routing, density, and real installation conditions.",
    buttonText: "VIEW FIBER SOLUTIONS",
    buttonHref: "/products",
  },
  {
    background: "/images/corelink-network-rack.jpg",
    title: "One Physical Layer. Every Environment.",
    description:
      "A coordinated portfolio for data centers, telecom, industrial systems, energy, and smart infrastructure.",
    buttonText: "START A PROJECT",
    buttonHref: "/contact",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.25,
      staggerChildren: 0.2,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

function AnimatedContent({ index, item }: { index: number; item: HeroItem }) {
  const { api } = useCarousel();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setIsSelected(api.selectedScrollSnap() === index);
    };

    setIsSelected(api.selectedScrollSnap() === index);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, index]);

  return (
    <motion.div
      className="relative z-10 w-full max-w-[760px] text-white flex flex-col gap-3 md:gap-5 px-4 md:px-0"
      variants={staggerContainer}
      initial="hidden"
      animate={isSelected ? "show" : "hidden"}
      key={index}
    >
      <motion.h1
        variants={staggerItem}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[800] leading-[0.98] tracking-[-0.055em] text-balance"
      >
        {item.title}
      </motion.h1>
      <motion.p
        variants={staggerItem}
        className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
      >
        {item.description}
      </motion.p>
      <motion.div variants={staggerItem}>
        {item.buttonHref ? (
          <Button
            asChild
            style={{
              background: "linear-gradient(135deg, #7765ff, #4f8dff)",
            }}
            className="rounded-sm cursor-pointer text-xs sm:text-sm px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-6 font-bold mt-3 sm:mt-4 md:mt-10 w-full sm:w-auto dark:text-white"
          >
            <a href={item.buttonHref}>{item.buttonText}</a>
          </Button>
        ) : (
          <Button
            style={{
              background: "linear-gradient(135deg, #7765ff, #4f8dff)",
            }}
            className="rounded-sm cursor-pointer text-xs sm:text-sm px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-6 font-bold mt-3 sm:mt-4 md:mt-10 w-full sm:w-auto dark:text-white"
          >
            {item.buttonText}
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
}

export interface HeroProps {
  items?: HeroItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function Hero({
  items = defaultItems,
  autoplay = true,
  autoplayDelay = 6000,
}: HeroProps) {
  const plugin = useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true }),
  );

  const plugins = useMemo(() => {
    const _plugins = [];

    if (autoplay) {
      _plugins.push(plugin.current);
    }

    _plugins.push(Fade());

    return _plugins;
  }, [autoplay]);

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <Carousel
        className="w-full h-full"
        opts={{ loop: true }}
        plugins={plugins}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={item.background} className="w-full h-full">
              <div
                className="relative bg-cover bg-center w-full h-screen flex flex-col justify-center px-4 sm:px-6 md:px-0 md:items-start md:pl-50 2xl:items-start 2xl:pl-80"
                style={{ backgroundImage: `url(${item.background})` }}
              >
                <div className="absolute inset-0 bg-black/40" aria-hidden />
                <AnimatedContent index={index} item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          icon={<ArrowLeft className="size-4 md:size-6" />}
          disabled={false}
          className="size-15 md:size-16 bg-[#7765ff]/50 hover:bg-[#7765ff] opacity-20 hover:opacity-100 text-white hover:text-white rounded-full absolute top-1/2 left-2 md:left-15 -translate-y-1/2 cursor-pointer z-10 hidden md:flex border-none"
        />
        <CarouselNext
          icon={<ArrowRight className="size-4 md:size-6" />}
          disabled={false}
          className="size-15 md:size-16 bg-[#7765ff]/50 hover:bg-[#7765ff] opacity-20 hover:opacity-100 text-white hover:text-white rounded-full absolute top-1/2 right-2 md:right-15 -translate-y-1/2 cursor-pointer z-10 hidden md:flex border-none"
        />
      </Carousel>
    </div>
  );
}
