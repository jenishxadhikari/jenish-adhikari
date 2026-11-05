# Jenish Adhikari

Run `bun install` and `bun dev` to start the portfolio.

## Writing a blog post

Create `src/content/blog/your-slug.mdx`. The filename becomes `/blogs/your-slug`.
Export the post details before your Markdown:

```mdx
export const post = {
  title: 'Your post title',
  description: 'A short summary for the article card and search engines.',
  publishedAt: '2026-11-05',
  readingTime: 3,
  cover: '/blog/your-cover.svg'
}

Your opening paragraph.

## A heading

Markdown, code blocks, and React components work here.
```

Place covers in `public/blog/`. Posts automatically appear newest first in the blog.
The included articles are starter content; edit them before publishing.

## Project detail pages

Project summaries live in `PROJECTS` in `src/config/site.ts`. Each project has a unique
`slug` and a matching MDX file at `src/content/projects/<slug>.mdx`.
For example, `chatx.mdx` is displayed at `/projects/chatx`.

Write the project content as Markdown with `##` and `###` headings; the page builds its
“On this page” navigation automatically. Project covers and titles link to the detail page,
while the source and optional live-site buttons use `githubLink` and `href` respectively.

Set `year`, `status` (`'In progress'` or `'Completed'`), and `languages` (for example,
`['TypeScript', 'Python']`) on each project. These details appear on homepage previews,
project cards, and project detail pages.
