
import ProductCard from "./components/ProductCard";
import Image from "next/image";
import Script from "next/script";
import { products } from "./lib/products";

const SITE = "";

export const metadata = {
  title:
    "PG Phone | ร้านขายมือถือออนไลน์ PG ทุกรุ่น",
  description:
    "PG Phone ร้านขายมือถือออนไลน์ ทุกรุ่น เช่น PG V9, PG V8, PG V7 และรุ่นอื่น ๆ ส่งตรงถึงมือคุณด้วยคุณภาพและบริการมืออาชีพ",
  keywords: [
    "PG-Phone",
    "มือถือ",
    "สมาร์ทโฟน",
    "ร้านขายมือถือ",
    "ราคามือถือ",
    "ซื้อมือถือออนไลน์",
    "ผ่อนมือถือ",
    "PG-V9",
    "PG-V9 PRO",
  ],
  openGraph: {
    title:
      "PG Phone | ร้านขายมือถือออนไลน์ PG ทุกรุ่น",
    description:
      "PG Phone ร้านขายมือถือออนไลน์ ทุกรุ่น เช่น PG V9, PG V8, PG V7 และรุ่นอื่น ๆ ส่งตรงถึงมือคุณด้วยคุณภาพและบริการมืออาชีพ",
    url: "",
    siteName: "PG Phone Pro",
    images: [
      {
        url: "/img/review.jpg",
        width: 1200,
        height: 630,
        alt: "PG Phone - สมาร์ทโฟน Android ราคาสุดคุ้ม",
      },
    ],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PG Phone | ร้านขายมือถือออนไลน์ PG ทุกรุ่น",
    description:
      "PG Phone ร้านขายมือถือออนไลน์ ทุกรุ่น เช่น PG V9, PG V8, PG V7 และรุ่นอื่น ๆ ส่งตรงถึงมือคุณด้วยคุณภาพและบริการมืออาชีพ",
    images: ["/img/review.jpg"],
  },
};

