# Portfolio

My personal site: portfolio, resume, blog, and a playground for experiments.
Built with [Astro](https://astro.build) and [React](https://react.dev), deployed to GitHub Pages.

Live at **https://andrewghahn.github.io/portfolio/**

## Running it locally

You need [Node.js](https://nodejs.org) 22 or newer.

```sh
npm install     # once, to download dependencies
npm run dev     # start a local server at http://localhost:4321/portfolio/
```

The dev server reloads the page whenever you save a file.

| Command           | What it does                                 |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Local dev server with live reload            |
| `npm run build`   | Build the production site into `dist/`      |
| `npm run preview` | Serve the built `dist/` folder locally       |
| `npm run check`   | Type-check and catch errors before deploying |

## Where things live

```
src/
├── data/
│   ├── site.ts          ← name, tagline, social links, nav, active theme
│   └── resume.ts        ← experience and skills
├── content/
│   ├── blog/            ← blog posts (.md or .mdx)
│   └── projects/        ← project write-ups (.md or .mdx)
├── pages/               ← each file is a URL (pages/resume.astro → /resume)
│   └── playground/      ← experiments; add a page here + list it in playground/index.astro
├── components/
│   └── react/           ← interactive React components
├── layouts/BaseLayout.astro  ← header, nav, footer shared by every page
└── styles/
    ├── global.css       ← base styles
    └── themes.css       ← color/font "seasons" for the whole site
```

## Common tasks

**Write a blog post:** copy `src/content/blog/hello-world.md`, rename it, and edit.
The filename becomes the URL. Add `draft: true` to the frontmatter to hide it.

**Add a project:** add a file in `src/content/projects/`. Use `.mdx` to embed live
React demos (see `example-project.mdx`).

**Change the site's look for a new season:** add a theme block to
`src/styles/themes.css` and set `theme` in `src/data/site.ts`.

**Add a playground experiment:** create `src/pages/playground/my-thing.astro`, put any
React component in `src/components/react/`, use it with `client:visible`, and add a link
in `src/pages/playground/index.astro`.

## Astro vs. React in one paragraph

`.astro` files produce plain HTML when the site builds, so they're fast and send no
JavaScript to the browser. React components (`.tsx`) are for the parts that need to
respond to clicks and typing. A React component only runs in the browser when you use it
with a `client:` directive, like `<ColorMixer client:visible />`. Leave the directive
off and it becomes static HTML. These interactive pieces are called "islands."

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

One-time setup: in the repo on GitHub, go to **Settings → Pages** and set
**Source** to **GitHub Actions**.

## Note on API experiments (e.g. the Anthropic API)

GitHub Pages only serves static files, so anything placed in the site's code is public.
**Never put an API key in this repo or in client-side code.** Playground experiments that
call a paid API need a small backend to hold the key (for example a Cloudflare Worker
or a Vercel function), or they can ask visitors to paste their own key.
