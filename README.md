# Mateusz Pawlowski Portfolio

Hello current I am a university Student at Depaul University in my senior year. I am majoring in Information Technology. A couple of my hobbies are play video games, reading, hiking, coding, and hanging with my friends. This is my portfolio that I will be working on during the summer.

Currently I am just initializing all of my components, I will be using React to build this project of mine. Hopefully I will be doing constant updates for the projects.

This project uses the official React plugin for Vite:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.

## Layout variables

Spacing for the fixed clock bar, floating dock and footer is controlled by CSS custom properties in `src/index.css`:

```
--clock-bar-height  /* height of the top timezone bar */
--dock-height       /* height of the dock navbar */
--dock-gap          /* gap between the clock bar and dock */
--footer-height     /* height of the footer */
```

Adjust these values to keep main content from being hidden behind the fixed UI elements.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
