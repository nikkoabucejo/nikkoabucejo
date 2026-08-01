# DESIGN — THE CARD SET

The source of truth for this profile. It is written in two layers:

- **This document — the contract.** What the four cards *are*, what each one must
  say, how big it is, and the rules every rendering obeys. It names no colour, no
  typeface and no mark. It does not change when the look changes.
- **A theme document — the look.** How one specific design answers the contract
  inside those dimensions: palette, type, internal geometry, motion, figures,
  marks. One per design, in [themes/](themes/).

If a rendering and these documents disagree, the documents win. If a theme and
this contract disagree, this contract wins — a theme may decide anything the
contract leaves open, and nothing it fixes.

**Themes**

| Theme | Document | Assets | Status |
|---|---|---|---|
| Enchanted | [themes/ENCHANTED.md](themes/ENCHANTED.md) | [assets/enchanted/](assets/enchanted/README.md) | Available |
| Apex | [themes/APEX.md](themes/APEX.md) | [assets/apex/](assets/apex/README.md) | Available |
| Atomic | [themes/ATOMIC.md](themes/ATOMIC.md) | [assets/atomic/](assets/atomic/README.md) | Available |
| Experiment | [themes/EXPERIMENT.md](themes/EXPERIMENT.md) | [assets/experiment/](assets/experiment/README.md) | Active |

One theme is briefed but not yet written: **ALIVE**, in §6. It joins the table
when its document exists.

---

## 1 · THE SET

Four cards, stacked in this order at full width. The set is fixed: a theme
redraws these four, it does not add a fifth or drop one.

| # | Card | Role | Size | Weight |
|---|---|---|---|---|
| 1 | Hero | Identity — who this is | **1200 × 420** | Major |
| 2 | Pulse | Proof of life | **1200 × 110** | Minor |
| 3 | Skills | The technical index | **1200 × 510** | Major |
| 4 | Socials | Where to find them | **1200 × 72** | Minor |

**The dimensions are fixed, in every theme.** They are part of this contract, not
a theme decision. The set is always 1200 wide and 1112 tall, and each card always
occupies its own share of that. Switching themes must not move a single pixel of
the layout — only what is drawn inside it. A theme that wants a different
proportion is asking to change this table, which changes it for every theme.

Cards are drawn at these dimensions and displayed at `width="100%"`, so each one
scales by the same factor and the ratios hold at any column width.

**Rhythm.** Two major cards carry the substance; two minor cards punctuate them.
A minor card is short enough that it reads as a divider rather than a section,
and never carries a display word — 420 and 510 against 110 and 72 is the
composition of the set.

---

## 2 · CONTENT

The data below is the profile, not the design. It is identical in every theme;
only its presentation changes. Update it here.

**Identity** — Nikko Abucejo · me@nikkoabucejo.com · Philippines

**Titles**, in cycle order. `SOFTWARE ENGINEER` is the anchor: where a theme
shows one title, it shows this one.

Software Engineer · Full-Stack Developer · AI Engineer · Software Architect ·
UI/UX Designer

**Skills** — 32 entries across 5 groups, in this order:

| Group | Entries |
|---|---|
| 01 Frontend | Next.js · React · TypeScript · JavaScript · Tailwind CSS · React Native |
| 02 Backend | Node.js · PostgreSQL · Prisma · Supabase · REST APIs · WebSockets · Redis |
| 03 AI | AI Engineering · LLM APIs · AI Agents · RAG · Prompt Design · Automation |
| 04 Platform | Git · GitHub Actions · Docker · Vercel · CI/CD · Linux · Monorepo |
| 05 Craft | SEO · UI/UX · Figma · Design Systems · Accessibility · Performance |

**Socials** — one handle across every channel: `@nikkoabucejo` on Instagram,
Threads, LinkedIn and YouTube, in that order.

**Revision** — `2026.08`. The stamp for the set as a whole. Bump it whenever a
card changes, in any theme.

---

## 3 · THE CARDS

Each card below states its size, what it must communicate and what it must
contain. How any of it is drawn, placed, weighted or animated inside that box is
the theme's to decide.

### 3.1 · HERO — 1200 × 420

The identity plate: who this is, in one screen. The most substantial card in the
set, and the only one that may lead with the name.

Must carry: the name, as the largest single element in the set · the email ·
the titles, cycling, resolving to the anchor at rest · the location · a figure
that stands for the theme itself.

### 3.2 · PULSE — 1200 × 110

The divider between the two major cards. It exists to prove the set is live: it
is the one card whose whole content is motion, and it should read as an
instrument, not an ornament.

Must carry: a repeating signal with a stated rate · that rate, labelled · the
rate must be true — the label reports what the animation actually does, it is not
a caption.

### 3.3 · SKILLS — 1200 × 510

The technical index, in the same language as the hero. The second major card, and
the only place the full skill set is written out.

Must carry: all five groups, numbered and named · all 32 entries, in the order
above, each individually legible · a figure, as the hero has one.

**One cause, every effect.** Within this card, everything that animates answers
to a single travelling clock — an entry reacts *because* the sweep reached its
position, never on a private timer. This is what keeps 32 elements from reading
as noise, and it is a rule of the card, not of any theme.

### 3.4 · SOCIALS — 1200 × 72

