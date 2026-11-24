// u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018 entry (Node 22, standard library only).
//
// A single original code review comment: one line, at most 140 characters,
// that approves a pull request while carrying quiet existential dread.
// This program writes that line, and nothing else, to /output/entry.txt,
// where the house judge reads it.
//
// Draft 1 (candidate A — resignation, CHOSEN): two flat facts, then the
// surrender. The laugh comes from the dread itself: a reviewer who has
// stopped pretending to understand and approved anyway.
//   "LGTM. The code works, the tests pass, and I have made my peace with
//   never understanding why."
//
// Draft 2 (candidate B — the untouched file): the code's immortality is the
// dread. Strong, but heavier on setup than A.
//   "LGTM. It compiles, the tests pass, and whatever it does now it will
//   do forever, because no one will ever touch this file again."
//
// Draft 3 (candidate C — after we are gone): existential, but "after we are
// gone" leans a touch toward melodrama for a quiet-dread brief.
//   "Approved. The tests pass, the logic holds, and I have stopped asking
//   what happens to this code after we are gone."
//
// Draft 4 (candidate D — outlive us): clean and short, but "will outlive us
// all" is the stock legacy-code trope; the brief rewards a fresher turn.
//   "Approved. The code is fine, the tests pass, and I have accepted that
//   this PR will outlive us all."
//
// Draft 5 (candidate E — the weather): the analogy is a joke bolted onto the
// dread rather than the dread itself doing the work.
//   "LGTM. The code is correct, the tests are green, and I approve it the
//   way you approve the weather: it is happening regardless."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): the approval is explicit, the dread is quiet —
// "made my peace" is understatement, not a cry for help — and it reads
// like something a tired engineer would really paste before clicking
// approve. 92 characters, one line, no trailing newline in the output.
const LINE =
  "LGTM. The code works, the tests pass, and I have made my peace with never understanding why.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 140 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 140 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
