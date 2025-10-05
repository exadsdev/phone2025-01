"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSettings() {
  const [form, setForm] = useState({ IMG_BASE_URL: "", GOOGLE_TAG_ID: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ตรวจสอบการล็อกอินก่อนโหลดหน้า
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login");
    } else {
      // โหลด settings
      (async () => {
        try {
          const res = await fetch("/api/settings");
          const json = await res.json();
          if (json.ok) setForm(json.data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("กำลังบันทึก...");
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      setMsg(json.ok ? "✅ บันทึกสำเร็จ" : "❌ บันทึกล้มเหลว");
    } catch (err) {
      console.error(err);
      setMsg("❌ เกิดข้อผิดพลาด");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // ลบ session
    router.push("/admin/login");
  };

  if (loading) return <div className="p-4">กำลังโหลด...</div>;

  return (
    <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Admin Settings</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>IMG_BASE_URL</label>
          <input
            type="url"
            className="form-control"
            value={form.IMG_BASE_URL}
            onChange={(e) => setForm({ ...form, IMG_BASE_URL: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>GOOGLE_TAG_ID</label>
          <input
            type="text"
            className="form-control"
            value={form.GOOGLE_TAG_ID}
            onChange={(e) => setForm({ ...form, GOOGLE_TAG_ID: e.target.value })}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          บันทึก
        </button>
        {msg && <div className="mt-2">{msg}</div>}
      </form>
    </div>
  );
}
