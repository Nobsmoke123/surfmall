import type { VercelRequest, VercelResponse } from "@vercel/node";

import path from "path";
import fs from "fs";
import type { Product } from "../src/types/Product";

const dbPath = path.join(process.cwd(), "src/data/db.json");

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const raw = fs.readFileSync(dbPath, "utf-8");
  const db: { products: Product[] } = JSON.parse(raw);

  res.status(200).json(db.products);
}
