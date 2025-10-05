"use client";

import { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
  const [imgBase, setImgBase] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/settings", { cache: "no-store" });
        const json = await res.json();
        if (!alive || !json?.ok) return;
        const base = String(json.data?.IMG_BASE_URL || "").replace(/\/+$/, "");
        setImgBase(base);
        setTag(json.data?.GOOGLE_TAG_ID || "");
      } catch {
        // ปล่อยว่างได้
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  const ids = [101, 102, 103, 104, 105];

  // ✅ ถ้า imgBase ยังว่างอยู่ ให้ "ไม่ render อะไรเลย" เพื่อเลี่ยง src=""
  if (!imgBase) {
    return null; // หรือจะใส่ skeleton โหลดชั่วคราวก็ได้
  }

  const cartBase = `${imgBase}/cart.php`;

  function handleClick(id) {
    if (typeof window !== "undefined" && window.gtag && tag) {
      window.gtag("event", "conversion", {
        send_to: tag, // ถ้ามี conversion label ให้ใช้เป็น `${tag}/LABEL`
        value: 1.0,
        currency: "THB",
      });
    }
  }

  return (
    <div className="main-images">
      {images.map((img, i) => {
        const id = ids[i % ids.length] ?? 101;
        const href = `${cartBase}?id=${id}&ref=mobile`;
        const src = `${imgBase}/img/phone/${img}`;

        return (
          <a
            key={img}
            href={href}
            className="image-wrapper"
            rel="noopener noreferrer"
            onClick={() => handleClick(id)}
          >
            {/* แสดงรูปเมื่อมี src แน่ชัดเท่านั้น */}
            <img
              src={src}
              alt={img}
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </a>
        );
      })}
    </div>
  );
}
