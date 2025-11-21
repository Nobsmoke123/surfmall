import type { VercelRequest, VercelResponse } from "@vercel/node";

import path from "path";
import fs from "fs";

const dbPath = path.join(process.cwd(), "src/data/db.json");

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const raw = fs.readFileSync(dbPath, "utf-8");
  const db = JSON.parse(raw);

  res.status(200).json(db);
}
