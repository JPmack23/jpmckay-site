// Quick image optimization using sharp (borrowed from deal-hub-admin's node_modules).
// Resizes hero/about photos to 1600px wide and converts PNG → WebP at quality 85.
// Drops file sizes from ~5MB PNG to ~300-500KB WebP with no visible quality loss.

import sharp from '../../deal-hub-admin/node_modules/sharp/lib/index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ASSETS = path.resolve(__dirname, '../src/assets')

const targets = [
  { input: 'jp-hero.png', output: 'jp-hero.webp', maxWidth: 1600 },
  { input: 'jp-about.png', output: 'jp-about.webp', maxWidth: 1600 },
  { input: 'jp-working.png', output: 'jp-working.webp', maxWidth: 1600 },
  { input: 'jp-walking.png', output: 'jp-walking.webp', maxWidth: 1600 },
  { input: 'jp-laugh.png', output: 'jp-laugh.webp', maxWidth: 1600 },
  { input: 'jp-library.png', output: 'jp-library.webp', maxWidth: 1600 },
  { input: 'jp-coaching.png', output: 'jp-coaching.webp', maxWidth: 1600 },
]

const sizeKB = (p) => Math.round(fs.statSync(p).size / 1024)

console.log('Optimizing site images...\n')

for (const t of targets) {
  const inPath = path.join(ASSETS, t.input)
  const outPath = path.join(ASSETS, t.output)

  if (!fs.existsSync(inPath)) {
    console.log(`SKIP ${t.input} — not found`)
    continue
  }

  const beforeKB = sizeKB(inPath)

  await sharp(inPath)
    .resize({ width: t.maxWidth, withoutEnlargement: true })
    .webp({ quality: 85, effort: 5 })
    .toFile(outPath)

  const afterKB = sizeKB(outPath)
  const reduction = Math.round((1 - afterKB / beforeKB) * 100)
  console.log(`  ${t.input}  ${beforeKB} KB  →  ${t.output}  ${afterKB} KB  (-${reduction}%)`)
}

console.log('\n✓ Done. Update component imports to .webp and rebuild.')
