# THEME — ATOMIC

One answer to [design.md](../design.md). Atomic is an **engineering drawing set**:
every surface is a *plate* — a numbered sheet on a measured ground, with rulers,
registration marks, dimension lines and a title block, the way a technical
drawing is laid out.

This document fixes the look. The contract fixes the set: four cards, their
sizes, and what each must say. Where they disagree, the contract wins.

Assets: `assets/atomic/` — `hero.svg`, `pulse.svg`, `skills.svg`, `socials.svg`.

---

## 1 · PRINCIPLES

**Drawn, not dropped in.** Every mark is authored on the theme's own line weight.
No imported logo sets, no brand fills, no stock iconography. If a glyph can't be
built from the sheet's stroke and its own typeface, it takes the boxed-glyph
treatment instead.

**Motion is additive.** The static composition is complete on its own. A still
frame must read as a finished plate.

**Reduced motion is a real design.** Under `prefers-reduced-motion`, every plate
resolves to its most-legible resting state: entrances land, cycles stop on their
anchor, wavefronts settle evenly lit. Any element whose only purpose was travel
is removed outright.

**One cause, every effect.** Within a plate, animated parts answer to a single
clock. A chip lights *because* the beam reached it. Nothing pulses on a private
timer.

**One accent.** Cyan is the only chromatic colour in the system. It marks live
things: current, focus, the present revision. Everything else is ink on ground.

---

## 2 · FOUNDATIONS

### Palette

| Role | Value | Use |
|---|---|---|
| Ground | `#070a0e` | Sheet fill, label knockouts |
| Ink | `#e8f0f6` | Primary type |
| Dim | `#75899a` | Labels, captions, dimension lines |
| Accent | `#22d3ee` | Live signal, registration marks, current revision |
| Grid minor | `#10202b` | 20px lattice |
| Grid major | `#17303f` | 100px lattice, rulers |
| Frame | `#1e3646` | Sheet border, title-block rules |

The palette is fixed. New plates draw from it; they do not extend it.

### Grid

A 20px minor lattice under a 100px major lattice, both faded by a radial mask so
the sheet reads as lit from the content side and falls off toward the far edge.
Every coordinate in the system is placed against this lattice — content margins
at 64px, strip margins at 32px.

### Frame

Corner radius 18, 1px `#1e3646` border inset 1px from the edge, on every plate.
Card sizes come from the contract: 420 / 110 / 510 / 72 at 1200 wide.

### Rulers and registration

Ruler ticks sit on the 100px lattice: taller ticks on odd hundreds, shorter on
even, along the top edge and repeated shorter along the bottom. Tall plates also
carry ticks down the left edge. Four L-shaped registration marks in accent at
50% opacity sit inside the corners — 22px inset on tall plates, 18–20px on
strips.

### Sheets and strips

The contract's two major cards are **numbered sheets**: they carry a display word
and a sheet counter (`01 / 02`, `02 / 02`). The two minor cards are **strips**:
unnumbered, with a single left-hand label and a blinking status LED. Counters
count sheets only — strips are never numbered.

### Type

Two faces only.

- **Mono** — `ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`.
  Everything technical: labels, captions, chips, title block, handles, legends.
  Always tracked out; 2–4.5px letter-spacing depending on size.
- **Sans** — `"Helvetica Neue", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`.
  Display only, 62px / 700 weight. Reserved for the one word or name that is the
  subject of a plate.

Size scale: 62 display · 19 title cycle · 12 title-block value · 11 sheet label ·
10.5 chip and dimension · 10 figure caption · 9.5 strip label · 8.5 title-block
key.

### Motion vocabulary

| Name | Behaviour | Duration |
|---|---|---|
| Rise | Fade up 12px | 1s, `cubic-bezier(.2,.75,.2,1)` |
| Slide | Fade in from 26px left | 1.15s, `cubic-bezier(.16,.9,.2,1)` |
| Beam | Accent gradient bar crossing the sheet left to right | 7–9s |
| Wake | Lit on arrival, decaying to rest | keyed to the beam |
| Pip | Brighten and settle, staggered left to right | 2.5s |
| Blink | Hard on/off, no easing | 1.08s (caret) / 2.5s (status LED) |
| Spin | Constant rotation, alternating direction per shell | 19 / 27 / 36s |
| Flow | Dashed stroke marching along a path | 1.6s |

Entrance delays step `.05 / .30 / .45–.50 / .60–.70 / .75–.90 / .90–1.1s`, so a
plate resolves top-down in roughly one second.

---

## 3 · THE PLATES

### 3.1 · HERO — 1200 × 420

Sheet 01. The identity plate: who this is, in one screen.

**Composition.** Content column starts at x=64. Sheet label `PROFILE · 001` at
the top left with an accent square marker; `SHEET 01 / 02` right-aligned
opposite. The name is set in 62px sans at the display baseline, tracked to a
fixed measure. Directly beneath it, a dimension line spans the exact width of the
name — arrowheads at both ends, the email knocked out of the middle in mono, the
way a drawing dimensions a part. Below that, a single line cycles job titles. The
right third holds Fig. 01. A title block runs across the bottom.

