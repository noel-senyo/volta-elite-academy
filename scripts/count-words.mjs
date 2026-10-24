import { readFileSync } from "node:fs";

const source = readFileSync("data/school.ts", "utf8");
const match = source.match(/message:\s*"([^"]+)"/);
if (!match) {
  console.error("message not found");
  process.exit(1);
}
const words = match[1].trim().split(/\s+/);
console.log(words.length);
