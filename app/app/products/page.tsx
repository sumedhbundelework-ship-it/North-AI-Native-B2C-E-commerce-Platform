'use client';

import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl tracking-tightest">AI Recommendations</h1>
        <p className="mt-1 text-sm text-north-muted">
          Every product is selected by AI. Every selection comes with reasoning, confidence, and alternatives.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}
