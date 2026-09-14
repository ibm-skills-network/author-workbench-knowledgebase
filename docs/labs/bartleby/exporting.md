---
sidebar_position: 6
---

# Exporting

Sending to Author Workbench is the main road. Exports are for everything else: a guide to
hand to someone, a docs repo, a demo.

## HTML

**Export HTML** in the editor saves one self-contained `.html` file: screenshots embedded, no
external assets, opens from a file share or an email attachment. It has three views, switched
at the top of the page:

- **Guide**: the whole document, steps and screenshots in order, with your headings,
  callouts, contents and intro.
- **Walkthrough**: one step at a time with the sections that belong to it, and previous/next.
- **Click-through**: the recording plays back interactively. The learner clicks the highlighted
  spot on each screenshot to advance, or uses the keyboard, and reaches a finish card at the
  end. A missed click is pointed at the right place.

## Markdown

**Export Markdown** saves a `.zip` with `README.md` and an `images/` folder. The Markdown is
plain and renders anywhere: GitHub, a wiki, a static site. Notes, marks, headings and image
widths survive; the marks become emoji-prefixed callouts.

The zip also contains the Skills Network lab Markdown flavour, the same text the Author
Workbench push writes, for pasting into a lab by hand.

## Which to use

| you want | use |
|---|---|
| a lab in a course | Send to Workbench |
| something to email or drop on a share | HTML |
| an interactive demo of the flow | HTML, click-through view |
| the steps in a docs repo or README | Markdown |
| to move a guide between machines | Markdown zip, then **Import from Scribe** in the library |
