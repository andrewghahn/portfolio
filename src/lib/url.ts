/**
 * Build a link that works with the `base` path in astro.config.mjs.
 * The site lives at /portfolio/ on GitHub Pages, so a plain "/blog" link would 404.
 * Always write internal links as url('/blog') instead.
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
