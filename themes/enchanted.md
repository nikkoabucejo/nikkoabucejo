# THEME — ENCHANTED

One answer to [design.md](../design.md). Enchanted is a **night garden**: every
surface is a piece of ground after dark — turf along its bottom edge, a bramble
along its top, vines let down from the canopy, and fireflies drifting through
the space between, the way a garden carries its own light once the sun is off it.

This document fixes the look. The contract fixes the set: four cards, their
sizes, and what each must say. Where they disagree, the contract wins.

Assets: `assets/enchanted/` — `hero.svg`, `pulse.svg`, `skills.svg`, `socials.svg`.

---

## 1 · PRINCIPLES

**Nothing snaps.** Every motion in this theme is eased at both ends and slow,
and no element anywhere switches state instantly — including the beacons. A
firefly swells and fades; it does not blink. There is no hard on/off in the
system, which is most of why the set reads as calm rather than busy.

**Nothing scans.** No sweep, no beam, no wavefront crossing a card left to
right. Where the contract asks for one travelling clock, this theme finds a
travelling clock that already exists in a garden — sap rising through a plant,
a firefly walking a stem — so cause reads as growth rather than as a machine
passing over the content.

**Growth, not appearance.** Entrances start from where a thing is rooted: vines
draw along their own length, leaves scale from their attachment, flowers open
from the heart, the trunk grows up out of its base. Nothing slides in from off
the card, because nothing in a garden arrives that way.

**Everything is grounded.** Every card carries turf on its bottom edge and a
bramble on its top, so the four stack into one continuous garden rather than
four pictures of one. **The turf parts where type sits**: blade height scales
with distance from centre, so the tall grass is only ever out at the corners and
never in front of a word.

**The accent is alive.** Amber is the only warm colour in the system and it
appears only on living light — fireflies, a flower's heart, the title being
spoken right now, the current season. It is never used on a rule, a border, a
frame or a divider. If it is amber, it is alive.

**Named, not invented.** Every figure is a real plant, given its real binomial.
*Ipomoea alba* is the moonflower and it does open at dusk; *Dryopteris* is a
shield fern. Honest botany, not clip-art foliage.

**Counted where it counts.** The bloom at the head of a bough has one petal for
every leaf that bough carries — six, seven, six, seven, six. The verge's flash
train *is* the rate on its label. Nothing here is drawn freehand and captioned
as though it were measured.

**Reduced motion is dusk settling.** Not a freeze: the garden at rest, with
everything grown, every flower open, every leaf evenly lit, the firefly parked
on the anchor and the visitor landed. Anything whose only purpose was travel is
removed outright rather than stopped mid-flight.

---

## 2 · FOUNDATIONS

### Palette

The whole world is drawn in **one hue** — a night green — across six values from
ground to moonlight. That range is the ink. There is exactly one other colour in
the system, and it is the accent.

| Role | Value | Use |
|---|---|---|
| Loam | `#0b1512` | Ground fill, knockouts inside the accent |
| Deep | `#060d0b` | Top of the ground gradient, vignette |
| Glade | `#101d18` | Opaque fills that must occlude — berries |
| Rule | `#1e352c` | Card border, the ground line, field dividers |
| Moss | `#3d6152` | Every growing thing: stems, vines, grass, leaves |
| Sage | `#87a898` | Labels, captions, binomials, legends, mist |
| Moon | `#eaf4ee` | Ink: display type, values, petals, wings, sap |
| **Amber** | **`#f4c96b`** | **Accent — living light, and nothing else** |

The palette is fixed. New surfaces draw from it; they do not extend it.

### Ground

No lattice, no hatch — a garden is not ruled. The ground is four washes stacked
on the card, and each card moves the moon so the four do not tile:

- a vertical gradient, deep at the canopy and warming toward the soil;
- a **moon wash**, a wide radial of moonlight placed off-centre per card;
- a **warm**, a low radial of amber at 7% along the bottom edge — the colony's
  collective light on the ground, the only place amber is allowed to be diffuse;
- a **vignette** closing the corners down.

### Frame

Corner radius **22**, 1px `#1e352c` border on the half-pixel, on every card.
Card sizes come from the contract: 420 / 110 / 510 / 72 at 1200 wide. The frame
is grown over rather than decorated: turf crosses the bottom edge and vines hang
past the top.

### Edges

Four marks, in place of a drawing set's rulers and registration:

