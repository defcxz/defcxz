#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';

const width = 1200;
const height = 630;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, '..', 'public', 'assets');
const outPath = path.join(outDir, 'og.png');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const png = new PNG({ width, height });

// Simple gradient background (dark to slightly lighter)
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (width * y + x) << 2;
    const t = y / height;
    const base = 10; // ~#0a0a0a
    const col = Math.round(base + t * 30); // small gradient
    png.data[idx] = col;
    png.data[idx + 1] = col;
    png.data[idx + 2] = col;
    png.data[idx + 3] = 255;
  }
}

png.pack().pipe(fs.createWriteStream(outPath)).on('finish', () => {
  console.log('Generated', outPath);
});
