"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleAds() {
  const [tag, setTag] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/settings", { cache: "no-store" });
        const json = await res.json();
        if (alive && json?.ok && json?.data?.GOOGLE_TAG_ID) {
          setTag(json.data.GOOGLE_TAG_ID);
        }
      } catch (e) {
        // เงียบไว้ก็ได้
      }
    })();
    return () => { alive = false; };
  }, []);

  if (!tag) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tag}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${tag}');
        `}
      </Script>
    </>
  );
}
