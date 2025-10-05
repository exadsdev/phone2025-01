"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="text-decoration-none text-dark">
      <div className="card h-100 border-0 shadow-sm">
        <div className="ratio ratio-1x1">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title mb-1">{product.name}</h5>
          <p className="card-text text-danger mb-0">{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
