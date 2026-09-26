# Mateusz Pawłowski — Portfolio

My personal portfolio site: who I am, where I've worked, what I've built, and the tools I use.

**🔗 Live site: [mpawlowski5467.github.io/mateusz-pawlowski-portfolio](https://mpawlowski5467.github.io/mateusz-pawlowski-portfolio/)**

## About me

Hi, I'm Mateusz. I'm an Information Technology student at DePaul University and an AI intern at Reyes Holdings, where I build chatbots, including a retrieval-augmented generation (RAG) onboarding assistant for new hires and Q&A bots for the pricing and security teams, and work on OneReach.ai front-end components and chatbot UI templates.

Outside of work I'm into homelabbing and self-hosting, Chelsea FC, reading, hiking, and baking.

## What's on the site

- **About**: short bio, location, interests, and contact links
- **Experience**: my AI internship at Reyes Holdings
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
| Styling | [Tailwind CSS](https://tailwindcss.com/) (via CDN) + custom CSS in `src/index.css` |
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

- **Main content**: the bio, experience bullets, project names and descriptions, education, and interests live in [`src/i18n.js`](src/i18n.js), in both English (`en`) and Polish (`pl`). Update both when you change something.
- **Hard-coded text**: some text lives directly in the components, in English only:
  - Section taglines and headings in each section component
  - The "Current Position" badge and tech chips in [`Experience.jsx`](src/components/Experience.jsx)
  - The GPA and Dean's List chips in [`Education.jsx`](src/components/Education.jsx)
  - Per-project tech tags in [`Projects.jsx`](src/components/Projects.jsx), matched to projects by position
  - The background snippets in [`CodeBackground.jsx`](src/components/CodeBackground.jsx)
  - The copyright year in [`Footer.jsx`](src/components/Footer.jsx)
- **Skills**: the lists and their icons are at the top of [`src/components/Skills.jsx`](src/components/Skills.jsx).
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
├── index.html                     # HTML entry point (loads Tailwind from its CDN)
├── public/                        # Static files copied into the build as-is
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Page layout and language state
│   ├── i18n.js                    # All site text, English + Polish
│   ├── index.css                  # Theme variables and global styles
│   ├── components/                # Section components, plus navbar, language toggle,
│   │                              #   footer, back-to-top button, and code background
│   ├── context/                   # Language context
│   └── __tests__/                 # Vitest tests
├── tailwind.config.js             # Custom color names; not currently loaded by the site
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Contact

- LinkedIn: [Mateusz Pawłowski](https://www.linkedin.com/in/mateusz-pawlowski-823849302/)
- GitHub: [@Mpawlowski5467](https://github.com/Mpawlowski5467)
- Email: [mpawlowski5467@gmail.com](mailto:mpawlowski5467@gmail.com)
