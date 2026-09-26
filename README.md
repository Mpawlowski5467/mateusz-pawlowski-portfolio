# Mateusz Pawłowski — Portfolio

My personal portfolio site: who I am, where I've worked, what I've built, and the tools I use.

**🔗 Live site: [mpawlowski5467.github.io/mateusz-pawlowski-portfolio](https://mpawlowski5467.github.io/mateusz-pawlowski-portfolio/)**

## About me

Hi, I'm Mateusz. I'm an AI / Automation Associate at Reyes Holdings and a DePaul University graduate in Information Technology (B.S., 2026). I joined Reyes as an AI intern in 2024, building chatbots, including a retrieval-augmented generation (RAG) onboarding assistant for new hires and Q&A bots for the pricing and security teams, and working on OneReach.ai front-end components and chatbot UI templates.

Outside of work I'm into homelabbing and self-hosting, Chelsea FC, reading, hiking, and baking.

## What's on the site

- **About**: short bio, location, interests, and contact links
- **Experience**: my roles at Reyes Holdings, from AI intern to AI / Automation Associate
- **Projects**: a Polish school website redesign, a car-parts e-commerce platform, and a Chicago event-ticketing site
- **Education**: DePaul University and Harper College
- **Skills**: languages, frameworks, databases, and AI platforms, grouped by category

A few design details:

- English ⇄ Polish language toggle
- Floating dock navigation whose icons magnify as your cursor passes over them
- Monochrome, Hyprland-inspired look, with content sections in terminal-style windows (`~/projects$`, `~/work$`, …)
- Code snippets that fade in at random spots in the background

## Tech stack

| | |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 6](https://vite.dev/) |
| Styling | [Tailwind CSS 3](https://v3.tailwindcss.com/) (built with PostCSS) + custom CSS in `src/index.css` |
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

- **Text**: the wording for every section lives in [`src/i18n.js`](src/i18n.js), in both English (`en`) and Polish (`pl`). Update both when you change something. That includes the bio, your roles and dates, experience bullets and skill chips, education and highlights, section taglines, and interests.
- **Projects**: each project in `src/i18n.js` has `name`, `desc`, `tags`, `link` (the repo, shown as the **GitHub** button), and an optional `demo` (a live site, shown as a **Live demo** button).
- **Skills**: the skill lists, their icons, and the code-style labels (`const backend = [` …) are in [`src/components/Skills.jsx`](src/components/Skills.jsx).
- **Background snippets**: in [`src/components/CodeBackground.jsx`](src/components/CodeBackground.jsx).
- **Footer date**: "Last updated" is filled in automatically from the date of the latest commit when the site is built.
- **Link preview**: the image shown when the link is shared is [`public/og-image.png`](public/og-image.png), generated from [`scripts/og-image.html`](scripts/og-image.html) (instructions inside). The title and description are in [`index.html`](index.html).
- **Contact links**: hard-coded in [`src/components/PersonalInfo.jsx`](src/components/PersonalInfo.jsx) and [`src/components/Footer.jsx`](src/components/Footer.jsx). The email also appears in `src/i18n.js` (`about.email`) as the link label.

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
├── public/                        # Static files copied into the build as-is (icons, preview image)
├── scripts/og-image.html          # Source for the link-preview image
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Page layout and language state
│   ├── i18n.js                    # All site text, English + Polish
│   ├── index.css                  # Theme variables and global styles
│   ├── components/                # Section components, plus navbar, language toggle,
│   │                              #   footer, back-to-top button, and code background
│   ├── context/                   # Language context
│   └── __tests__/                 # Vitest tests
├── tailwind.config.js             # Tailwind theme: semantic colors (background, foreground, neutral)
├── postcss.config.js              # Runs Tailwind during the build
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Contact

- LinkedIn: [Mateusz Pawłowski](https://www.linkedin.com/in/mateusz-pawlowski-823849302/)
- GitHub: [@Mpawlowski5467](https://github.com/Mpawlowski5467)
- Email: [mpawlowski5467@gmail.com](mailto:mpawlowski5467@gmail.com)
