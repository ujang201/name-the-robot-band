// Name the Robot Band — deterministic one-line entry.
//
// The program writes exactly one funny robot band name, plus a few words
// on the band's hit song, to $OUTPUT_DIR/entry.txt (or /output/entry.txt
// when OUTPUT_DIR is unset). No randomness, no clock, no network, no
// input: the same bytes every run.
//
// A Roomba that thinks it is a Rolling Stone: it tours the living room,
// eats the dust, and keeps the sock. The hit song is the second laugh —
// a ballad about the one sock it vacuumed up and never gave back.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BAND =
  'The Roomba Stones — hit single "Dust in the Wind", a heartbreak ballad about the sock they vacuumed up and never returned.';

function isValid(text: string): boolean {
  return (
    text.length >= 1 &&
    text.length <= 200 &&
    text.trim().length > 0 &&
    !text.includes("\n")
  );
}

if (!isValid(BAND)) {
  throw new Error(
    `entry fails the gate: ${BAND.length} characters (must be 1-200, not only whitespace)`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BAND, "utf8");
