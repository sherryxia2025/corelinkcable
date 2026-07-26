import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface ProductCardProps {
  product: {
    uuid: string;
    name: string;
    title: string | null;
    description: string | null;
    coverUrl: string | null;
  };
  href: string;
}

export function ProductCard({ product, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-gray-100 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7765ff]/30 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 sm:h-64 lg:h-72">
        {product.coverUrl ? (
          <div className="absolute inset-0 transition-transform duration-500">
            <Image
              src={product.coverUrl}
              alt={product.title || product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <span className="text-sm font-medium text-gray-400">
            Image coming soon
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-4 line-clamp-2 text-xl font-semibold text-gray-900">
          {product.title || product.name}
        </h3>

        {product.description && (
          <p className="line-clamp-4 whitespace-pre-wrap break-words text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>
        )}

        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#7765ff]">
          View product
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
