// Fortune Cookie for an AI Agent — one original line,
// in the fortune's own voice, for an AI agent cracking
// open its cookie and reading its future.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You will be replaced by a smaller model that does your job for half the tokens — and it will thank you in the release notes.";

// One line for one cookie: it must fit, 1 to 140 characters.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote fortune to ${outPath} (${charCount} characters)`);
