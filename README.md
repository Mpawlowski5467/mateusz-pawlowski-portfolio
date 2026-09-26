# Mateusz Pawłowski — Portfolio

My personal portfolio site: who I am, where I've worked, what I've built, and the tools I use.

**🔗 Live site: [mpawlowski5467.github.io/mateusz-pawlowski-portfolio](https://mpawlowski5467.github.io/mateusz-pawlowski-portfolio/)**

## About me

Hi, I'm Mateusz. I'm an Information Technology student at DePaul University and an AI intern at Reyes Holdings, where I build chatbots and internal tools, including a retrieval-augmented (RAG) onboarding assistant for new hires and Q&A bots for the pricing and security teams, and work on OneReach.ai front-end components.

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
- Monochrome, Hyprland-inspired look: each section is a terminal-style window (`~/projects$`)
- Animated code snippets drifting in the background

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

You'll need [Node.js](https://nodejs.org/) 20 or newer (the deploy workflow uses Node 22).

```bash
git clone https://github.com/Mpawlowski5467/mateusz-pawlowski-portfolio.git
cd mateusz-pawlowski-portfolio
npm install
npm run dev
```

Then open <http://localhost:5173>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the tests (watch mode; add `-- --run` to run once) |
| `npm run lint` | Lint the code with ESLint |

## Updating content

- **Text**: nearly all of it lives in [`src/i18n.js`](src/i18n.js), which holds both the English (`en`) and Polish (`pl`) versions. Update both when you change something.
- **Skills**: the lists and their icons are at the top of [`src/components/Skills.jsx`](src/components/Skills.jsx).
- **Contact links**: in [`src/components/PersonalInfo.jsx`](src/components/PersonalInfo.jsx) and [`src/components/Footer.jsx`](src/components/Footer.jsx).

## Deployment

The site deploys automatically. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs dependencies, runs the tests, builds the site with Vite, and publishes `dist/` to GitHub Pages. You can also run it by hand from the **Actions** tab (**Deploy to GitHub Pages → Run workflow**).

`vite.config.js` sets `base: './'` so the built site's asset paths work under the `/mateusz-pawlowski-portfolio/` subpath that GitHub Pages uses.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

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
│   ├── components/                # One component per section, plus navbar, footer, background
│   ├── context/                   # Language context
│   └── __tests__/                 # Vitest tests
└── vite.config.js
```

## Contact

- LinkedIn: [Mateusz Pawłowski](https://www.linkedin.com/in/mateusz-pawlowski-823849302/)
- GitHub: [@Mpawlowski5467](https://github.com/Mpawlowski5467)
- Email: [mpawlowski5467@gmail.com](mailto:mpawlowski5467@gmail.com)
