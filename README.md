# Japan Trip Planner

A dependency-free static website for planning a future personal trip to Japan from Australia.

## Edit The Trip

Most trip content lives in `app.js`:

- `trip.stops` controls the journey map and route list.
- `trip.destinations` controls the destination cards.
- `trip.itinerary` controls the draft schedule.
- `trip.transport`, `trip.budget`, and `trip.checklist` control the planning panels.

## Preview Locally

Open `index.html` in a browser, or run the local static server from this folder:

```powershell
.\start-site.ps1
```

Then open `http://localhost:8000`.

If PowerShell blocks scripts on your machine, use:

```powershell
.\start-site.bat
```

## Free Hosting Options

- GitHub Pages: simplest if this folder is pushed to a GitHub repository. The default address is usually `https://USERNAME.github.io/REPOSITORY/`.
- Cloudflare Pages: generous free static hosting and custom domain support if you already use or want Cloudflare DNS.
- Netlify: easy drag-and-drop or Git-based static deployments, with a generated `netlify.app` address that can be changed to a memorable subdomain if available.

For a truly easy-to-remember address, buy a custom domain and point it at one of those hosts. Free subdomains are available, but the exact memorable name depends on availability.
