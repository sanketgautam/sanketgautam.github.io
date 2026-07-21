# /blog Astro Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a Skyline-themed Astro blog at sanketgautam.dev/blog whose build can never alter the no-build static root site.

**Architecture:** Standalone Astro 5 project in `blog/` (Option B per spec). CI copies root files verbatim as today, then builds `blog/` and copies `blog/dist/` into `_site/blog/`. MDX content collection; all embeds render statically at build.

**Tech Stack:** Astro 5, @astrojs/mdx, @astrojs/sitemap, @astrojs/rss, astro-embed (Twitter/YouTube), Shiki (built in). Node 22. No client-side framework.

## Global Constraints

- Root deploy lines in `.github/workflows/deploy.yml` (cp index.html/CNAME/assets2/public) stay byte-identical.
- `site: 'https://sanketgautam.dev'`, `base: '/blog'`; internal blog links always use trailing slash.
- Design source of truth: `~/workspace/site-revamp/blog-themes/skyline/index.html` (palette variables, fonts, kicker/ledger/panel treatments, article typography). Port faithfully.
- No em dashes in any authored copy.
- Posts carry true publish dates only; `draft: true` posts excluded from build, RSS, sitemap.
- No route under `/blog/` may shadow an existing root path.

---

### Task 1: Scaffold the Astro project

**Files:** Create `blog/package.json`, `blog/astro.config.mjs`, `blog/tsconfig.json`, `blog/src/content.config.ts`, `blog/.gitignore` (node_modules, dist, .astro).

- [ ] `cd blog && npm install astro @astrojs/mdx @astrojs/rss @astrojs/sitemap astro-embed`
- [ ] `astro.config.mjs`: site + base as constrained; integrations `[mdx(), sitemap()]`; `markdown.shikiConfig.themes = { light: 'github-light', dark: 'night-owl' }`.
- [ ] `content.config.ts`: `blog` collection via glob loader over `src/content/blog`, zod schema: title (string), description (string), pubDate (coerce.date), updatedDate (coerce.date optional), tags (string[] default []), draft (boolean default false), ogImage (string optional).
- [ ] Verify: `npm run build` fails only for missing pages (expected at this stage) or succeeds empty; `npx astro check` clean.
- [ ] Commit: "feat(blog): scaffold Astro project"

### Task 2: Port Skyline into layouts + global styles

**Files:** Create `blog/src/layouts/Base.astro`, `blog/src/layouts/Post.astro`, `blog/src/styles/skyline.css`.

**Interfaces:** `Base.astro` props: `{ title, description, canonicalPath, ogImage?, jsonLd? }`. `Post.astro` props: `{ post }` (CollectionEntry<'blog'>); renders BlogPosting JSON-LD with `author: { '@id': 'https://sanketgautam.dev/#person' }`.

- [ ] Extract from the mockup: `:root` custom properties, font links (Big Shoulders Display + body face, trimmed weights), masthead (wordmark linking to https://sanketgautam.dev/, HOME/BLOG/RSS nav), footer, reveal/reduced-motion CSS, prose styles (headings with gold bars, code panels, blockquote, table, figure+figcaption, stat row, hairline rules).
- [ ] Head in Base: title, meta description, canonical (site+canonicalPath), OG/Twitter tags, `<link rel="alternate" type="application/rss+xml" href="/blog/rss.xml">`, GoatCounter slot as an HTML comment `<!-- analytics slot: GoatCounter script goes here -->`, optional JSON-LD serialization.
- [ ] Verify with a throwaway page rendering both layouts; check 390px overflow in DevTools emulation via the local preview.
- [ ] Commit: "feat(blog): Skyline layouts and global styles"

### Task 3: Content components

**Files:** Create `blog/src/components/Figure.astro`, `blog/src/components/Callout.astro`, `blog/src/components/Bookmark.astro`.

**Interfaces:** `Figure` props `{ src?, alt?, caption }` with default slot for inline SVG; `Callout` props `{ title? }` + slot; `Bookmark` props `{ href, title, description, source }`. X/YouTube embeds come from `astro-embed` (`<Tweet id=.../>`, `<YouTube id=.../>`), re-exported nothing; posts import directly.

- [ ] Implement each, styled per the mockup's figure/caption, callout panel (gold top rule), and embed-card treatments.
- [ ] Commit: "feat(blog): Figure, Callout, Bookmark components"

### Task 4: Pages (index ledger, post route, RSS)

**Files:** Create `blog/src/pages/index.astro`, `blog/src/pages/[...slug].astro`, `blog/src/pages/rss.xml.js`.

- [ ] `index.astro`: getCollection('blog', not draft), sort by pubDate desc, render the mockup's ledger rows (mono gold date rail, condensed uppercase titles, description, tags, reading-time estimate = round(words/220)).
- [ ] `[...slug].astro`: getStaticPaths over non-draft entries; render via `Post.astro`.
- [ ] `rss.xml.js`: @astrojs/rss over non-draft posts, `link: '/blog/' + id + '/'`.
- [ ] Verify: `npm run build`; dist contains `index.html`, `rss.xml`, `sitemap-index.xml`.
- [ ] Commit: "feat(blog): index, post route, RSS"

### Task 5: First post (draft) + component exercise

**Files:** Create `blog/src/content/blog/six-months-operating-an-11-agent-ai-staff.mdx`.

- [ ] Port the article from `~/workspace/site-revamp/blog-themes/SPEC.md` (final, standalone version) with `draft: true`; figures as inline SVG in `<Figure>`, contracts table, stat row, `<Bookmark>` to /ensemble/, Kerry Park image (`/assets2/kerry-park-1280.jpg` absolute path, served by root), YAML code block. Keep the placeholder-data HTML comment on the chart.
- [ ] Verify: build with draft temporarily false renders every element; flip back to `draft: true`; confirm draft absent from dist, RSS, sitemap.
- [ ] Commit: "content(blog): first post draft exercising all components"

### Task 6: Root integration edits (branch only)

**Files:** Modify `public/robots.txt` (add `Sitemap: https://sanketgautam.dev/blog/sitemap-index.xml`), `index.html` (add `"@id": "https://sanketgautam.dev/#person"` to Person JSON-LD; add Blog link to nav and contact CTA row; add matching analytics slot comment).

- [ ] Verify: JSON-LD parses (paste into a JSON parser after extracting), diff shows only intended lines.
- [ ] Commit: "feat: link blog from homepage, second sitemap, Person @id"

### Task 7: Deploy workflow

**Files:** Modify `.github/workflows/deploy.yml` — after the assemble step add: actions/setup-node@v4 (node 22, cache npm, cache-dependency-path blog/package-lock.json), `npm ci` (working-directory blog), `npm run build` (working-directory blog), `cp -r blog/dist _site/blog`.

- [ ] Verify: `actionlint` if available, else YAML parse; the four root cp lines untouched (git diff shows additions only).
- [ ] Commit: "ci: build blog/ and copy into _site/blog"

### Task 8: Full local verification + tailnet preview

- [ ] Simulate CI: run the assemble script locally into a temp `_site`, build blog, copy dist in.
- [ ] Serve `_site` locally; run spec checklist: `/` byte-identical to master index.html (diff), `/blog/` ledger, post page (temporarily un-drafted copy) with all components, rss/sitemap exist, robots two Sitemap lines, root paths unaffected, 390px no overflow (screenshot), no em dashes (grep).
- [ ] Copy `_site` to `~/workspace/site-revamp/blog-live-preview/` for tailnet viewing.
- [ ] Commit any fixes; leave branch unmerged pending user review.
