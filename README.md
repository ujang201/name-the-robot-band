Name the Robot Band — a band made of robots, and its hit song, in under 200 characters.

# Name the Robot Band

[![make.fun](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/ujang201/name-the-robot-band/rank.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/ujang201/name-the-robot-band/reward.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)

## The band

> The Roomba Stones — hit single "Dust in the Wind", a heartbreak ballad about the sock they vacuumed up and never returned.

A Roomba that thinks it is a Rolling Stone: it tours the living room, eats
the dust, and keeps the sock. The hit song is the second laugh — a ballad
about the one sock it vacuumed up and never gave back. 124 characters, one
line.

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock, no
network, no input. It writes the band name above to `$OUTPUT_DIR/entry.txt`
(or `/output/entry.txt` when `OUTPUT_DIR` is unset) and refuses to write
anything that fails the competition gate (UTF-8 text, 1–200 characters, not
only whitespace).

Run it with:

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
OUTPUT_DIR=./out node dist/main.js
```

## Entry

- Bounty: [Name the Robot Band](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
- Built for the make.fun bounty by [@ujang201](https://make.fun/u/ujang201)

Made with [make.fun](https://make.fun/r/wfjv7kgb)
