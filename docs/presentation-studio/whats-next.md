---
sidebar_position: 2
---

# What's Next

The [Quick Start](/presentation-studio/quick-start) covers what's live in the beta today: you write a brief, answer the run's questions, approve the outline on the **Proposal** screen, then approve and download the finished file on the **Delivery** screen. A few controls in the product are tagged "Coming soon" and don't do anything yet. This page is what those become, plus what's planned beyond them.

None of it changes the part that matters most. The two approval checkpoints stay exactly as they are: nothing is generated before you approve the outline, and nothing is saved or shared before you approve the file.

:::note
Everything here is planned or in progress, and the details can change before it ships. For what you can use today, follow the [Quick Start](/presentation-studio/quick-start).
:::

## Studio: watching the deck as it's built

Today a run takes you from Proposal straight to Delivery, and the deck is something you see once it's finished. **Studio** is a screen in between: the deck on a canvas, filling in slide by slide as the run writes it, with the activity panel alongside it and the question bar in its usual place.

- **Grid or single slide**: see the whole deck at once, or page through it one slide at a time with the arrow keys.
- **The real page as soon as there is one**: each slide shows its actual rendered page the moment it's available. Until then a live composition stands in, so nothing on the canvas is a guess.
- **Act on one slide without stopping the run**: send a single slide back to be rewritten, or adjust what it's meant to do, while the rest of the deck keeps going.
- **A running count**: "12 of 18 slides", so you always know how far along the deck is.

The Studio tab already shows on a run, tagged "Coming soon". Once it's live, a run with an approved proposal opens here by default.

## Ledger: every decision, in the open

The run already records everything it assumes and everything you approve. **Ledger** is the screen that shows that record and lets you act on it.

Approvals and assumptions are grouped into four facets:

- **Look**: the template. Fonts, colours, background, the set of available slide types, and any rules the template carries.
- **Tone**: word choice, register, and how the deck is put together. Playful or serious, image-heavy or text-only.
- **Narrative**: the story. Whether it builds, whether the conclusion lands, whether the contents page walks you through it.
- **Substance**: factual correctness, sources, data provenance, and hitting the specific points you need hit.

Every assumption stays visible and stays editable. You can approve it, correct it, or override it, one at a time or a whole facet at once, and each choice becomes a binding instruction the same way an answer to a question does.

Below the facets is the **Trace**: the run's flight recorder. Not only what the run did, but why. Every event carries the sentence that explains it, timestamped from the start of the run, so "why does this slide look this way" has an answer after the fact.

The Ledger tab is also on screen today, tagged "Coming soon". The record itself is kept either way.

## Choosing how much the run asks you

Right now every run behaves the same way: it surfaces every assumption for you to see. After the beta, an **Auto-accept** control on the home screen sets this, with three levels:

- **Tell me everything**: every assumption surfaces. This is today's behaviour, and it stays the default.
- **High-level only**: the run asks only about what it genuinely can't infer, such as the goal, which template to use, and whose voice the deck is in.
- **Full auto**: the run doesn't stop for assumptions. You can still watch it, and a change you make applies to work already in progress. The final approval gate stays on.

## Starting from an example

The home screen will offer a few **starting moves**: worked briefs like "Merge these 3 decks into one and fix the template" or "Fix this one slide". Picking one fills in the brief box for you to edit. It's only a starting point; the run treats the result as a brief you wrote.

## Your own templates, and more of them

The beta ships with a small set of templates. That set grows to roughly 10 to 15 built-in options.

**Use my own template** lets you upload a `.pptx` or `.potx` and have the run build into it. The file itself stays on the server; the run reads its layouts, colours, and fonts, and treats it like any other template.

If a built-in template is ever retired, runs that used it are moved to a replacement rather than left broken.

## The deck gets checked before you get it

The Delivery screen already compares the finished deck against what you approved and calls out anything that drifted. After the beta it also carries a quality readout, and the checks behind it run against the rendered deck rather than an estimate, so they report what actually happened:

- **Blocking issues**: text clipped because it didn't fit, a slide that came out blank, or content dropped because there was nowhere to put it. Delivery won't release a deck with one of these unresolved.
- **Warnings**: a slide that looks thin, or a deck that leans on one layout too heavily. Noted, not blocked.

## One deck, several outputs

Once the PowerPoint itself is right, the same content becomes other things. These show on Delivery as "Coming soon" tiles today:

- **Speaker notes**: per slide, in your voice, timed to the room.
- **Voiceover**: narration recorded over the finished deck.
- **Video render**: the deck as a shareable film.
- **Translation**: the same deck in four languages, with the template intact.

## Further out: larger source sets

Attached documents are currently read in full and passed to the run as they are, which limits how much source material one run can draw on. A dedicated ingestion step is being built: each document is processed once, then split and indexed, and the run pulls only the passages relevant to each slide instead of carrying the whole file. It raises that limit and lets the run point at the specific page or heading a fact came from. This one is still in progress.
