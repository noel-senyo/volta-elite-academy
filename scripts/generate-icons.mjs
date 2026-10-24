import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

function crc32(buffer) {
  let crc = ~0;
  for (let i = 0; i < buffer.length; i += 1) {
    crc ^= buffer[i];
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    }
  }
  return ~crc >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuffer = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function createPng(size) {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;

  const stride = size * 4 + 1;
  const raw = Buffer.alloc(stride * size);
  const center = (size - 1) / 2;
  const primary = [10, 42, 107, 255];
  const gold = [212, 169, 74, 255];
  const white = [255, 255, 255, 255];
  const azure = [30, 111, 217, 255];
  const sky = [142, 197, 255, 255];
  const aqua = [43, 179, 192, 255];

  const setPixel = (x, y, color) => {
    const px = Math.round(x);
    const py = Math.round(y);
    if (px < 0 || py < 0 || px >= size || py >= size) return;
    const index = py * stride + 1 + px * 4;
    raw[index] = color[0];
    raw[index + 1] = color[1];
    raw[index + 2] = color[2];
    raw[index + 3] = color[3];
  };

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const distance = Math.hypot(x - center, y - center);
      if (distance <= size * 0.48) {
        if (distance >= size * 0.43) setPixel(x, y, gold);
        else if (distance >= size * 0.4) setPixel(x, y, white);
        else setPixel(x, y, primary);
      }
    }
  }

  const top = size * 0.34;
  const bottom = size * 0.66;
  const thickness = Math.max(2, Math.round(size * 0.03));
  for (let y = top; y <= bottom; y += 1) {
    const progress = (y - top) / (bottom - top);
    const left = size * 0.32 + (center - size * 0.32) * progress;
    const right = size * 0.68 - (size * 0.68 - center) * progress;
    for (let offset = -thickness; offset <= thickness; offset += 1) {
      setPixel(left + offset, y, white);
      setPixel(right + offset, y, white);
    }
  }

  const waveColors = [azure, sky, aqua];
  waveColors.forEach((color, wave) => {
    const base = size * 0.74 + wave * size * 0.035;
    for (let x = size * 0.34; x < size * 0.66; x += 0.5) {
      const y = base + Math.sin((x / size) * Math.PI * 6) * size * 0.012;
      setPixel(x, y, color);
      setPixel(x, y + 1, color);
    }
  });

  const compressed = deflateSync(raw);
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", compressed),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function createIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0);
  entry.writeUInt8(0, 1);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

const icon = createPng(256);
writeFileSync("app/icon.png", icon);
writeFileSync("public/favicon.ico", createIco(icon));
console.log("wrote app/icon.png and public/favicon.ico");
