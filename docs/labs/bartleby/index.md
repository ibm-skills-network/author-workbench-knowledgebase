---
sidebar_position: 1
title: Bartleby
description: Record a click-through in your browser and turn it into an instructional lab in one click.
---

# Bartleby

Bartleby is a browser extension that turns a click-through into a lab. Press record, work
through your flow, press stop. Every click and every field you fill in becomes a numbered step
with an annotated screenshot. Then send it to Author Workbench and it becomes an instructional
lab, attached to your course, with the screenshots already in the lab's file library.

![The Bartleby editor showing a recorded guide](/img/labs/bartleby/editor.png)

## Install

1. Download the latest release: **[Bartleby releases](https://github.com/ibm-skills-network/sn-scribe/releases/latest)**
   (sign in to GitHub with your IBM Skills Network account). Unzip it.
2. In Chrome, open `chrome://extensions`, switch on **Developer mode** (top right), click
   **Load unpacked**, and choose the `src` folder from the zip.
3. Click the puzzle-piece icon in the toolbar and pin **Bartleby** so it is one click away.

:::info Chrome Web Store
A Chrome Web Store listing is in review. Once it is live, installing will be one click from the
store and the extension will update itself. Until then, the release zip above is the way in.
:::

Firefox is supported too. See [Installing](./installing.md) for Firefox and for how to update.

## Record

1. Click the Bartleby icon in the toolbar and press **Record**. The badge reads `REC` and a
   panel opens beside the page showing steps as they land.
2. Work through your flow in any tab, as you normally would. Click slowly enough that each page
   settles: roughly one action every couple of seconds.
3. Press **Stop**, in the popup or the panel.

Each click becomes a step titled from the page ("Click the **New project** button"), with a
screenshot taken the moment you clicked, the target bracketed and numbered. Typing into a field
folds into the click that opened it, so filling in a form reads as one step per field.

Password fields, card numbers and one-time codes are recorded as steps but never as values.

## Send to Author Workbench

1. Open Author Workbench and go to the **course** the lab belongs to.
2. Click the **N steps** pill in the bottom-right corner. The card says where the lab will land.
3. Check the lab name, leave **Publish** ticked or untick it to save a draft, and press
   **Create lab**.

![The Send to Workbench card on a course page](/img/labs/bartleby/send-to-workbench.png)

Thirty seconds later the card shows **Open the lab**. The lab is an instructional lab owned by
the course's organization and attached to that course, with your headings, steps, callouts and
screenshots inside. Push again later and it updates the same lab as a new draft.

That is the whole flow. Everything below is for when you want more.

## Going further

- **[Installing](./installing.md)**: Firefox, updating, and installing without the store.
- **[Recording](./recording.md)**: what gets captured, how typing and dropdowns are handled,
  what Bartleby cannot see, and how to record cleanly.
- **[Editing the guide](./editing.md)**: rename steps, add notes and warnings, group steps under
  headings, restart numbering, narrow screenshots, add an intro and a contents list.
- **[Sending to Author Workbench](./sending-to-workbench.md)**: how the lab is created, what
  the page you are on decides, create versus update, publish versus draft, and what to do when
  a push fails.
- **[Exporting](./exporting.md)**: a self-contained HTML guide that also plays as an
  interactive click-through, or a Markdown zip for a docs repo.
- **[FAQ and privacy](./faq.md)**: what stays on your machine, what is sent, and answers to
  the questions we get most.
