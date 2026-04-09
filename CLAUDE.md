# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173, or next available port)
npm run build      # Production build → dist/
npm run preview    # Serve the production build locally
```

There is no test runner or linter configured.

## Architecture

Vanilla JS + Vite SPA — no framework, no component library.

- **`index.html`** — single HTML shell; contains only `<div id="app">` and a `<script type="module">` pointing to `src/main.js`.
- **`src/main.js`** — entire application. Renders all HTML via one `app.innerHTML = \`...\`` assignment, then attaches event listeners and an `IntersectionObserver` for scroll-in animations. All sections (navbar, hero, stats, feature splits, safety, specs, CTA, footer) live in this one file.
- **`src/style.css`** — all styles; no preprocessor. Organised in labelled sections matching the HTML sections in `main.js`. Uses CSS custom properties defined on `:root` for the design tokens (colors, typography scale). Scroll-animation pattern: elements start `opacity: 0; transform: translateY/X(...)` and gain a `.visible` class via the observer.
- **`public/`** — static assets served at `/` (favicon, icons sprite).
- **`src/assets/`** — assets imported directly in JS (processed by Vite).

## Key design patterns

- **No router.** All content is rendered at once; navigation links are anchor `href="#section-id"` smooth-scrolls.
- **Scroll animations** use a single shared `IntersectionObserver` in `main.js`; add `opacity:0` + transform in CSS and query-select the element in the observer setup to opt in.
- **Dark/light sections** are toggled with a `.dark` class on `.section` and `.split-section`; child color overrides are scoped inside those selectors in `style.css`.
- **Responsive breakpoints** are `900px` (tablet, hamburger menu appears) and `480px` (mobile).
