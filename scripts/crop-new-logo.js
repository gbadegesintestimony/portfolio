const sharp = require("sharp");
const path = require("path");

const inputPath = "C:\\Users\\testy\\.gemini\\antigravity-ide\\brain\\48df03ed-1b58-495c-bf19-de2b7816e533\\.user_uploaded\\media_1787244307622.jpg";
const publicDir = path.join(__dirname, "..", "public");

async function processNewLogo() {
  console.log("Processing new logo:", inputPath);

  // 1. Trim surrounding dark space
  const trimmedBuffer = await sharp(inputPath)
    .trim({ threshold: 25 })
    .toBuffer();

  // Save the exact cropped original
  await sharp(trimmedBuffer)
    .png()
    .toFile(path.join(publicDir, "logo-exact.png"));

  // 2. Create high-res transparent PNG
  const { data, info } = await sharp(trimmedBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const totalPixels = info.width * info.height;
  const outBuf = Buffer.alloc(totalPixels * 4);

  for (let i = 0; i < totalPixels; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const brightness = (r + g + b) / 3;

    if (brightness < 35) {
      // Dark background -> transparent
      outBuf[i * 4] = 0;
      outBuf[i * 4 + 1] = 0;
      outBuf[i * 4 + 2] = 0;
      outBuf[i * 4 + 3] = 0;
    } else {
      // White strokes and inner details -> preserve crisp color & alpha
      const alpha = Math.min(255, Math.round((brightness / 255) * 255 * 1.5));
      outBuf[i * 4] = 255;
      outBuf[i * 4 + 1] = 255;
      outBuf[i * 4 + 2] = 255;
      outBuf[i * 4 + 3] = alpha;
    }
  }

  // Save high-resolution 512x512 transparent logo
  await sharp(outBuf, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "logo.png"));

  await sharp(outBuf, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "logo-white.png"));

  console.log("Successfully generated high-res transparent logo from the new image!");
}

processNewLogo().catch(console.error);
