import { ProductCard } from "./product-card";

interface Product {
  uuid: string;
  name: string;
  title: string | null;
  description: string | null;
  coverUrl: string | null;
}

interface ProductsGridProps {
  products: Product[];
  categoryName: string;
}

export function ProductsGrid({ products, categoryName }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.uuid}
          product={product}
          href={`/products/${encodeURIComponent(categoryName)}/${encodeURIComponent(product.name)}`}
        />
      ))}
    </div>
  );
}
