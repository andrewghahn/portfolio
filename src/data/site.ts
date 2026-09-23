// Site-wide settings. Edit these first.
export const site = {
  name: 'Andrew Hahn',
  tagline: 'Designer, builder, and perpetual learner.',
  description: 'Portfolio, writing, and experiments by Andrew Hahn.',
  links: [
    { label: 'GitHub', href: 'https://github.com/andrewghahn' },
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
  ],
  // The active visual theme. Themes live in src/styles/themes.css.
  // Swap this for a new "season" of the site without touching any pages.
  theme: 'default' as 'default' | 'autumn',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Blog', href: '/blog' },
  { label: 'Playground', href: '/playground' },
];
