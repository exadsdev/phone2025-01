"use client";

import React, { useEffect, useState } from "react";

export default function AdminSettings() {
  const [form, setForm] = useState({ IMG_BASE_URL: "", GOOGLE_TAG_ID: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/settings");
      const json = await res.json();
      if (json.ok) setForm(json.data);
      setLoading(false);
    })();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("กำลังบันทึก...");
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const json = await res.json();
    setMsg(json.ok ? "✅ บันทึกสำเร็จ" : "❌ บันทึกล้มเหลว");
  }

  if (loading) return <div className="p-4">กำลังโหลด...</div>;

  return (
    <div className="container p-4">
      <h2>Admin Settings</h2>
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
