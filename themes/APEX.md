# THEME — APEX

One answer to [DESIGN.md](../DESIGN.md). Apex is a **race weekend broadcast
package**: every surface is a *board* — a trackside panel on asphalt, with a
rumble-strip kerb, direction chevrons, a chequered corner and a timing strip,
the way a circuit dresses its own information.

This document fixes the look. The contract fixes the set: four cards, their
sizes, and what each must say. Where they disagree, the contract wins.

Assets: `assets/apex/` — `hero.svg`, `pulse.svg`, `skills.svg`, `socials.svg`.

---

## 1 · PRINCIPLES

**Everything leans.** 8° into the direction of travel — display type, tabs,
plates, dividers, the sweep, the chequer. Nothing in this theme stands upright
except a glyph that would become unreadable if it did. The lean is the theme's
signature and it is a single constant: `tan 8° = 0.1405` shows up in the type,
in the tab geometry and in the sweep's arrival time.

**Counted, not sketched.** Everything that reports a quantity is built out of
the quantity itself: the gantry is twenty-seven posts because the lap it reports
is divided into twenty-seven, the circuit is a generated path and everything
that rides it is cut from the same numbers. Nothing here is drawn freehand and
captioned as though it were measured.

**Motion is additive.** The static composition is complete on its own. A still
frame must read as a finished board.

**Reduced motion is a real design.** Under `prefers-reduced-motion`, every board
resolves to its most legible resting state: entrances land, the title cycle
stops on its anchor, wavefronts settle evenly lit, and the gantry holds green.
Anything whose only purpose was travel is removed outright.

**One cause, every effect.** Within a board, animated parts answer to a single
clock. A tab lights *because* the sweep reached it. Nothing pulses on a private
timer.

**One accent.** Green is the only chromatic colour in the system — the sector
green of a timing screen, which is why it is used only for live things:
current, focus, the present revision. Everything else is ink on asphalt.

**Glow belongs to the node.** Light is not atmosphere here. The only things that
glow are whatever is live *right now*: the car on the lap, the post the sweep is
standing on. Nothing glows because it is important.

---

## 2 · FOUNDATIONS

### Palette

| Role | Value | Use |
|---|---|---|
| Asphalt | `#0a0c0e` | Board fill, knockouts, type on accent |
| Ink | `#f2f5f7` | Display type, values, chequer |
| Dim | `#7e8a90` | Labels, keys, captions, gates, leaders |
| Accent | `#2ee08a` | Live signal, markers, tab borders, current revision |
| Rail | `#232a30` | Board border, rules, dividers, track ribbon |
| Panel | `#0f1317` | Tab and plate fills, classification bands |
| Hatch | `#14181c` | Speed hatch |
| Kerb | `#1a2026` / `#0e1216` | Rumble-strip blocks |

The palette is fixed. New boards draw from it; they do not extend it.

### Ground

No lattice. The ground is a **speed hatch** — 2.2px bars on a 16px pitch,
rotated −24° — under a diagonal fade that runs bottom-left to top-right, so the
board reads as lit from where the content sits and falls off past it. Each card
takes its own fade angle so the four do not tile into one continuous field.

### Frame

Corner radius **3**, 1px `#232a30` border on the half-pixel, on every board.
Card sizes come from the contract: 420 / 110 / 510 / 72 at 1200 wide.

### Edges

Three marks, on all four cards, in place of a drawing set's rulers and
registration:

- **Chevrons** — a `›` every 100px along the top edge, in rail. Direction of
  travel.
- **Kerb** — a rumble strip along the bottom edge: 24px blocks, 5px tall,
  alternating `#1a2026` and `#0e1216`, with the first block in accent as the
  sector marker.
- **Chequered corner** — a 4×2 block of 6px squares inset at the top right of
  the two boards. The strips do not carry it; they are too short to finish.

### Boards and strips

The contract's two major cards are **numbered boards**: they carry a display
word and a board counter (`BOARD 01 / 02`, `BOARD 02 / 02`). The two minor cards
are **strips**: unnumbered, with a single left-hand label and a blinking beacon.
Counters count boards only — strips are never numbered.

### Geometry

Content margin **64** on boards, **32** on strips. Everything that is not type
is a parallelogram leaning 8°:

- **Marker** — 9 × 10, the accent flag beside every board and strip label.
- **Plate** — 26 tall, panel fill, rail border, with a 6px accent bar let into
  the leading edge. Carries the email and the index caption.
- **Tab** — 28 tall, 7px lean, panel fill, 1px accent border at 38%, text inset
  12px and tracked to a fixed measure, 12px gutter between tabs. Carries every
  skill entry.
- **Class box** — 31 × 21, solid accent, with the group number knocked out of
  it in asphalt. The timing tower's position column.
