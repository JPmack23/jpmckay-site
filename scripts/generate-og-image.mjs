import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Use JP's hero photo as base
const heroPath = path.join(rootDir, 'src', 'assets', 'jp-hero.jpg');
const outputPath = path.join(rootDir, 'public', 'og-image.jpg');

// OG image dimensions
const WIDTH = 1200;
const HEIGHT = 630;

// Create a dark gradient overlay with text as SVG
const svgOverlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="overlay" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0a0a0f" stop-opacity="0.92"/>
      <stop offset="55%" stop-color="#0a0a0f" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0a0a0f" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#overlay)"/>

  <!-- Name -->
  <text x="80" y="240" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="white">
    JP McKay
  </text>

  <!-- Tagline -->
  <text x="80" y="310" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#9ca3af">
    Business Builder  ·  Hamilton, NZ
  </text>

  <!-- Businesses -->
  <text x="80" y="380" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#60a5fa">
    1Team  ·  LeadsBD  ·  Rove Agency
  </text>

  <!-- Website -->
  <text x="80" y="540" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#6b7280">
    jpmckay.me
  </text>

  <!-- Accent line -->
  <rect x="80" y="260" width="120" height="3" rx="1.5" fill="#3b82f6"/>
</svg>`;

async function generate() {
  // Resize hero photo to fill OG dimensions
  const heroResized = await sharp(heroPath)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Composite the SVG overlay on top of the photo
  const result = await sharp(heroResized)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 85 })
    .toFile(outputPath);

  console.log(`OG image created: ${outputPath}`);
  console.log(`Size: ${result.width}x${result.height}, ${(result.size / 1024).toFixed(0)}KB`);
}

generate().catch(console.error);
