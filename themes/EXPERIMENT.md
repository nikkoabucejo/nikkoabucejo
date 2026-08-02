# THEME — EXPERIMENT

One answer to [DESIGN.md](../DESIGN.md). Experiment is a **working laboratory**:
one continuous bench running through all four cards, with real glassware
standing on it, live fire under it, liquid boiling, distillate dripping and
vapour coming off the whole thing.

The set is a room, not a diagram. Something is always happening on it, in
several places at once, and none of it is in step.

This document fixes the look. The contract fixes the set: four cards, their
sizes, and what each must say. Where they disagree, the contract wins.

Assets: `assets/experiment/` — `hero.svg`, `pulse.svg`, `skills.svg`, `socials.svg`.

---

## 1 · PRINCIPLES

**One bench.** A bench line sits **30px above the bottom edge**, at the same
distance on every card that stands something on it, and everything in the theme
rests on that line. Stack the cards and the bench runs from the hero through the
drip line to the reagent shelf without a step in it. It is the single strongest
thing holding the set together and no apparatus may sit anywhere else.

The channel strip is the one exception, and it earns it: it carries no
apparatus, so it carries no bench. A rule drawn under four icons is not a
bench — it is just a line.

**A bench is many clocks.** Bubbles, flame, coolant, drips, embers and smoke all
run on their own periods, and they are deliberately never in step: a real bench
has a dozen processes going at once and none of them agree. This is what makes
the theme feel alive rather than looped. (The contract's one-clock rule is a
rule of the *skills* card, not of the theme — and there it is obeyed exactly.)

**The accent is heat.** Orange appears on flame, on what heat is doing to a
liquid — boiling, reacting, just dosed — on embers, on the label of the rig that
is running, and on the present revision. It is never used on a rule, a frame, a
stand, a clamp or a piece of glass. If it is orange, it is burning or it is
being burnt.

**Everything else is cold.** Glass, steel, liquid and type are all one cool
blue-grey family across five values. A laboratory at night is cold light with
one hot point in it, and the whole composition depends on that contrast being
kept — the moment a second warm thing appears, the fire stops reading as fire.

**Glassware is drawn, not iconified.** A beaker has a spout, a lip and
graduations. A conical flask tapers from a neck to a base. A round-bottom flask
joins its neck on a real chord. A condenser is a tube inside a jacket with water
in at the bottom and out at the top, running counter to the vapour, because that
is how a condenser works. Anything that looks like lab equipment but does not
work is not allowed on this bench.

**Atmosphere follows its source, never precedes it.** Vapour, dust and the
fire's wash on the benchtop are *effects* of the bench, so they may not be on
screen before the thing causing them exists. They come up on their own long
ramps after the apparatus has landed — fire's wash over 2s from 0.85s, vapour
over 3s from 1.3s — so the room fills rather than switching on. Nothing
atmospheric carries an entrance delay earlier than the glassware it belongs to.

**Atmosphere is thin on purpose.** Vapour is built from clustered soft-edged
blobs that rise, spread and thin, drawn behind the apparatus so the glass stays
crisp in front of it. It is kept deliberately faint and sparse — a handful of
blobs per card at low opacity, and only a few of them over any one vessel. Smoke
is the room the bench is in; the moment it competes with the glass or the type,
there is too much of it. Dust drifts, embers lift off both burners. None of it
carries information, and all of it is removed or held still under reduced
motion.

**Declare per-element delays last.** `animation: name 13.5s ease infinite` is a
shorthand, and it resets `animation-delay` to zero. A rule like
`.bottle-17 { animation-delay: 8.05s }` therefore has to be written *after* every
shorthand that could reset it — otherwise the whole card fires at once on the
first frame and the travelling cause is decorative. Every arrival delay in this
theme is emitted in a bucket that lands at the bottom of the stylesheet.

**Scale about yourself.** Anything that animates `scale()` declares
`transform-box: fill-box`. SVG's default is `view-box`, which resolves
`transform-origin` against the whole 1200-wide card — a bubble would then scale
about the middle of the card and visibly slide sideways as it grew. Drops fall
straight, bubbles rise straight and vapour swells where it stands because of
that one declaration.

**Reduced motion is the bench at rest.** Not a freeze: nothing boiling, nothing
falling, fires steady at full height, vapour held as a still haze, the
dispensing head parked at home and every label evenly lit. It is a photograph
of the same room with the experiment not yet started.

---

## 2 · FOUNDATIONS

### Palette

