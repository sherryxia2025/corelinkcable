import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AboutUsProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: string[];
  buttonSecondary?: {
    text: string;
    href: string;
  } | null;
}

export const AboutUs = ({
  title,
  description,
  imageSrc,
  imageAlt,
  features = [],
  buttonSecondary,
}: AboutUsProps) => {
  return (
    <section className="py-14 md:py-18 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="my-6 mt-0 text-balance text-4xl font-semibold lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="text-[#666] mb-8 max-w-xl lg:text-lg">
                {description}
              </p>
            )}
            <div className="flex flex-col gap-4 mb-8">
              {features.map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <div className="size-6 bg-[#7765ff]/10 rounded-full flex items-center justify-center">
                    <Check className="size-4 text-[#7765ff]" />
                  </div>
                  <p className="text-[#666]">{item}</p>
                </div>
              ))}
            </div>
            {buttonSecondary && (
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  variant="outline"
                  asChild
                  style={{
                    background: "linear-gradient(135deg, #7765ff, #4f8dff)",
                  }}
                  className="text-white hover:text-white rounded-sm"
                >
                  <a href={buttonSecondary.href}>{buttonSecondary.text}</a>
                </Button>
              </div>
            )}
          </div>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || "CoreLink Cable"}
              width={1200}
              height={800}
              className="max-h-96 w-full rounded-md object-cover"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