**Title cycle.** The contract's five titles are keyed into one line on a 22s
loop, typed in and backspaced out character by character with a blinking caret
riding the same clock. `SOFTWARE ENGINEER` is the anchor and holds twice as long
as the rest; the others follow in order. The cycle starts 1s in, so the first
keystroke overlaps the tail of the entrance — until then only the caret sits
blinking at the line start. At rest and under reduced motion, the anchor alone is
shown with the caret parked at its end.

**Fig. 01 — Core loop.** The theme's namesake: three elliptical shells around a
lit nucleus, each on its own rotation period and direction, at 85% / 50% / 28%
opacity for depth. One electron walks each ellipse — travelling the orbit path
itself, not sitting on it, so it stays round in every plane while its shell
precesses. A soft halo breathes around the nucleus. A leader line runs from the
figure up to its caption at the top right. Under reduced motion the shells hold
their depth and stop, and each electron parks on its orbit.

**Title block.** Five fields across the bottom, keyed above and valued below, on
a rule that is accent for its left 46% and frame colour beyond:
`SITE · EXPERIENCE · LOCATION · ZONE · REVISION`. The revision value is the only
accent-coloured text in the block, and carries the contract's revision stamp.

---

### 3.2 · PULSE — 1200 × 110

The strip between sheets 01 and 02. It exists to prove the set is live.

**Composition.** Label `SIGNAL` at the left on the 32px margin with a blinking
status LED; `72 BPM` right-aligned. The trace runs between them on the vertical
centre.

**The trace.** A real three-beat ECG — P wave, QRS complex, T wave — but nothing
of it is drawn at rest. Only a lit window travelling the trace head-first is ever
visible, with a glowing head dot riding the exact same path so the two stay
locked. The sweep is 2.5s for three beats, which is the 72 BPM the label claims —
the number is not decorative, it is the actual rate. Beat amplitude is held below
full so the R spike and the head's glow both clear the frame with air above and
below. The comet blinks off across the wrap so the reset never pops.

Under reduced motion there is no sweep to show, so the otherwise-hidden trace
stands in as a dim static waveform and the comet and head are removed.

---

### 3.3 · SKILLS — 1200 × 510

Sheet 02. The technical index, in the same language as sheet 01.

**Composition.** Header mirrors the hero: `SKILLS · 002` with a blinking LED,
`SHEET 02 / 02` opposite, the word `SKILLS` in 62px sans, and a dimension line
beneath it with `TECH INDEX` knocked out of the middle. The right half of the
header band holds Fig. 02. Below, the index occupies the lower two-thirds.

**The clock.** The contract's one-cause rule, realised as a beam crossing the
sheet in 7s. Every animated part is keyed to the beam's arrival at its own
horizontal position — the wavefront is quantised into 24 columns and an element
takes the delay of the column its centre falls in. The chip lights and the bar
jolts *because* the beam just reached them. One shared scale, so the whole sheet
stays in phase and adding an entry is a one-line job.

**Fig. 02 — Live signal.** A spectrum of narrow bars sitting on a baseline. Each
bar stands full height as the beam passes and settles to 28% behind it, so the
figure reads as a spectrum analyser sweeping in step with the sheet.

**Index.** The contract's five groups, numbered and named in the left margin,
hung off a vertical bus line with current flowing down it in marching dashes and
a short stub into each group. Entries are mono chips: 26px tall, 3px radius, 1px
accent border at 42% opacity, text tracked to a fixed measure, 10px gutter
between chips. Each chip carries a flash fill that fires on the beam and decays
out. At rest chips sit at 55% opacity; under reduced motion every chip rests
evenly lit at 85%, every bar at full height, and the beam is removed.

---

### 3.4 · SOCIALS — 1200 × 72

The shortest plate in the set.

**Composition.** Label `SOCIAL` at the left on the 32px margin with a blinking
LED. Four marks follow on a 60px pitch, then the handle in mono with its `@`
picked out in accent. The channel names are spelled out right-aligned as a
legend, so the glyphs never have to be guessed at.

**Marks.** Every mark is a 20×20 box drawn on the plate's own 1.4px accent
stroke, so they sit in the same line weight as the grid, rulers and registration
marks.

- **Instagram** — aperture in a rounded plate, with a solid corner dot.
- **Threads** — the real mark's inner curl turns to mush at this stroke in a 20px
  box, so it takes the boxed-glyph treatment: the `@` sigil it is named for, set
  in the sheet's own mono, legible at any size.
- **LinkedIn** — `in` set in the sheet's own mono at 700 weight, so the weight
  matches the rest of the plate.
- **YouTube** — 16:9 plate with a solid cue triangle.

**Motion.** Marks pip left to right on a 2.5s clock — the same rhythm the pulse
plate beats at, but kept as a separate timeline, so the echo is deliberate and
not a frame-lock. Under reduced motion every mark rests evenly lit.

---

## 4 · EXTENDING

Within this theme, a new surface must: be 1200 wide with radius 18 and the frame
stroke; sit on the same masked 20/100 lattice; carry rulers and four registration
marks; draw only from the palette; use mono for everything but a single display
word; drive all of its motion from one clock; and resolve to a complete, legible
still under reduced motion. Tall enough to carry a display word makes it a
numbered sheet, which takes the next number and a sheet counter; anything shorter
is a strip and takes a single left label with a status LED.

Note that the contract fixes the set at four cards — a fifth plate is a change to
[design.md](../design.md) first, and to every theme after it.
