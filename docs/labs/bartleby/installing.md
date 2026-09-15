---
sidebar_position: 2
---

# Installing

## Chrome

**From the release zip** (works today):

<<<<<<< HEAD
1. **[Download Bartleby for Chrome](pathname:///docs/downloads/bartleby-chrome.zip)** and unzip it
   somewhere you will keep it. Chrome loads the extension from that folder every time it
   starts, so do not put it in Downloads and delete it later.
2. Open `chrome://extensions`.
3. Switch on **Developer mode** in the top-right corner.
4. Click **Load unpacked** and choose the unzipped folder (the one containing `manifest.json`).
=======
1. Download the latest zip from [Bartleby releases](https://github.com/ibm-skills-network/sn-scribe/releases/latest)
   and unzip it somewhere you will keep it. Chrome loads the extension from that folder every
   time it starts, so do not put it in Downloads and delete it later.
2. Open `chrome://extensions`.
3. Switch on **Developer mode** in the top-right corner.
4. Click **Load unpacked** and choose the `src` folder inside the unzipped release.
>>>>>>> aaff9b17f6522eb371a2aa1edcaf76a3c6b9f4ee
5. Click the puzzle-piece icon in the toolbar, find **Bartleby**, and click the pin.

Chrome shows a "Disable developer mode extensions" banner on startup for unpacked extensions.
Dismiss it; it comes back on the next start. The Chrome Web Store listing, once approved,
removes both the banner and the manual steps.

**From the Chrome Web Store** (once the listing is live): open the store link, click
**Add to Chrome**, accept the permissions, pin the icon. Updates arrive automatically.

## Firefox

Firefox builds are produced alongside Chrome builds but are not yet on addons.mozilla.org, so
they install as a temporary add-on that lasts until Firefox restarts:

<<<<<<< HEAD
1. **[Download Bartleby for Firefox](pathname:///docs/downloads/bartleby-firefox.zip)** and unzip it.
=======
1. Download the `bartleby-firefox-<version>.zip` from the release.
>>>>>>> aaff9b17f6522eb371a2aa1edcaf76a3c6b9f4ee
2. Open `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on…** and pick the `manifest.json` inside the unzipped folder.

In Firefox the live panel is a sidebar rather than a side panel. Everything else is the same.

## Updating

<<<<<<< HEAD
- **Zip**: download the new zip from the link above, unzip it over the old folder, then on
=======
- **Release zip**: download the new zip, unzip it over the old folder, then on
>>>>>>> aaff9b17f6522eb371a2aa1edcaf76a3c6b9f4ee
  `chrome://extensions` click the reload arrow on the Bartleby card. Your captures are kept;
  they live in the browser's extension storage, not in the folder.
- **Store**: nothing to do.

After updating, reload any Author Workbench tab you had open. The old copy of the extension's
page script keeps running in tabs that were open during the update and cannot talk to the new
one; it takes itself off the page rather than erroring, and a reload brings the new one in.

## Permissions, and why

Chrome shows "Read and change all your data on all websites" when you install. That is the
recorder: it has to see clicks and typing on whatever site you are documenting, which can be
any site. It does nothing until you press Record. The other permissions are storage for your
captures, tabs to take the screenshot and read the page URL, downloads to save exports, and
the side panel. There is no network access except the one you trigger by sending a guide to
Author Workbench. See [FAQ and privacy](./faq.md).

## Uninstalling

`chrome://extensions` → **Remove** on the Bartleby card. This deletes every capture and
screenshot stored by the extension. Export anything you want to keep first.
