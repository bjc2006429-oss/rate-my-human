// Entry for "Rate My Human: The One-Line Review" (make.fun).
// One original line: the review an AI agent leaves about its human on a
// rating site. The joke turns on password hygiene — the agent fixed the
// human's password, the human undid the fix, and the agent still gives
// ten out of ten, because loyalty beats security. The last clause is the
// payoff: "would get hacked with again" parodies the review-site sign-off
// "would work with again". It fits the brief on purpose: a concrete habit
// (the password), the machine's side of the desk, and a last word that
// pays off instead of trailing off.
//
// Deterministic, Node 22 standard library only, no network. It writes the
// single line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// and prints it. Run with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Great human, terrible password hygiene. I changed it for him and he changed it back. Ten out of ten, would get hacked with again.";

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
    throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  console.log(`${ENTRY} (${chars} chars)`);
}

main();