- **Turf** — the bottom edge of every card. Three depth layers on a twelve-column
  grid; blades are filled tapered paths, not strokes, so they thin to a point.
- **Bramble** — a thin leafed vine along the top edge, full width on a plot and
  right-hand only on a verge, so it never crowds the left label.
- **Canopy** — out-of-focus foliage at 7–10% crowding the top corners, and an
  **understory** of large dim leaves behind the turf. Depth, not decoration: it
  is what puts the card *inside* the garden rather than in front of it.
- **Corner tuft** — taller grass and one small bloom where the turf meets a
  corner.

### Plots and verges

The contract's two major cards are **plots**: numbered in roman, carrying a
display word, a counter (`PLOT I / II`, `PLOT II / II`), hanging trails from the
canopy and a figure. The two minor cards are **verges** — the strip of rough
grass along a path: unnumbered, one left-hand label with a firefly beside it, no
trails. Counters count plots only.

### Geometry

Content margin **64** on plots, **32** on verges. There is no lattice; positions
are set by what is growing where. What does repeat:

- **Leaf** — a two-arc lens drawn from its attachment at the origin out along +x,
  so every leaf in the system rotates about the point it is actually joined at.
- **Petal** — ovate: narrow where it attaches, widest past halfway, round at the
  tip. It is *not* a leaf. Radiating leaf shapes make a star, not a flower.
- **Bloom** — petals in a ring around an amber heart, with a soft halo behind.
  Where a bloom counts something, its petal count is that number.
- **Berry** — a 26px disc in glade with a moss rim, hanging from a vine on a
  short stem with two small leaves at the joint. Carries the channel marks.
- **Stem** — moss, 1.2–2px. A trunk that must taper is drawn as a filled outline
  offset from its own centre line, because a stroke cannot taper.

### Type

Two faces, both serif. Nothing in this theme is set in mono — a garden has no
instrument panel.

- **Text** — `Georgia, "Times New Roman", "Nimbus Roman", serif`. Everything
  small: labels, captions, entries, values, legends, handles, marks. Set in
  caps and tracked out 1.2–3.6px, the way a herbarium sheet labels a specimen.
  Italic is reserved for the titles and the Latin binomials.
- **Display** — `"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif`
  at normal weight, tracked to a fixed measure with `textLength`. Reserved for
  the name and the one display word. Regular weight, not bold: the name is the
  largest thing in the set, and it does not also need to be the heaviest.

Size scale: 72 name · 52 display word · 14 title · 12.5 email and field value ·
11.5 binomial · 11 card label, group name and entry · 10.5 verge label ·
10 figure key · 9.5 legend and figure caption · 9 field key.

### Motion vocabulary

| Name | Behaviour | Duration |
|---|---|---|
| Rise | Fade up 14px | 1.3s, `cubic-bezier(.16,.84,.28,1)` |
| Open | Fade in scaling up from the middle | 1.6s, same curve |
| Grow | Vine draws along its own length | 2.4s, `cubic-bezier(.25,.8,.3,1)` |
| Sprout | Trunk grows up out of its base | 1.9s, `cubic-bezier(.2,.8,.28,1)` |
| Sway | Turf column skews about its own bottom, gust out and spring back | 7.2–11s |
| Hang | Trail skews about where it is fixed to the canopy | 10–15s |
| Leaf sway | Leaf rotates about its attachment | 8.5s |
| Petal | Petals scale in sequence around the ring | 9s |
| Nod | Flower head turns ±1.8° | 15s |
| Glimmer | Firefly swells and fades | 4.2–7.8s |
| Drift | Firefly travels a slow closed path | 19–32s |
| Beat | Four quick wingbeats, then a glide | 1.9s |
| Rest | Closed wings part and close | 5.5s |
| Walk | Firefly steps along the title stem, holding on each | 25s |
| Flash | Colony flash train | 8s |
| Sap | Light rises through the plant | 15s |
| Pip | Berry catches the light | 6s |
| Mist | Ground bank drifts | 48–76s |
| Lift | Pollen rises and fades | 17–34s |

Entrance delays step `.10 / .35 / .55 / .80 / 1.0 / 1.25s`, so a card resolves
top-down in a little over a second — slower than a card that wants to look
efficient, because this one does not.

**One implementation rule, everywhere.** A CSS `transform` and the `transform`
attribute are the same property, and CSS wins. Anything that animates a
transform therefore carries no transform attribute of its own: the placement
goes on an outer group and the animation on an inner one. Pivots use
`transform-box: fill-box` so no parent transform can move them.