function StructuredData() {
  const schema = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "PG-Phone",
      image: [
        "/img/review.jpg",
        "/img/review.jpg",
      ],
      description:
        "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
      brand: {
        "@type": "Brand",
        name: "PG-Phone",
      },
      offers: {
        "@type": "Offer",
        url: "",
        priceCurrency: "THB",
        price: "9900",
        priceValidUntil: "2025-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "PG-Phone",
          url: "",
          logo: "/img/logo.png",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PG Phone Pro",
      url: "",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "หน้าแรก",
          item: "",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "สินค้า",
          item: "/products",
        },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
export default function LandingPage() {
  return (
    <>
  
      <section className="bg-light py-5 text-center">
        <div className="container">
            <div className="col-lg-6 mx-auto">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <Image
                src="/img/review.jpg"
                alt="PG Phone สมาร์ทโฟน 4G หน้าจอ 6 นิ้ว"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

        
          <h1 className="mb-3">PG Phone - มือถือคุณภาพ ทุกรุ่น</h1>
          <p className="lead mb-4">
            ร้านขายโทรศัพท์มือถือราคาถูกยี่ห้อ PG | สมาร์ทโฟน 4G ระบบแอนดรอยด์
            หน้าจอ 6 นิ้ว ความละเอียด HD เล่นเกมลื่น แบตอึดทน
            ปลดล็อคใบหน้ารวดเร็ว พร้อมโปรโมชั่นแรงๆ จาก PG เว็บตรง
          </p>
          <a href="#products" className="btn btn-primary btn-lg">
            ดูสินค้าเลย
          </a>
        </div>
      </section>
      <section id="products" className="container py-5">
        <h2 className="text-center mb-4">สินค้า PG Phone</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.slug} className="col">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Key Details / Specs */}
      <section id="details" className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="mb-3">รายละเอียดสำคัญของสินค้า</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>ระบบปฏิบัติการ:</strong> แอนดรอยด์ (Android)</li>
              <li className="list-group-item"><strong>หน้าจอ:</strong> กว้าง 6 นิ้ว ความละเอียด HD ชัดเจนทุกมุมมอง</li>
              <li className="list-group-item"><strong>เครือข่าย:</strong> สมาร์ทโฟน 4G รองรับ 2 ซิม</li>
              <li className="list-group-item"><strong>การปลดล็อค:</strong> สแกนใบหน้า ปลอดภัยและรวดเร็ว</li>
              <li className="list-group-item"><strong>ประสิทธิภาพ:</strong> เล่นเกมลื่นไม่มีสะดุด แบตอึดทน</li>
              <li className="list-group-item"><strong>ความคุ้มค่า:</strong> ร้านขายโทรศัพท์ราคาถูกที่สุด PG เว็บตรง ช่วงโปรโมชั่นแรงๆ</li>
              <li className="list-group-item"><strong>ความมั่นใจ:</strong> PG เว็บตรงจากต่างประเทศ 100% เว็บไซต์จากสิงคโปร์</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <Image
                src="/img/review.jpg"
                alt="PG Phone สมาร์ทโฟน 4G หน้าจอ 6 นิ้ว"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

  
      <section id="promotions" className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="mb-3 text-center">PG เว็บตรงช่วงโปรโมชั่นแรงๆ</h2>
          <p className="text-center mb-4">
            PG เว็บตรงเรามีโปรโมชั่นมากมาย ราคาพิเศษคุ้มค่า ส่งตรงจากต่างประเทศ 100%
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">โปรเปิดตัว</h5>
                  <p className="card-text">
                    โทรศัพท์มือถือ PG ราคาถูก หน้าจอ 6 นิ้ว HD สมาร์ทโฟน 4G
                    รองรับ 2 ซิม เล่นเกมลื่น แบตอึดทน
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">เว็บตรงสิงคโปร์</h5>
                  <p className="card-text">
                    PG เว็บตรงเว็บไซต์จากสิงคโปร์ ของแท้ 100% มั่นใจได้ในคุณภาพและบริการ
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">จัดเต็มสแกนหน้า</h5>
                  <p className="card-text">
                    ปลดล็อคหน้าจอด้วยระบบสแกนหน้า รวดเร็ว ปลอดภัย ใช้งานสะดวกในทุกสถานการณ์
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mt-4 mb-0">
            *เงื่อนไขเป็นไปตามที่ร้านค้ากำหนด โปรดตรวจสอบรายละเอียดก่อนสั่งซื้อ
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="highlights" className="container py-5">
        <h2 className="text-center mb-4">จุดเด่นของ PG Phone</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div className="col">
            <h5>คุณภาพสูง</h5>
            <p>วัสดุและชิ้นส่วนคุณภาพสูง รับประกันความทนทาน</p>
          </div>
          <div className="col">
            <h5>กล้องคมชัด</h5>
            <p>กล้องหน้า-หลังความละเอียดสูง เก็บภาพได้คมชัด</p>
          </div>
          <div className="col">
            <h5>ประสิทธิภาพลื่นไหล</h5>
            <p>CPU แรง เล่นเกม ดูหนัง ใช้งานทั่วไปลื่นไหล</p>
          </div>
        </div>
      </section>

      {/* Extended Description */}
      <section id="more-info" className="container pb-5">
        <h2 className="mb-3">ข้อมูลเพิ่มเติม</h2>
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <p className="mb-2">
              ร้านขายโทรศัพท์มือถือราคาถูกยี่ห้อ PG โทรศัพท์มือถือระบบแอนดรอยด์
              ร้านขายโทรศัพท์มือถือราคาถูก PG เว็บตรงจากต่างประเทศ 100% หน้าจอความกว้าง 6 นิ้ว
              ความละเอียดหน้าจอ HD ร้านขายโทรศัพท์ราคาถูกที่สุด PG เล่นเกมลื่นไม่มีสะดุด
              แบตอึดทน PG เว็บตรงช่วงโปรโมชั่น PG เว็บตรงเว็บไซต์จากสิงคโปร์
            </p>
            <p className="mb-2">
              ร้านขายโทรศัพท์ราคาถูกที่สุด PG ปลดล็อคหน้าจอด้วยระบบสแกนหน้า
              สมาร์ทโฟน 4G หน้าจอกว้าง 6 นิ้ว ความละเอียดหน้าจอ HD รองรับ 2 ซิม 4G
              PG เว็บตรงช่วงโปรโมชั่นแรงๆ PG เว็บตรงเรามีโปรโมชั่นมากมาย
            </p>
            <p className="mb-2">
              โทรศัพท์มือถือ PG ราคาถูก โทรศัพท์มือถือ PG สมาร์ทโฟน 4G หน้าจอกว้าง 6 นิ้ว
              รองรับ 2 ซิม 4G ร้านขายโทรศัพท์ราคาถูกที่สุด PG เว็บตรง ช่วงโปรโมชั่นแรงๆ
              ปลดล็อคหน้าจอด้วยระบบสแกนหน้า PG เว็บตรงจากต่างประเทศ 100%
              เล่นเกมลื่นไม่มีสะดุด แบตอึดทน PG เว็บตรงเว็บไซต์จากสิงคโปร์ PG เว็บตรง 100%
            </p>
            <hr />
            <h5 className="mt-3">ตัวอย่างมือถือ RAM 4 GB (ข้อมูลเพิ่มเติม)</h5>
            <p className="mb-0">
              มือถือ RAM 4 GB รุ่นแรก เริ่มต้นกันด้วย Motorola One Action ...
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-5">
        <h2 className="text-center mb-4">ติดต่อเรา</h2>
        <p className="text-center mb-4">
         📞 โทร: 098-158-8303
        </p>
        <div className="text-center">
          <a
            href="https://line.me/ti/p/yourlineid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success me-2"
          >
           LINE
          </a>
          <a
            href="https://www.instagram.com/pg.phone.shop_korat"
            target="_blank"
            rel="noopener noreferrer"
          className="btn btn-success me-2"
          >
           Facebook
          </a>
          <a
            href="https://www.instagram.com/pg.phone.shop_korat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
           instagram
          </a> 


        </div>
      </section>
    </>
  );
}