| Role | Value | Use |
|---|---|---|
| Night | `#070b10` | Card fill, under a slight vertical gradient |
| Well | `#0c131c` | Vessel interiors, benchtop, burner bodies |
| Rule | `#1d2836` | Card border, graduations, hairlines |
| Steel | `#38506b` | Apparatus: stands, clamps, racks, tubing, caps, the gantry |
| Dim | `#7e94ab` | Glass outlines, keys, captions, entry names |
| Ink | `#e9f2fb` | Display type, values, liquid highlights, bubbles, drops, vapour |
| **Flame** | **`#ff7a45`** | **Accent — heat: fire, and what heat is doing** |

The palette is fixed. New surfaces draw from it; they do not extend it.

**Liquid** is three values from the palette and never a new one: a vertical
gradient that opens on Ink at 50% for the sheen where light catches the surface,
goes to solid Steel just under it, and thins to Steel at 80% at the bottom so
depth reads as depth. Over that sits a bright Ink meniscus with a Night shadow
immediately beneath it — that pairing is what stops a body of liquid reading as
a flat rectangle — plus one soft highlight down the inside of the glass.

### The bench

A 1.6px Steel line 30px above the bottom edge, a Well band below it and an Ink
hairline just under it for the front edge of the top. Every vessel, stand,
burner, rack and shelf in the theme stands on that line.

### Frame

Corner radius **16**, 1px `#1d2836` border. Card sizes come from the contract:
420 / 110 / 510 / 72 at 1200 wide. The ground is a shallow vertical gradient,
lighter at the top than at the bottom, so the room has a ceiling.

### Rigs and strips

The contract's two major cards are **rigs**: numbered in roman, carrying a
display word, a counter (`RIG I / II`, `RIG II / II`) and a named figure with a
caption at the right margin. Because the caption owns that corner, the counter
sits at `x=612`.

The two minor cards are **strips**: unnumbered, one left-hand label with a lamp,
one right-hand reading, no counter.

### Geometry

Content margin **64** on rigs, **32** on strips.

- **Measure** — a 1px rule from `x=64` to `x=624` with 10px end ticks, a value
  below it at the left and its key right-aligned at the end. Both rigs use the
  same measure at the same width, so the hero's sample line and the skills'
  index line are the same instrument.
- **Lamp** — a 7 × 7 accent square beside every card label and on the stirrer
  plate. It breathes; nothing in this theme blinks.
- **Glass** — 1.4px Dim stroke at 80%, Well fill at 55%, with one soft Ink
  highlight down the inside of each vessel.

### Type

Two faces only.

- **Mono** — `ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`.
  Everything: labels, keys, values, titles, entry names, captions, handles,
  legends. Always tracked out.
- **Sans** — `"Helvetica Neue", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`
  at **weight 300**, tracked to a fixed measure with `textLength`. Reserved for
  the name and the one display word. Light and wide: the name is the largest
  thing in the set and does not also need to be the heaviest.

Size scale: 62 name · 48 display word · 20 title · 12.5 email · 12 handle ·
11 rig label · 10.5 index line · 10 figure caption · 9.5 strip label, group
label and entry name · 8.5 key and legend · 8 index number.

### Motion vocabulary

| Name | Behaviour | Duration |
|---|---|---|
| Settle | Fade up 13px | 1s, `cubic-bezier(.16,.84,.28,1)` |
| Fade | Scene layers arriving | 1.4s |
| Lamp | Breathe between 30% and full | 2.2s |
| Lick | Flame layer stretching and leaning | 1.15 / .82 / .61s |
| Pyre | Fire glow swelling | 2.6s |
| Boil | Heated liquid brightening | 2.9s |
| Swash | Meniscus churning | 3.4s |
| Rise | Bubble from the bottom, breaking at the surface | 1.1–3.4s |
| Fall | Drop swells at the nozzle, necks off, stretches as it accelerates, and is absorbed on impact | per drip period |
| Ripple | One thin ring opening where a drop went in | a ~0.5s burst, keyed to that drop's impact at 79% of its fall |
| Come up | Atmosphere washing in after its source has landed | 2s at .85s (fire), 3s at 1.3s (vapour) |
| Ember | Spark lifting off a flame and going out | 2.4–5.2s |
| Vapour | Blob rising, spreading, thinning | 8–46s in three depths |
| Flow | Coolant marching through a jacket | 1.5s |
| Spin | Vortex turning over a stir bar | 1.1s |
| Barspin | Stir bar seen edge-on | 0.42s |
| Fill | A title filling like a vessel | 0.9s on the 30s round |
| Travel | The head moving to the next bottle | 0.2s, eased at both ends |
| Park | The head standing still over a bottle while it pours | 0.26s |
| Dose | A drop leaving the needle and landing in the bottle | 0.2s, inside the park |
| Front | Heat crossing the specimen jars | 7s round |

Entrance delays step `.05 / .26 / .42 / .58 / .74 / .92s`.

---

## 3 · THE CARDS

