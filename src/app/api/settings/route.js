import { NextResponse } from "next/server";
import { readSettings, writeSettings } from "@/lib/settings";

export const runtime = "nodejs";

export async function GET() {
  try {
    const data = await readSettings();
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const saved = await writeSettings(body);
    return NextResponse.json({ ok: true, data: saved });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
