# Mateusz Pawłowski — Portfolio

My personal portfolio site: who I am, where I've worked, what I've built, and the tools I use.

**🔗 Live site: [mpawlowski5467.github.io/mateusz-pawlowski-portfolio](https://mpawlowski5467.github.io/mateusz-pawlowski-portfolio/)**

## About me

Hi, I'm Mateusz. I'm an AI / Automation Associate at Reyes Holdings, where I started as an AI intern in 2024, and a DePaul University graduate in Information Technology (B.S., 2026).

Outside of work I run a Proxmox homelab in a portable rack with 17 self-hosted services, reachable only on my LAN or over Tailscale and managed as code. I also build self-hosted tools like [Loom](https://github.com/Mpawlowski5467/Loom), [SportsDash](https://github.com/Mpawlowski5467/SportsDash), and [Argus](https://github.com/Mpawlowski5467/Argus). Other interests: Chelsea FC, reading, hiking, and baking.

## What's on the site

- **Hero**: name, role, and location, typed out like a shell session, next to an ASCII drawing of my homelab rack
- **01 about**: short bio (mostly homelab) and interests
- **02 work**: my roles at Reyes Holdings, from AI intern to AI / Automation Associate, and the automations and tools I've built there
- **03 projects**: Loom, SportsDash, and Argus, with screenshots
- **04 edu**: DePaul University and Harper College
- **05 skills**: my stack, shown as a `skills.json` file

A few design details:

- Black-and-white, terminal-inspired look: a sticky top bar with plain text links, numbered section headings, and monospace accents
- **Terminal boot intro**: the hero types `whoami`, `cat role.txt`, and `cat location.txt` once per visit. Clicking or pressing any key skips it, and it's skipped entirely for visitors who prefer reduced motion
- **ASCII homelab rack**: blinking LEDs, load bars, a network sparkline, and a scrolling list of my real services. It's decorative (random values, not live data) and pauses when off-screen
- Project screenshots in grayscale that turn to color on hover
- English ⇄ Polish language toggle

## Tech stack

| | |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 6](https://vite.dev/) |
| Styling | [Tailwind CSS 3](https://v3.tailwindcss.com/) (built with PostCSS) + custom CSS in `src/index.css` |
| Fonts | [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/), self-hosted via [Fontsource](https://fontsource.org/) |
| Icons | [Simple Icons](https://simpleicons.org/), drawn inline so they follow the text color |
| Testing | [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), jsdom |
| Linting | [ESLint 9](https://eslint.org/) |
| Hosting | GitHub Pages, deployed with GitHub Actions |

## Running locally

You'll need [Node.js](https://nodejs.org/) 22 or newer (the deploy workflow uses Node 22).

```bash
git clone https://github.com/Mpawlowski5467/mateusz-pawlowski-portfolio.git
cd mateusz-pawlowski-portfolio
npm install
npm run dev
```

Then open the URL Vite prints (<http://localhost:5173> by default).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally (<http://localhost:4173>) |
| `npm test` | Run the tests (watch mode; add `-- --run` to run once) |
| `npm run lint` | Lint the code with ESLint |

## Updating content

- **Text**: all the wording lives in [`src/i18n.js`](src/i18n.js), in both English (`en`) and Polish (`pl`). Update both when you change something. That covers the hero, bio, interests, roles and dates, projects, education, and footer.
- **Work projects**: the things I've built at Reyes are under `experience.projects` in `src/i18n.js` (`name`, `desc`, `tags`).
- **Projects**: each project in `src/i18n.js` has `name`, `tagline`, `desc`, `tags`, `link` (the repo, shown as the **source** link), an optional `demo` (a live site, shown as a **live demo** link), and an `image` in [`public/projects/`](public/projects/) (1280×720 WebP).
- **Skills**: the groups and items, with their icons, are at the top of [`src/components/Skills.jsx`](src/components/Skills.jsx). Icons come from `simple-icons`; anything missing there gets a short text mark, or a custom path in [`src/customIcons.js`](src/customIcons.js).
- **Homelab rack**: the service names and hardware labels are in [`src/components/HomelabRack.jsx`](src/components/HomelabRack.jsx).
- **Contact links**: in [`src/links.js`](src/links.js), used by the hero and the footer.
- **Footer date**: "last updated" is filled in automatically from the date of the latest commit when the site is built.
- **Link preview**: the image shown when the link is shared is [`public/og-image.png`](public/og-image.png), generated from [`scripts/og-image.html`](scripts/og-image.html), which mirrors the hero (instructions inside). The title and description are in [`index.html`](index.html).

## Deployment

**One-time setup (do this before the first deploy):**

1. In the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
2. Optional: on the repo home page, click the gear next to **About** and tick **Use your GitHub Pages website**. That puts the live link at the top of the repo.

After that, the site deploys automatically. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs dependencies, runs the tests, builds the site with Vite, and publishes `dist/` to GitHub Pages. You can also re-run it from the **Actions** tab (**Deploy to GitHub Pages → Run workflow** on `main`). Do that if a run failed because Pages wasn't enabled yet.

`vite.config.js` sets `base: './'` so the built site's asset paths work under the `/mateusz-pawlowski-portfolio/` subpath that GitHub Pages uses.

## Project structure

```
├── .github/workflows/deploy.yml   # Build + deploy to GitHub Pages
├── index.html                     # HTML entry point, page title, and link-preview tags
├── public/                        # Static files copied as-is: icons, preview image, projects/ screenshots
├── scripts/og-image.html          # Source for the link-preview image
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Page layout and language state
│   ├── i18n.js                    # All site text, English + Polish
│   ├── links.js                   # Contact links
│   ├── customIcons.js             # Brand icons missing from simple-icons (OneReach.ai)
│   ├── index.css                  # Theme variables and global styles
│   ├── components/                # Header, Hero (terminal intro), HomelabRack (ASCII art),
│   │                              #   one component per section, Footer, and small helpers
│   ├── context/                   # Language context
│   └── __tests__/                 # Vitest tests
├── tailwind.config.js             # Tailwind theme: colors and fonts
├── postcss.config.js              # Runs Tailwind during the build
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Contact

- LinkedIn: [Mateusz Pawłowski](https://www.linkedin.com/in/mateusz-pawlowski-823849302/)
- GitHub: [@Mpawlowski5467](https://github.com/Mpawlowski5467)
- Email: [mpawlowski5467@gmail.com](mailto:mpawlowski5467@gmail.com)
