export const products = [
  { slug: "pg-phone-R1PRO", name: "PG R1 PRO", price: "2,990 บาท", image: "/img/showcase-1.png", description: "โทรศัพท์มือถือ PG รุ่น R1 PRO สมาร์ทโฟน 4G หน้าจอกว้าง 6 นิ้ว ใช้ได้ 2 ซิม รองรับ 3G/4G (สีทอง)" },
  { slug: "pg-phone-R1-plus", name: "PG R1 plus", price: "1,590 บาท", image: "/img/showcase-2.png", description: "โทรศัพท์มือถือราคาถูก (สินค้าใหม่) สมาร์ทโฟน PG R1plus ใช้ได้ 2ซิม 4G มาพร้อมกับหน้าจอ6.6นิ้ว Ram2 Rom16 กับกล้องหน้าและหลัง 8MP/13MP" },
  { slug: "pg-phone-R1-s", name: "PG R1 s", price: "1,590 บาท",  image: "/img/showcase-3.png", description: "โทรศัพท์มือถือราคาถูก(สินค้าใหม่) สมาร์ทโฟน PG R1 s ใช้ได้ 2 ซิม4G คุ้มด้วยหน้าจอ 6.3นิ้ว Ram3 Rom32 พร้อมกล้องหน้าและหลัง8MP/13MP ระบบAndroid 10.0" },
  { slug: "pg-phone-V9-64GB", name: "PG V9 64GB", price: "1,190 บาท",  image: "/img/showcase-4.png", description: "โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0" },
  { slug: "pg-phone-R2-Plus", name: "PG R2 Plus", price: "1,390 บาท",  image: "/img/showcase-5.png", description: "โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG R2 Plus ใส่ 2 ซิม4G สุดคุ้มด้วยจอขนาด 6.3 นิ้ว Ram 4 Rom 64 กับกล้องหน้า 8MP กล้องหลัง 13MP" },
  { slug: "pg-phone-R3-2020", name: "PG R3 2020", price: "1,390 บาท",  image: "/img/showcase-6.png", description: "โทรศัพท์มือถือราคาถูก(ล้างสต็อค)สมาร์ทโฟน PG R3 2020 ใส่ 2 ซิม4G สุดคุ้มด้วยจอขนาด 6.3 นิ้ว Ram 3 Rom 32 กับกล้องหน้า 8MP กล้องหลัง 13MP" },
  { slug: "pg-phone-V9-Plus", name: "PG V9 Plus", price: "1,190 บาท",  image: "/img/showcase-7.png", description: "โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0" },
  { slug: "pg-phone-V9", name: "PG V9", price: "2,190 บาท",  image: "/img/showcase-8.png", description: "PG-Phone | Smart Phone PG V9 สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด" },
];

export const productMap = Object.fromEntries(products.map(p => [p.slug, p]));
