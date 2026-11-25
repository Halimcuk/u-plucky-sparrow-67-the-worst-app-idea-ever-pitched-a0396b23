// MugMemory — the worst app idea ever pitched, in one sentence.
// A fixed, deterministic entry: no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "MugMemory photographs your mug every morning and solemnly archives which side the handle faced, so future historians will know exactly how you held your coffee.";

// Competition gate: entry.txt must be 1 to 240 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-240 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
