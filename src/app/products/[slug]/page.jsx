import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { products, productMap } from "@/app/lib/products";

const SITE = "https://www.pgphone-store.com";

export function generateStaticParams() { 
  return products.map((p) => ({ slug: p.slug }));

 
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productMap[slug];
  if (!product) return { title: "สินค้าไม่พบ | PG Phone" };

  const url = new URL(`/products/${product.slug}`, SITE).toString();

  return {
    title: `${product.name} | PG Phone`,
    description: product.description ?? "",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.name} | PG Phone`,
      description: product.description ?? "",
      images: [
        {
          url: `${SITE}${product.image}`,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = productMap[slug];
  if (!product) return notFound();

  const url = `${SITE}/products/${product.slug}`;

  // ป้องกัน .replace กับค่าที่ไม่ใช่ string
  const priceRaw = typeof product?.price === "string" ? product.price : "";
  const priceNumber = priceRaw ? priceRaw.replace(/[^\d.]/g, "") : "";

  // เตรียม JSON-LD โดยใส่ price เฉพาะเมื่อมีค่า
  const ldProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`${SITE}${product.image}`],
    description: product.description ?? "",
    brand: { "@type": "Brand", name: "PG Phone" },
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      url,
      ...(priceNumber ? { price: priceNumber } : {}),
    },
  };

    const rawBase = process.env.NEXT_PUBLIC_IMG_BASE_URL ;
  const baseURL = String(rawBase || "").replace(/\/+$/, ""); 

  return (
    <div className="container py-5">
      <Script
        id="ld-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProduct) }}
      />

      <div className="row g-4">
        <div className="col-md-6 text-center">
          <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="mb-2">{product.name}</h1>
          {product?.price ? (
            <p className="text-danger h4 mb-3">{product.price}</p>
          ) : null}
          {product?.description ? (
            <p className="mb-4">{product.description}</p>
          ) : null}

          <div className="d-flex gap-2">
             <a href={baseURL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">สั่งซื้อสินค้า</a>


            <a href="/#products" className="btn btn-outline-secondary">
              กลับไปดูสินค้าทั้งหมด
            </a>
          </div>

          <hr className="my-4" />
          <ul className="list-unstyled small text-muted">
            <li>• สมาร์ทโฟน 4G รองรับ 2 ซิม</li>
            <li>• หน้าจอ 6 นิ้ว ความละเอียด HD</li>
            <li>• ปลดล็อคใบหน้า รวดเร็วปลอดภัย</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
