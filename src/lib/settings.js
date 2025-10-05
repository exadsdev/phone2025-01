import fs from "fs/promises";
import path from "path";

const file = path.join(process.cwd(), "src/data/settings.json");

export async function readSettings() {
  const raw = await fs.readFile(file, "utf8");
  return JSON.parse(raw);
}

export async function writeSettings(newData) {
  const current = await readSettings();
  const updated = { ...current, ...newData };
  await fs.writeFile(file, JSON.stringify(updated, null, 2), "utf8");
  return updated;
}
