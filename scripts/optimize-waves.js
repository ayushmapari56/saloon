import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('public/bg/waves.jpg');
const outputWebp = path.resolve('public/bg/waves.webp');
const outputAvif = path.resolve('public/bg/waves.avif');

async function processImage() {
  const meta = await sharp(inputPath).metadata();
  console.log(`Input dimensions: ${meta.width}x${meta.height}`);

  // 2x upscale to 1600 width, proportional height (~2832) with lanczos3
  await sharp(inputPath)
    .resize(1600, 2832, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill',
    })
    .webp({ quality: 85, effort: 6 })
    .toFile(outputWebp);

  await sharp(inputPath)
    .resize(1600, 2832, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill',
    })
    .avif({ quality: 80, effort: 5 })
    .toFile(outputAvif);

  const statWebp = fs.statSync(outputWebp);
  const statAvif = fs.statSync(outputAvif);

  console.log(`WebP generated: ${(statWebp.size / 1024).toFixed(1)} KB`);
  console.log(`AVIF generated: ${(statAvif.size / 1024).toFixed(1)} KB`);
}

processImage().catch(console.error);