- **Post** — 38 tall, solid accent, no housing and no border, on the same 8°
  lean as everything else. The marshal gantry's light cell: 4px wide at the
  left of the run and 22px at the right, on a gap that closes as it goes.

### Type

Two faces only.

- **Mono** — `ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`.
  Everything technical: labels, keys, values, tabs, captions, handles, legends.
  Always tracked out; 1–6px letter-spacing depending on size. Set upright, even
  inside a leaning tab — a leaning mono glyph at 10.5px is a smear.
- **Display** — `"Helvetica Neue", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`
  at **800** weight, skewed −8°, tracked to a fixed measure with `textLength`.
  Reserved for the one word or name that is the subject of a board.

Size scale: 66 display · 17 title flip · 12 timing value · 11 board label and
class number · 10.5 tab and plate · 10 figure caption · 9.5 strip label and
class name · 8.5 timing key.

### Motion vocabulary

| Name | Behaviour | Duration |
|---|---|---|
| Rise | Fade up 14px | 1s, `cubic-bezier(.2,.75,.2,1)` |
| Launch | Fade in from 34px left | 1.15s, `cubic-bezier(.14,.85,.2,1)` |
| Flip | Strip steps down one row, holding between | 22s, `cubic-bezier(.6,0,.15,1)` |
| Lap | Lit window travelling a closed path | 6s linear |
| Fire | Post lights full, then falls away fast | 1.5s linear |
| Bloom | Node glow on the post the sweep is on | keyed to Fire |
| Sweep | Leaning gradient bar crossing the board | 7s linear |
| Wake | Lit on arrival, decaying to rest | keyed to the sweep |
| Furl | Chequer column lifts 5px and lights | keyed to the sweep |
| Pip | Brighten and settle, staggered left to right | 2.5s, `cubic-bezier(.15,.75,.3,1)` |
| Beacon | Hard on/off, no easing | 2.2s (boards) / 2.5s (strips) |

Entrance delays step `.05 / .30 / .45–.50 / .60–.70 / .75–.90 / .90–1.1s`, so a
board resolves top-down in roughly one second. There is no entrance flourish on
the display word beyond the launch itself — no ghosts, no trails; the name
arrives once and stays.

---

## 3 · THE BOARDS

### 3.1 · HERO — 1200 × 420

Board 01. The identity board: who this is, in one screen.

**Composition.** Content column starts at x=64. Board label `GRID · P01` at the
top left with a blinking accent marker; `BOARD 01 / 02` right-aligned opposite.
The name is set in 66px display at the baseline, leaning 8°, tracked to a fixed
measure. Beneath it sits the mail plate. Below that, one line cycles job titles
in a flip window. The right third holds Fig. A. A timing strip runs across the
bottom.

**Title flip.** The contract's five titles are stacked as six rows 30px apart
inside a 30px window, and the strip steps down one row per title on a 22s loop.
`SOFTWARE ENGINEER` is the anchor: it holds 6s, the rest 4s each. Row six
repeats row one, so the wrap back to the top lands on identical copy and never
pops. Each flip is 0.4s of the eased timing function; the holds sit flat between
them. The window is ruled top and bottom, and the current line is underscored in
accent for 120px. At rest and under reduced motion the strip parks on row one:
the anchor, alone.

**Fig. A — Circuit.** A closed lap: hand-laid knots run through a Catmull-Rom
spline, drawn as a rail ribbon with the racing line inside it at 16%. Sector
ticks cross the ribbon at a third and two thirds of the lap; a chequered
start/finish block sits across it at zero, rotated to the tangent. One car runs
the lap in 6s — a 150px lit window whose dash pattern sums to exactly one lap
length, so the window that walks off the start/finish line walks straight back
on, with a glowing node at its head sampled from the same curve by arc length.
A leader drops from the bottom of the lap to the caption. Under reduced motion
the car is removed and the racing line rests at 45%, so the figure stays a
complete drawing of a circuit.

**Timing strip.** Five fields across the bottom, keyed above and valued below,
on a rule that is accent for its first 108px and rail beyond, with leaning
dividers between fields: `SITE · EXPERIENCE · BASE · ZONE · REVISION`. The
revision value is the only accent-coloured text in the strip, and carries the
contract's revision stamp. It does not blink — the accent is the signal.

---

### 3.2 · PULSE — 1200 × 110

The strip between boards 01 and 02. It exists to prove the set is live, so it is
the one card whose whole content is motion.

**Composition.** Label `MARSHAL` at the left on the 32px margin with a blinking
beacon; `40 SWEEP / MIN` right-aligned. Between them stands the gantry: 27 posts
in one unbroken run, with its three sectors of nine marked `S1 · S2 · S3`
underneath rather than cut into it — the only rhythm in the strip is the ramp.

**No off state.** Only lit posts are drawn. There is no housing, no dim shell
and nothing waiting to be filled — the way a real light panel is dark until it
has something to say. What looks like the unlit end of the gantry is the tail of
the last sweep still burning down.

