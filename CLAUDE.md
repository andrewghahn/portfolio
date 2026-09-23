# CLAUDE.md

Personal portfolio + learning space. Astro 7 (static output) with React islands and MDX, deployed to GitHub Pages at `/portfolio/`.

- The owner is learning React and web development: explain new concepts briefly when introducing them, and keep code readable over clever.
- Internal links must go through `url()` from `src/lib/url.ts` because of the `/portfolio` base path.
- Content collections are defined in `src/content.config.ts` (Zod 4 via `astro/zod`).
- Visual themes are CSS variables in `src/styles/themes.css`; pages should use the variables, not hard-coded colors.
- The site is static: never commit secrets or call paid APIs with keys from client code.
- Before committing, run `npm run check && npm run build`.