### 3.1 · HERO — 1200 × 420 · RIG I, THE BENCH

The identity card: who this is, in one screen — written on the bench itself.

**Composition.** Content column at `x=64`: label row, the name in 62px sans at
`y=170`, the measure carrying the email and `SAMPLE`, the title line, and one
line of `NIKKOABUCEJO.COM · PHILIPPINES · UTC+08:00 · REV 2026.08` with the
revision in accent. Below it, the bench itself: the working rig on the right and
the rest of the glassware in a row along the bottom. Nothing hangs above the
bench — the space over the apparatus stays open, so the rig reads against the
room rather than under a ceiling of props.

**Titles fill.** A title is not typed and it does not slide: a level rises
through the glyphs and it fills, the way a vessel does, then drains the same
way. Five titles on a 30s round — `SOFTWARE ENGINEER` is the anchor and holds
10s against 5s for the others. Windows are strictly sequential, each draining
over the 2% before its boundary and the next filling over the 3% after it, so no
frame of this card ever carries two titles on one line. At rest the anchor is
shown, filled.

**Fig. A — the distillation.** A working rig, left to right: a retort stand, a
round-bottom flask clamped by the neck, a Bunsen burner under it with a live
flame and embers lifting off, the liquid boiling with bubbles breaking at a
churning surface, a thermometer in the still head, a Liebig condenser running
down to the right with coolant marching through the jacket **counter to the
vapour travelling inside the inner tube**, and the distillate dripping from the
outlet into the receiver, each drop leaving one ring where it lands.

**The ripple is minimal, on purpose.** One thin ring, opening where the drop
went in and gone in about half a second. A drop into a flask is a small event;
crowns, cavities and rebound jets are staging, and they pull the eye away from
the rig. The ring is a fixed-duration burst expressed as a share of the round —
never the round stretched out — and it is bounded by the width of the liquid it
landed on, so it can never expand out through the glass.

**The rest of the bench.** A rack of five test tubes, two of them fizzing; a
beaker boiling on a tripod over the bench's second flame, venting steam; a
conical flask on a magnetic stirrer with the bar spinning edge-on and a vortex
turning over it; a graduated cylinder; a volumetric flask; a small beaker.

**At rest.** Nothing boiling, nothing falling, both flames steady at full
height, the vapour held as a still haze, the anchor title filled.

---

### 3.2 · PULSE — 1200 × 110 · THE DRIP LINE

The strip between the two rigs. It exists to prove the set is live, so it is the
one card whose whole content is motion.

**Composition.** Label `DRIP LINE` at the left on the 32px margin with a lamp;
`30 DROPS / MIN` opposite. Between them a manifold with liquid running through
it, twelve nozzles, a rack rail, and twelve test tubes standing on the bench.

**The rate is the animation.** Each line releases a drop every **2.0s** — which
is the 30 drops a minute the label claims — and the twelve lines are staggered
by 2.0s / 12, so a drop breaks a surface somewhere on this strip every **0.167s**
and it is never still. Change the period and the label is wrong; the number is
not a caption.

**The wave runs left to right.** The stagger is ordered so line 1 releases
first and line 12 last, which means the eye reads the strip the way it reads
everything else on the card. Reverse the stagger and the wave runs backwards.

**A ripple is a burst, not a slow ring.** Every drop's fall ends exactly on the
meniscus it is aimed at, and the ring that opens there lasts about half a second
however long the round is — a fixed duration expressed as a share of the cycle,
never the whole cycle stretched out. It is bounded by the width of the liquid it
landed on, so nothing ever expands through the glass, and it sits **in front of**
the vessel: a drop painted behind the glass fill reads as a dark blob rather
than as liquid.

**At rest.** No drops and no ripples — anything whose only purpose was to fall
is removed outright. The manifold, the rack and twelve tubes of settled liquid
remain, which is a complete picture of the instrument.

---

### 3.3 · SKILLS — 1200 × 510 · RIG II, THE REAGENT SHELF

The technical index as a **reagent shelf**: 32 labelled bottles on five shelves,
one shelf per group, each bottle with its index number and its full name beside
it. The name is what makes the entry legible and it is never abbreviated away.

**Composition.** Header mirrors the hero: `SHELF · 32 REAGENTS` with a lamp,
`RIG II / II` at `x=612`, `FIG. B` captioned at the right margin, the word
`REAGENTS` in 48px sans, the same measure beneath it carrying
`32 REAGENTS · 5 SHELVES · ONE HEAD`. Below, five shelf rails from y=256 at a 46 pitch, the
group name in the left margin of each, and seven bottle positions on a 136.5
pitch.