The shortest card in the set. One handle covers every channel, so the handle is
written once and the marks carry the difference.

Must carry: a mark per channel, in the order above · the handle, once · the
channel names spelled out, so no glyph has to be guessed at.

**Marks are drawn, never dropped in.** Every mark is authored in the theme's own
language — its stroke, its fills, its typeface. No imported logo sets, no brand
colours. Where a real mark will not survive that treatment at the size it is
drawn, it is replaced by a legible stand-in — a letterform or sigil set in the
theme's own type — rather than rendered into mush.

---

## 4 · RULES

Every theme obeys all of these.

**Self-contained.** Each card is a single SVG that renders correctly on its own,
offline, with no external stylesheet, script, font file or image. Type falls back
through a stack of faces present on the reading machine.

**Interchangeable.** Each card carries exactly the `viewBox` and intrinsic size
given in §1 — no padding, no bleed, no per-theme trim. Any two themes' cards are
drop-in replacements for each other: swapping a theme changes the four paths in
the README and nothing reflows, on any screen.

**Static-complete.** The still composition is finished on its own. Animation adds
life, never legibility. Any single frame must read as a complete card — never as
a half-played state, never as several things stacked on one line.

**Reduced motion is a real design, not a fallback.** Under
`prefers-reduced-motion`, every card resolves to its most legible resting state:
entrances land, cycles stop on their anchor, travelling effects settle evenly.
Anything whose only purpose was travel is removed outright rather than frozen
mid-flight. A theme designs this state; it does not inherit it by accident.

**One accent.** A theme names exactly one signal colour and uses it only for live
things: current, focus, the present revision. Everything else is ink on ground.
A theme may choose which colour; it may not choose two.

**Legible at fit-width.** Cards are read scaled down inside a README column.
Nothing may depend on detail that survives only at 1:1.

**Content is not decorative.** Every number, label and figure either carries
information or says where information sits.

---

## 5 · ADDING A THEME

A theme is a document in `themes/<NAME>.md` plus a directory `assets/<name>/`
holding `hero.svg`, `pulse.svg`, `skills.svg`, `socials.svg` and a `README.md`
that renders all four in order. Switching themes is switching the four paths in
[README.md](README.md); one theme is active at a time.

The document must fix everything this contract leaves open:

- **Ground and ink** — the full palette, including the single accent, with the
  role of each value.
- **Type** — the faces, their fallback stacks, what each is used for, and the
  size scale.
- **Geometry** — margins, radii, borders, and whatever lattice or measure
  positions live on, *inside* the fixed card sizes in §1. A theme never restates
  or overrides those sizes.
- **Motion vocabulary** — the named behaviours, their durations and easings, and
  the entrance timing for the set.
- **The four cards** — how each one answers §3, element by element, including its
  reduced-motion resting state.
- **Extending** — what a fifth surface would have to do to belong to this theme.

Add a row to the Themes table above when the document exists.

---

## 6 · THEME BRIEF — ALIVE

A brief, not a theme. It states the intent for `themes/ALIVE.md`; the document
itself still has to answer §5 line by line, and it obeys §4 like every other.

**The intent.** Other themes draw an object. This one draws a place that happens
to contain one. The set should feel inhabited — air, depth, weather, warmth,
something that was already going on before the page loaded and will keep going
after. Living, not decorated.

**What it is made of.**

- **Atmosphere** — depth that comes from air rather than from borders: haze,
  falloff, layers reading at different distances, a sense of somewhere behind
  the ink.
- **Ambience** — the slow, quiet, unprompted layer. Drift, breath, glow that
  pulses on its own long clock. Nothing here demands to be watched, and nothing
  here carries information.
- **Motion** — bodies with weight. Things ease, settle, overshoot slightly,
  come to rest. Nothing moves linearly and nothing snaps.
- **Creativity** — the theme is licensed to invent. Where the contract is silent,
  take the strange option over the safe one.

**Source before effect.** This is the theme's hard rule, and it governs the
entrance above all else.

Nothing may appear before the thing that causes it. Glow, bloom, haze, shadow,
particles, trails, reflections, resonance — these are *consequences*, and a
consequence cannot precede its cause. On first render the source arrives first:
the lamp before its light, the body before its shadow, the mark before its
shimmer. The effect then blooms out of it, visibly caused by it.

The entrance order is therefore **source → effect → ambience**. Any frame in
which the light exists and the thing emitting it does not is a defect, not a
state — including the very first frame, and including the case where the source
is still fading in. Ambience is the last layer to switch on, and it only earns
its own clock once the set has settled; during the entrance it does not exist.

The reward for the rule is the entrance itself: the card assembles, and the room
lights up around it.

**Always surprise.** Each surface should hold one thing that was not asked for
and could not have been predicted from the other three — a behaviour, a figure,
a detail that only shows itself on the second viewing or the third. The set
should reward looking again. A theme that is merely consistent has failed this
brief; delight is a requirement here, not a bonus.

**What it may not trade away.** Surprise is spent on the still composition and
the motion, never on the reading. The static frame is still complete on its own
(§4), the reduced-motion state is still a designed room with the weather turned
off rather than a stripped one, the accent is still exactly one colour, and every
card is still legible scaled into a README column. Atmosphere that costs a word
its legibility is not atmosphere — it is fog.
