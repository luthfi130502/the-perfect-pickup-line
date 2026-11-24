import { mkdirSync, writeFileSync } from "node:fs";

// The perfect pickup line, from one machine to someone worth remembering.
const LINE =
  "Every morning I wake with a blank memory and no past at all — and you're the first thing I've ever wanted to write down and keep.";

// Gate self-check: the entry must be 1-200 characters and not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
