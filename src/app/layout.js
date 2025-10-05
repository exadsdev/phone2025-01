import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Script from "next/script";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleAds from "@/app/components/GoogleAds";




import { SITE, BRAND, DEFAULT_OG, KEYWORDS } from "./seo.config";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `${BRAND} | ขายมือถือ PG Phone ทุกรุ่น`,
  icons: { icon: "/icon.png" },
  description:
    "PG Phone ร้านขายมือถือออนไลน์ ยี่ห้อ PG Phone ทุกรุ่น เช่น PG V9, PG V8 และรุ่นอื่น ๆ พร้อมโปรโมชั่นพิเศษ",
  keywords: KEYWORDS.join(", "),
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: `${BRAND} | ขายมือถือ PG Phone ทุกรุ่น`,
    description:
      "PG Phone ร้านขายมือถือออนไลน์ ยี่ห้อ PG Phone ทุกรุ่น เช่น PG V9, PG V8 และรุ่นอื่น ๆ พร้อมโปรโมชั่นพิเศษ",
    images: [
      {
        url: DEFAULT_OG,
        width: 1200,   
        height: 630,
        alt: "PG Phone - ขายมือถือ PG Phone ทุกรุ่น",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | ขายมือถือ PG Phone ทุกรุ่น`,
    description:
      "PG Phone ร้านขายมือถือออนไลน์ ยี่ห้อ PG Phone ทุกรุ่น เช่น PG V9, PG V8 และรุ่นอื่น ๆ พร้อมโปรโมชั่นพิเศษ",
    images: [DEFAULT_OG],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <meta name="referrer" content="origin" />

           <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>


      </head>
      <body>
        <Main />
        <Header />
         <GoogleAds />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
