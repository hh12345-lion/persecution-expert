/**
 * Compress homepage PNGs to WebP for faster loads.
 * Run: node scripts/compress-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "../public/images");
const targets = ["folio-window-desk.png", "brief-ringbound.png"];

async function main() {
  for (const filename of targets) {
    const input = path.join(imagesDir, filename);
    if (!fs.existsSync(input)) {
      console.warn(`Skip missing ${filename}`);
      continue;
    }

    const output = path.join(imagesDir, filename.replace(/\.png$/i, ".webp"));
    const before = fs.statSync(input).size;
    await sharp(input)
      .resize(1200, null, { withoutEnlargement: true, fit: "inside" })
      .webp({ quality: 82 })
      .toFile(output);
    const after = fs.statSync(output).size;
    console.log(`${filename} -> ${path.basename(output)} (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
