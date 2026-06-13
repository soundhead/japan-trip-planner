# Project Memory

## Project Goal

Build a personal planning website for a future Japan trip from Australia for Aidan and partner. The site should collect useful trip information in one place: destinations, travel options, itinerary, future calendar planning, budget/checklist notes, and a journey map.

## Recommended Format

Use this `AGENTS.md` file as the project memory. Keep it short, factual, and updated when project direction changes. Markdown is preferred because it is easy for humans and coding agents to read, diff, and edit.

## Current Stack

- Static HTML/CSS/JavaScript.
- No package manager or build step.
- Leaflet is loaded from `unpkg.com` for the interactive map.
- OpenStreetMap tiles are used through Leaflet.
- The hero image is a local generated asset at `assets/japan-hero.png`.

## File Map

- `index.html`: page structure and section anchors.
- `styles.css`: responsive visual design.
- `app.js`: main editable trip data and rendering logic.
- `destination.html`: detail-page template for individual destinations using `?place=<slug>`.
- `serve-local.js`: tiny local static server.
- `start-site.ps1`: PowerShell launcher that starts the local server from the project folder.
- `start-site.bat`: batch launcher fallback if PowerShell script execution is blocked.
- `README.md`: user-facing project notes and hosting options.
- `assets/japan-hero.png`: local hero image used by the homepage.
- `assets/destinations/`: local rotating destination photos used by the homepage and detail pages.

## Run Locally

Preferred:

```powershell
cd "C:\Users\aidan\OneDrive\Documents\Japan Trip"
.\start-site.ps1
```

Fallback:

```powershell
cd "C:\Users\aidan\OneDrive\Documents\Japan Trip"
.\start-site.bat
```

Then open:

```text
http://localhost:8000/
```

Leave the terminal running while previewing the site.

## Editing Guidance

- Most trip content should be edited in the `trip` object in `app.js`.
- Destination photo/event metadata lives in `destinationMedia` in `app.js`; local image files are named `assets/destinations/<slug>-1.jpg` through `<slug>-3.jpg`.
- Keep the site static unless there is a clear need for a framework.
- Preserve easy free hosting on GitHub Pages, Cloudflare Pages, or Netlify.
- Avoid adding dependencies or build tooling unless the project grows beyond simple static editing.
- If adding a calendar later, prefer a data-driven static calendar first before adding accounts, databases, or authentication.
- Keep real booking details, passport details, and private reservation information out of the public site unless the repo/hosting is private.

## Design Direction

- Practical travel-planning tool, not a marketing landing page.
- First screen should clearly signal Japan travel planning.
- Keep the map and itinerary prominent.
- Use responsive layouts that work on mobile while travelling.
- Avoid decorative clutter; prioritize readable notes, route clarity, and quick updates.

## Known Notes

- System Node at `C:\Program Files\nodejs\node.exe` showed a Windows permission issue resolving `C:\Users\aidan` in this environment.
- The launchers prefer the bundled Codex Node runtime when available, then fall back to `node`.
- The in-app browser has previously blocked direct `file:///` preview. Use `http://localhost:8000/` via the local server.