---

## 3 · THE CARDS

### 3.1 · HERO — 1200 × 420 · PLOT I, THE CLEARING

The identity card: who this is, in one screen.

**Composition.** Content column at x=64. Label `THE CLEARING` at the top left
with a glimmering firefly; `PLOT I / II` opposite. The name is set in 72px
display on the baseline at y=190, tracked to a fixed measure, with a leafed vine
drawn under it to the width of the name. The email sits beneath on its own small
leaf. Below that, the title stem. Four trails hang from the canopy across the
upper middle. The right third holds Fig. A. The ground line runs across the
bottom, under the turf.

**The title stem.** All five titles are planted along one vine, and a firefly
walks it — holding on each title in turn, lighting the one it is standing on to
full and leaving the rest at 34%. `SOFTWARE ENGINEER` is the anchor: it holds 7s
against 4.5s for the others, over a 25s round, and the glide between titles is
0.8s. A title is lit *because* the firefly is on it; there is no second clock.

Nothing ever crossfades with anything else. At every instant all five titles are
legible and exactly one is lit, so no frame of this card is a half-played state
and no two words ever stack on one line. At rest and under reduced motion the
firefly is parked on the anchor — which is also its authored position, so
removing the animation lands it there exactly.

**Fig. A — *Ipomoea alba*, the moonflower.** A curling vine with six leaves and
two buds, carrying a head of eight pale petals around an amber heart. The petals
scale in sequence around the ring rather than the head pulsing as one piece, so
the flower breathes; the head nods ±1.8° on a slower clock; the heart's halo
swells with the petals. A leader drops to the caption, which names the plant and
what it does at dusk.

**The visitor.** A butterfly on a 26s round. It wanders in from the right,
arcs down to the petal edge, rests there for about eight seconds, then lifts off
and leaves up-left. The flier is drawn from above with its wings beating; the
perched one is drawn from the side with its wings closed over its back, the way
a butterfly actually rests. They swap at the instant the flier reaches the
petal, so it reads as a landing rather than a dissolve. A second, smaller
butterfly wanders the upper middle on its own 34s round.

**The ground line.** Five fields, keyed above and valued below, on a rule that
begins as a short leafed vine: `SITE · TENDED · SOIL · ZONE · SEASON`. The
season value is the only amber text in the line and carries the contract's
revision stamp. It does not blink — the accent is the signal.

**At rest.** The firefly holds on the anchor; the visitor is perched; every
flower is open, every vine drawn, every firefly evenly lit; the flier is removed
outright.

---

### 3.2 · PULSE — 1200 × 110 · THE VERGE

The strip between the two plots. It exists to prove the set is alive, so it is
the one card whose whole content is motion.

**Composition.** Label `FIREFLIES` at the left on the 32px margin with a
glimmering firefly; `45 FLASHES / MIN` opposite. Between them, a colony of
thirty-four fireflies over the turf, framed by tall bending stalks at either
end.

**The rate is the animation.** Six flashes per 8s round is 45 a minute, which is
what the label says. Flashes are 0.55s apart, each swelling over 0.18s and
falling over 0.34s, which leaves **4.73s of dark** at the end of every round —
this card is quiet far longer than it is lit. Change the train and the label is
wrong; the number is not a caption.

**The colony is synchronous.** *Photinus carolinus* flashes in unison: a whole
hillside lights at once, holds a burst, and goes dark together. So nothing
crosses this card and there is nothing to follow with your eye — the colony
breathes as one body off a single clock, with only a few hundredths of a second
of drift per fly so it reads as living rather than wired.

**No empty frame.** The colony never goes fully out. Through the dark it holds a
17% resting glow, so a frame caught mid-round is fireflies at rest rather than
an empty strip.

**At rest.** There is no burst to run, so the whole colony sits evenly lit at
60% with its halos held — the verge showing, rather than one frozen frame of a
flash.

---

### 3.3 · SKILLS — 1200 × 510 · PLOT II, THE BED

The technical index — and in this theme it is not an index at all. It is **one
plant**: a single climbing stem rooted in the turf at the bottom left, five
boughs, and a leaf on a bough for every entry.

**Composition.** Header mirrors the hero: `THE BED` with a firefly, `PLOT II /
II` opposite, the word `Skills` in 52px display, a leafed vine under it, and
`32 SPECIES · ONE PLANT` beneath. Three trails hang across the middle. The top
right holds Fig. B. The plant occupies the lower two-thirds.

