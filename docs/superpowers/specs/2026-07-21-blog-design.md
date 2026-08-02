# Blog at sanketgautam.dev/blog — Design

Date: 2026-07-21. Status: approved by Sanket (theme + architecture + SEO direction) in conversation.

## Goal

Add a markdown-first technical blog at `/blog` in the Skyline visual identity, publishable by dropping one file, without ever touching the root site's deploy path. The blog also serves as public, credible, dated evidence of sustained technical writing (EB2-NIW/EB1A support), so authorship, dates, and measurability are first-class requirements.

## Decisions (user-confirmed)

- **Theme: Skyline** — the blog reuses the live one-pager's design DNA (palette custom properties, Big Shoulders Display + body faces, gold mono kickers, dark masthead over light content, gold top-rule panels). Reference mockup: `~/workspace/site-revamp/blog-themes/skyline/index.html`.
- **Architecture: Option B (isolated build).** Root deploy stays byte-for-byte the no-build copy it is today. A standalone Astro project lives in `blog/`; CI builds only it and copies `blog/dist/` into `_site/blog/`. A blog build failure fails the deploy; it can never alter root files.
- **MDX from day one** so future posts can use components: images, inline SVG diagrams and charts, callouts, bookmark/URL embeds, X and YouTube embeds (statically rendered at build, no third-party scripts).
- **No backdating, ever.** Posts carry their true publish date. Writing now about earlier work is fine and stated honestly in prose. Same-day launch batches are fine.
- **Analytics:** Google Search Console verified at the **domain level via DNS TXT** (survives all future re-architecture; free). GoatCounter slot in both root page and blog layout (user to create account; Plausible is the paid fallback). Periodic GSC exports because its UI retains only 16 months.

## Architecture

```
repo: sanketgautam.github.io                GitHub Actions on push to master
┌────────────────────────────┐          ┌───────────────────────────────┐
│ index.html   (one-pager)   │─copied──▶│                               │
│ assets2/                   │─copied──▶│  _site/          ──▶  Pages   │
│ public/  (ensemble, ...)   │─copied──▶│  (unchanged from today)       │
│ CNAME                      │─copied──▶│                               │
│ blog/  ◀─ only new dir     │          │                               │
│  ├─ astro.config.mjs       │ npm ci + │                               │
│  ├─ src/content/blog/*.mdx │─build───▶│  _site/blog/ (+rss, sitemap)  │
│  └─ src/{pages,layouts,…}  │          │                               │
└────────────────────────────┘          └───────────────────────────────┘
```

## Blog project layout (`blog/`)

- `astro.config.mjs` — `site: 'https://sanketgautam.dev'`, `base: '/blog'`, integrations: mdx, sitemap; Shiki dual theme (github-light / github-dark-ish to match Skyline panels).
- `src/content.config.ts` — `blog` collection: title, description, pubDate, updatedDate?, tags[], draft (default false), ogImage?.
- `src/layouts/Base.astro` — Skyline shell: head (title/desc/canonical/OG/Twitter/JSON-LD/RSS link/GoatCounter slot), dark masthead header with wordmark → sanketgautam.dev, footer.
- `src/layouts/Post.astro` — article shell: meta row, prose styles, BlogPosting JSON-LD.
- `src/components/` — `Figure.astro` (image or SVG + caption), `Callout.astro`, `Bookmark.astro` (styled link card like the mockup's embed), X/YouTube embeds via `@astro-community/astro-embed-*` (static, no client JS).
- `src/pages/index.astro` (post ledger at `/blog/`), `src/pages/[...slug].astro`, `src/pages/rss.xml.js`.
- `src/content/blog/` — posts. Initial content: the Ensemble operations article from the mockup as `draft: true` (user reviews before it ever publishes; chart data must be replaced with real audit numbers first — the placeholder split is marked with a comment).

Root URL `/blog` vs `/blog/`: Pages serves the directory index; internal links always use trailing slash.

## SEO

- Per-page: unique title + meta description, canonical, OG/Twitter tags, article dates.
- Structured data: `BlogPosting` JSON-LD per post whose `author` references the homepage Person via `@id: https://sanketgautam.dev/#person`; **one-time root edit** adds that `@id` to the existing Person JSON-LD (safe, invisible).
- Sitemaps: root keeps its hand-made `public/sitemap.xml`; Astro emits `/blog/sitemap-index.xml`; `public/robots.txt` lists BOTH `Sitemap:` lines.
- RSS at `/blog/rss.xml` with `<link rel="alternate">` in heads.
- Homepage gains a `Blog` nav/CTA link (internal linking both ways). Applied on this branch; goes live only at merge.
- Later (explicit non-blocker): per-post generated OG images; dev.to cross-posting with `rel=canonical` home.

## Deploy changes (`.github/workflows/deploy.yml`)

After the existing copy steps: setup-node (Node 22, npm cache on `blog/package-lock.json`), `npm ci` in `blog/`, `npm run build` in `blog/`, `cp -r blog/dist _site/blog`. Nothing else changes.

## Error handling / guarantees

- Blog build failure ⇒ workflow fails ⇒ previous deploy stays live. Root can never be partially updated by blog work.
- No blog route may shadow an existing root path (nothing under `/blog/` exists at root today; keep it that way).
- Drafts (`draft: true`) are excluded from build output, RSS, and sitemap.

## Verification checklist (before merge to master)

Local `npm run build` + assembled `_site` served locally: `/` byte-identical to master's index.html; `/blog/` lists posts; post page renders MDX components (figure, chart SVG, table, callout, bookmark, code); `/blog/rss.xml` parses; `/blog/sitemap-index.xml` exists; robots.txt has two Sitemap lines; `/ensemble/`, `/posters/...`, resume PDF unaffected; 390px no overflow; JSON-LD validates.

## User actions (not blocking build)

1. GSC: add domain property for `sanketgautam.dev`, verify via DNS TXT at the DNS host; also import to Bing Webmaster.
2. GoatCounter: create account, give me the site code to drop into the two slots (or choose Plausible).
3. Review the draft post + replace chart placeholder data before flipping `draft: false`.
