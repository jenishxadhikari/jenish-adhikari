# Jenish Adhikari

Run `bun install` and `bun dev` to start the portfolio.

## Code structure

```text
src/
  app/                 Routes, metadata, layouts, and page composition
  features/
    blog/              Post data, date formatting, types, and blog cards
    home/              Homepage sections and GitHub contribution fetching
    projects/          Project data, types, cards, and metadata
    work/              Work experience data, types, and cards
  components/          Shared layout, theme, and article components
    ui/                shadcn UI primitives
    kibo-ui/           Contribution graph primitives
  config/site.ts       Site identity, navigation, and social links
  content/             Blog and project MDX documents
  lib/                 Utilities shared across features
  types/               CSS and MDX module declarations
```

Keep code with the feature that owns it. The homepage composes blog, project, and work
features; those features should not depend on homepage components. Use `@/` paths across
features and for shared modules; relative imports are fine for nearby files within a feature.

Shared components and utilities should remain independent of features and routes. ESLint
checks these import boundaries. Promote a component to `components/` when multiple features
need it, such as the article table of contents used by blog and project pages.

Import feature modules directly. Keep data fetching in Server Components, and import
types and formatting helpers separately so client components do not pull in server code.
MDX stays in `content/` as the authoring source for both kinds of detail page.

## Writing a blog post

Add an entry to `POSTS` in `src/features/blog/data.ts`:

```ts
{
  slug: 'your-slug',
  title: 'Your post title',
  description: 'A short summary for the article card and search engines.',
  publishedAt: '2026-11-05',
  readingTime: 3,
  cover: '/blog/your-cover.svg'
}
```

Create `src/content/blog/your-slug.mdx` for the article body. The entry's `slug` must
match the filename and becomes `/blogs/your-slug`:

```mdx
Your opening paragraph.

## A heading

Markdown, code blocks, and React components work here.
```

Place covers in `public/blog/`. Listed posts appear newest first in the blog and homepage.
MDX files without a data entry remain unpublished.
The included articles are starter content; edit them before publishing.

## Project detail pages

Project summaries live in `PROJECTS` in `src/features/projects/data.ts`. Each project has a unique
`slug` and a matching MDX file at `src/content/projects/<slug>.mdx`.
For example, `chatx.mdx` is displayed at `/projects/chatx`.

Write the project content as Markdown with `##` and `###` headings; the page builds its
“On this page” navigation automatically. Project covers and titles link to the detail page,
while the source and optional live-site buttons use `githubLink` and `href` respectively.

Set `year`, `status` (`'In progress'` or `'Completed'`), and `languages` (for example,
`['TypeScript', 'Python']`) on each project. These details appear on homepage previews,
project cards, and project detail pages.

## Updating work experience

Edit `WORKS` in `src/features/work/data.ts`, ordered newest first. The homepage shows the
first entry, and `/work` shows the full list. The shared shape is defined in
`src/features/work/types.ts`.
