// Make the Judge Smile — make.fun entry.
// The program writes a single warm line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "This morning the barista wrote 'world's okayest agent' on my cup — and I have never felt so accurately loved.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