**The gantry ramps.** Posts grow from a 4px sliver at the left to the full 22px
at the right, while the gaps between them close from about 35px to 6px. The gaps
are scaled to land the last post exactly on the end of the run, so the ramp
always fills the same measure no matter how the profile is retuned. Firing stays
evenly spaced in *time*, so as the posts fatten and crowd, the head visibly
slows: it brakes into the corner rather than running the strip at one speed.

**The sweep.** A sweep crosses the gantry in 1.20s — post *i* fires at
`1.20s × i / 27`, one shared clock, nothing on a private timer. Exactly one post
is ever at full brightness. It drops to 42% within a single post of being
passed, so the tail reads as four or five posts, and what is left of it dies out
quietly over the second behind that. The falloff is shaped in the keyframes
rather than in an easing curve, which is what keeps the head singular instead of
smearing across a run of near-maximum posts.

**The rate.** Sweeps start 1.50s apart, which is the 40 SWEEP/MIN the label
claims: the number is the rate, not a caption. The 0.30s between one sweep
finishing and the next launching is the hold, and the gantry glows down through
it rather than going out.

Under reduced motion there is no sweep to run, so every post rests evenly lit at
80% — the gantry showing green, track clear — and the node bloom is removed.

---

### 3.3 · SKILLS — 1200 × 510

Board 02. The technical index, in the same language as board 01, laid out as the
timing tower: a position column, a class, and its entries.

**Composition.** Header mirrors the hero: `INDEX · 002` with a blinking beacon,
`BOARD 02 / 02` opposite, the word `SKILLS` in 66px display, and a plate beneath
it reading `TECH INDEX · 32`. The right half of the header holds Fig. B. Below,
the classification occupies the lower two thirds.

**The clock.** The contract's one-cause rule, realised as a sweep crossing the
board in 7s. Because the sweep leans 8° like everything else, it reaches a point
at `x + y · tan 8°`, not at `x` — that effective coordinate is quantised into 24
columns and an element takes the delay of the column its centre falls in. One
shared scale, so the whole board stays in phase and adding an entry is a
one-line job.

**Fig. B — Chequer.** A chequered flag on a staff, furled on a sine and leaning
with the rest of the theme, falling off to 30% at its free edge. Each column is
a group keyed to the sweep's arrival: it lifts 5px and lights to 95%, then
settles back to 22% behind the wavefront, so the flag ripples in step with the
board rather than waving on its own time.

**Classification.** The contract's five groups, each a banded row: an accent
class box carrying the group number, the class name beside it, a rail dividing
the column from the entries, and the entries as leaning tabs. Alternate rows
carry a panel band, the way a timing screen stripes its classification. Each tab
carries a flash fill that fires on the sweep and decays out. At rest tabs sit at
50%; under reduced motion every tab rests evenly lit at 88%, the chequer rests
at 55% and unlifted, and the sweep is removed.

---

### 3.4 · SOCIALS — 1200 × 72

The shortest board in the set — the paddock.

**Composition.** Label `PADDOCK` at the left on the 32px margin with a blinking
beacon. Four marks follow on a 62px pitch, then the handle in mono with its `@`
picked out in accent. The channel names are spelled out right-aligned as a
legend, so the glyphs never have to be guessed at.

**Marks.** Every mark is a 22px glyph on the board's own 1.5px accent stroke,
standing upright inside a leaning tab, so it sits in the same line weight and
the same geometry as everything else here.

- **Instagram** — aperture on a plate, with a solid corner dot.
- **Threads** — the real mark's inner curl turns to mush at this stroke in a
  22px box, so it takes the boxed-glyph treatment: the `@` sigil it is named
  for, set in the board's own mono, legible at any size.
- **LinkedIn** — `in` set in the board's own mono at 700 weight, so the weight
  matches the rest of the board.
- **YouTube** — 16:9 plate with a solid cue triangle.

**Motion.** Marks pip left to right on a 2.5s clock — a separate timeline from
the telemetry strip, so the two can never be frame-locked; the echo is
deliberate, not a sync. Under reduced motion every mark rests evenly lit.

---

## 4 · EXTENDING

Within this theme, a new surface must: be 1200 wide with radius 3 and the rail
stroke; sit on the same −24° speed hatch under a diagonal fade; carry chevrons
along the top and a kerb along the bottom; draw only from the palette; lean
every non-type element 8°; use mono for everything but a single display word;
keep glow on the live node and nowhere else; drive all of its motion from one
clock; and resolve to a complete, legible still under reduced motion. Tall
enough to carry a display word makes it a numbered board, which takes the next
number, a board counter and a chequered corner; anything shorter is a strip and
takes a single left label with a beacon.

Note that the contract fixes the set at four cards — a fifth board is a change
to [DESIGN.md](../DESIGN.md) first, and to every theme after it.
