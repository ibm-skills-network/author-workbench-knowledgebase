---
sidebar_position: 5
---

# Sending to Author Workbench

The short version is on the [Bartleby](./index.md) page: open a course, click the pill, press
**Create lab**. This page is the long version.

## One card, three ways to reach it

Everything happens in the card drawn in the bottom-right corner of an Author Workbench page.
There are three ways to get to it:

- **On Author Workbench already:** click the **N steps** pill.
- **From the popup**, anywhere: **Send to Workbench** switches to an open Author Workbench tab
  and opens the card there. With no tab open it opens one, on the lab this capture last went
  to if there is one, otherwise the home page.
- **From the editor:** the **Send to Workbench** button does the same.

The card needs an Author Workbench tab because everything it does happens on that tab, as the
author you are signed in as. There is nothing to set up: no token, no key, no application to
register.

## The page you are on decides where the lab lands

| the tab is on | Create lab does |
|---|---|
| a course, quicklab, article or activity page (`/courses/123`) | creates the lab owned by that organization and **attaches it there** |
| a lab page (`/labs/456`) | offers **Update lab** for that lab instead |
| any other Author Workbench page | creates the lab on its own, owned by you |

The card always says which of these it will do before you press anything. If you want the lab
in a course, be on that course's page.

## Create versus update

**Create lab** makes a new instructional lab named after your guide (editable in the card),
writes the first draft into it, and remembers where it went. **Update lab** writes a new draft
into a lab that already exists: the one you are looking at, the one this capture last went
to, or any lab id you type. The card looks the lab up and shows its name so you know which one
you are about to write into.

After a successful create, the card switches to update mode for that lab. Push again after
edits and the same lab gets a new draft. Drafts are kept as history; only the ten most recent
per version are retained, so push when you have finished a pass rather than after every edit.

## Publish versus draft

**Publish it** (ticked by default) makes the new content live for learners and starts Author
Workbench's voice-over, translation and search-indexing jobs, which run in the background and
finish a few minutes later. Untick it to write a draft only: the lab exists and the content is
there for you to review in Author Workbench, but learners see nothing until you publish, from
the card or from Author Workbench itself.

## What lands in the lab

The lab is an **instructional lab**. Its instructions are Skills Network lab Markdown:

- your title as the document's heading, your headings under it, a `::toc{}` contents block
  if you turned Contents on;
- each step as numbered prose with its screenshot below it;
- each mark as a coloured `::callout` with the step's note inside;
- screenshots uploaded to the lab version's **file library**, named after their own content,
  and referenced by their public URL. Pushing twice does not upload the same picture twice.

Everything is editable afterwards in the Author Workbench lab editor like any other
instructional lab.

## Progress and result

The card lists what it is doing as it goes: creating the lab, attaching it, writing the draft.
It finishes on a large **Open the lab** button. **Send it again** brings the form back, already
pointed at that lab.

## When it does not work

| the card says | what happened | what to do |
|---|---|---|
| **You don't have edit access to this lab** | your account cannot edit labs in that organization, or that lab | ask the course owner for access, or create the lab from a course you own |
| **The lab was created, but you do not have permission to add labs here** | the lab exists, owned by you, but you cannot add labs to this course | attach it from Author Workbench, or ask the course owner |
| **Author Workbench wants you to sign in** | the tab's session expired | reload the tab, sign in, push again |
| **No such lab — check the lab id** | the lab id does not exist on this host, or this Author Workbench does not have the Bartleby route yet | check the id; if the lab is real, the environment needs updating |
| **The capture is too large to send in one request** | dozens of full-size screenshots exceed the request limit | narrow or remove some screenshots, or split the guide |
| **lab NNNN exists — retry as an update** | the lab was created but the write failed | the card has already filled in the lab id; fix the cause above and press **Update lab** |

A push that fails after the lab was created never leaves you with a second empty lab on
retry: the card remembers the lab it made and retries as an update.

A slow push is never retried automatically. Each successful write is a new draft, so a retry
would give you two drafts of the same content. If the card sits on **writing the draft** for a
long time, wait; large captures take a while because each screenshot is stored separately on
the server side.
