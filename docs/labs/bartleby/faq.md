---
sidebar_position: 7
---

# FAQ and privacy

## Where do my recordings go?

Nowhere, unless you send them. Captures, screenshots and edits are stored in the browser's
extension storage on your machine. Bartleby has no server, no account and no analytics, and
makes no network requests on its own.

The one exception is the one you trigger: **Send to Workbench** sends the guide and its
screenshots to the Author Workbench you are signed in to, using that session. Nothing is sent
before you press the button and nothing is sent anywhere else. Exports are written only where
you save them.

## Does it record my password?

No. Password fields, card numbers, one-time codes and fields the page marks as sensitive are
recorded as a step ("Enter your password") but the value is never stored. The screenshot shows
only the browser's own dots.

Ordinary text fields **are** recorded, title and all. If you typed something sensitive into a
plain field, edit or delete that step in the editor before sending.

## Does it record when I am not recording?

No. The recorder is inert until you press Record, and stops when you press Stop. The badge
reads `REC` while it is on.

## Can I record across several tabs and sites?

Yes. Recording follows you across tabs, sign-ins and sites until you stop. Each step records
the page URL it happened on.

## The pill is not on my Author Workbench page

- There is nothing recorded yet. The pill appears once a capture has at least one step.
- You are recording. The pill hides itself so it does not appear in screenshots.
- You pressed **Hide on pages** at some point. The popup has **Show the card on Workbench
  pages** to bring it back, and **Send to Workbench** in the popup opens the card regardless.
- The tab was open before you installed or updated Bartleby. Reload it.

## Can I edit the lab afterwards in Author Workbench?

Yes. It is an ordinary instructional lab. Anything you change there stays until the next push
from Bartleby, which writes a new draft over it. If you plan to keep editing in Author
Workbench, treat the push as the first draft and stop pushing.

## Can several people work on one guide?

Not yet. A capture lives in one browser. To hand one over, **Export Markdown** and have the
other person **Import from Scribe** in their library. Collaboration is on the roadmap.

## Why is it called Bartleby?

After Melville's scrivener. He copied things down for a living.

## I found a bug

<<<<<<< HEAD
Tell the Skills Network team through the usual channel, with what you did, what you expected
and a screenshot of the card or editor if there is one. If you have access to the
`ibm-skills-network` GitHub organization, open an issue on the `sn-scribe` repository.
=======
Open an issue on [ibm-skills-network/sn-scribe](https://github.com/ibm-skills-network/sn-scribe/issues)
with what you did, what you expected and a screenshot of the card or editor if there is one.
>>>>>>> aaff9b17f6522eb371a2aa1edcaf76a3c6b9f4ee