**The card is four bands, not two.** Header, air, shelf, foot — and all four
have to be there. The measure line ends at 180, the first bottle stands at 216,
the rails run 256 to 440 and the posts foot at 446: **26px of air under the
header, 9px between shelves, 64px of foot.** Buying a foot by shoving the shelf
up under the header is not spacing, it is moving the crowding somewhere else.

The head's stops **are** the rails, so re-pitching the shelf re-times the
machine with it — `@keyframes gy` carries the same five numbers the rails do,
less the 46px the carriage rides above them.

**One cause, every effect — the dispensing head.** A gantry hangs between two
posts bolted to the bench and carries a single head: a carriage running on
rollers along a rail, with a reservoir window and a needle beneath it.

**It parks to pour.** The head does not sweep past a bottle and dose it in
passing — it travels to the bottle in **0.2s**, **parks for 0.26s**, and pours
while standing still, then moves on. A liquid handler stops over the well; a
thing that dispenses on the move is spilling. The stop is also what makes the
card readable: the eye is given somewhere to rest thirty-two times a round.

It works a shelf end to end, drops to the next and comes back along it, and
after the fifth homes through a **clear corridor at x=1090 where no bottle
stands** — so it never crosses the shelves to get back, and never rises into the
header. An 18s round.

There is no trail. The head goes where the work is and nothing is left lying
across the shelves behind it, which is the whole point: the cause is a machine
doing its job, not a line drawn round the furniture.

**Every bottle's delay IS the moment the head parks over it.** Those moments are
the keyframe times themselves, not a speed multiplied out, so the drawn head and
the reactions cannot drift apart by construction. Move a bottle and it re-times.

**The dose lands, and then the bottle answers.** A drop leaves the needle as the
head arrives and takes 0.24s to fall, and every one of the bottle's responses is
keyed to that landing rather than to the arrival — the ring on the surface, the
jolt, the liquid flashing, the vapour it vents and its label lighting. Six
responses, one delay class, one event. Behind the head they decay at different
rates, so what you see is a wave of reaction thinning out along the shelf.

**Fig. B — the dispenser.** The head, its rail, and the two posts it hangs
from — bolted down at the bench with the rail's end blocks riding them. The
posts are structural, not decoration: a gantry with nothing holding it up reads
as floating, and the whole machine stops being believable.

**At rest.** The head parked over the first bottle of the first shelf, nothing
poured, every label evenly lit.

---

### 3.4 · SOCIALS — 1200 × 72 · THE CHANNELS

The shortest card in the set, and the plainest.

**Composition.** Label `CHANNELS` at the left on the 32px margin with a lamp,
four marks on a 58 pitch, the handle written once with its `@` in accent, and
the channel names spelled out right-aligned as a legend so no glyph has to be
guessed at. That is the whole card.

**Nothing else goes on this strip.** No jars, no bench line, no vapour, no
travelling front. It is 72px tall and it has one job: four marks and a handle.
Glassware here is furniture — it carries no information, it crowds the marks at
fit-width, and it turns the shortest card in the set into the busiest. The empty
run between the handle and the legend is the design, not a gap waiting to be
filled.

**Marks are drawn, never dropped in.** Every mark is authored on the theme's own
1.4px accent stroke in a 20px box, so they sit in the same line weight as the
glassware everywhere else.

- **Instagram** — rounded plate, aperture, corner dot.
- **Threads** — its inner curl turns to mush at this stroke in a 20px box, so it
  takes the stand-in treatment: the `@` sigil it is named for, in the card's own
  mono.
- **LinkedIn** — `in` in the card's own mono at 700, so the weight matches.
- **YouTube** — 16:9 plate with a solid cue triangle.

**Motion.** The marks pip left to right on a 5s round, 0.16s apart — the same
rhythm the drip line keeps, on its own timeline, so the echo between the two
strips is deliberate and never a frame-lock.

**At rest.** Every mark rests evenly lit.

---

## 4 · EXTENDING

Within this theme, a new surface must: be 1200 wide with radius 16 and the rule
border; carry the bench line 30px above its bottom edge and stand everything on
it; draw only from the palette; keep the accent on fire and on what fire is
doing, and nowhere else; draw glassware that would actually work; set everything
in mono but a name or a display word, and set those in sans at 300; declare
`transform-box: fill-box` on anything that scales; and resolve to the bench at
rest — steady flames, still haze, nothing boiling, nothing falling — under
reduced motion.

Tall enough to carry a display word makes it a **rig**, which takes the next
roman numeral, a counter at `x=612`, a named figure and a caption at the right
margin. Anything shorter is a **strip** and takes one left label with a lamp and
one right-hand reading.

Note that the contract fixes the set at four cards — a fifth surface is a change
to [DESIGN.md](../DESIGN.md) first, and to every theme after it.