**The plant.** The trunk is a filled outline tapering from 11px at the root to
3.4px, curling into new growth above the topmost bough, with four leaves out
into the empty left margin. Five boughs branch off it — group 01 at the top,
group 05 nearest the root — each sagging a little under what it carries and
levelling out. **Each bough runs under its entries, never through them**: the
words sit on the reading line and hang from the stem by a curved petiole with a
small leaf at the head. Nothing is set on top of a stem.

**The bloom at the head of a bough carries one petal per leaf that bough bears**
— 6, 7, 6, 7, 6 — with the group number knocked out of its amber heart in loam.
The group name follows in caps.

**The sap — one cause, every effect, and it is not a scan.** A single pulse of
light leaves the root, climbs the trunk in 4.4s, and turns out along each bough
as it passes the branch, taking 2.3s to reach the last leaf on that bough. A
leaf wakes — brightening from 62% and lifting 2.6px — *because* the sap reached
it, and it wakes in the order the plant would feed it: lowest bough first, the
growing tip last. Every delay on this card is derived from a distance travelled,
not assigned, so moving a bough or adding an entry re-times itself.

The round is 15s and the whole run takes under 7s, so the bed spends most of its
life perfectly still. The sap is drawn as three stacked dashes — a wide faint
halo, a mid, and a thin bright core — travelling one path, so it reads as a
glint moving under the bark rather than as a line being underlined. The turf
runs on the same 15s clock. The fireflies do not: they are the garden's ambient
layer and are identical on all four cards.

**Fig. B — *Dryopteris*, a shield fern.** A frond of eighteen pinna pairs
decreasing toward the tip, each set perpendicular to the local tangent of the
rachis. The pinnae lift in sequence from base to tip, keyed to the sap arriving
at the growing tip — so the fern opens as the finale of the run rather than on a
timer of its own. Two butterflies wander the header on longer rounds.

**At rest.** The sap is removed outright — there is no flow to freeze. The bed
sits the way it looks just after one has passed: every leaf level and evenly lit
at 95%, every bloom open, every frond up, both butterflies settled at their
authored positions.

---

### 3.4 · SOCIALS — 1200 × 72 · THE PATH

The shortest card in the set.

**Composition.** Label `THE PATH` at the left on the 32px margin with a
glimmering firefly. One vine runs from x=150 to x=1016: four berries hang from
its first stretch, and leaves alternate along the rest so the vine keeps going
past the marks instead of stopping at them. The handle sits below the vine with
its `@` in amber. The channel names are spelled out right-aligned as a legend,
so no glyph has to be guessed at.

**Marks.** Every mark is drawn on the theme's own 1.3px moon stroke inside a
26px berry, so they sit in the same line weight as the vines.

- **Instagram** — rounded plate, aperture, corner dot.
- **Threads** — the real mark's inner curl turns to mush at this stroke in a
  26px berry, so it takes the stand-in treatment: the `@` sigil it is named for,
  set in the card's own Georgia.
- **LinkedIn** — `in` set in the card's own Georgia at bold, so the weight
  matches the rest of the card.
- **YouTube** — 16:9 plate with a solid cue triangle.

**Motion.** The berries catch the light one after another along the vine on a 6s
round, 0.5s apart — a swell and a fade, never a switch. Kept on its own timeline
from the verge, so the echo between the two is deliberate and never a
frame-lock.

**At rest.** Every berry rests evenly lit, its halo held low.

---

## 4 · EXTENDING

Within this theme, a new surface must: be 1200 wide with radius 22 and the rule
stroke; sit on the four ground washes with its own moon position; carry turf
along the bottom and a bramble along the top, with the turf parting where type
sits; draw only from the palette; keep amber on living light and nowhere else;
set everything in the two serifs and nothing in mono; grow its entrances from
where each thing is rooted; find its one clock in something a garden actually
does rather than in a sweep across the card; and resolve to a complete, open,
evenly lit still under reduced motion. Tall enough to carry a display word makes
it a plot, which takes the next roman numeral, a counter, hanging trails and a
named figure; anything shorter is a verge and takes a single left label with a
firefly, a right-hand bramble only, and no trails.

Note that the contract fixes the set at four cards — a fifth surface is a change
to [design.md](../design.md) first, and to every theme after it.
