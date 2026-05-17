# Code Standards

> **Purpose:** Keep this site easy to edit, review, and trust.
>
> **The goal:** Code and content should be correct, simple, clear, careful, and
> consistent with the rest of the project.
>
> **Audience:** Human contributors and AI coding assistants. When in doubt,
> choose the smallest change that clearly solves the problem.

---

## What Good Code Means Here

| Priority | Quality | Question to Ask |
| --- | --- | --- |
| 1 | Correct | Does it actually work and say what we mean? |
| 2 | Simple | Is this the smallest reasonable solution? |
| 3 | Clear | Can a new contributor understand it quickly? |
| 4 | Careful | Are legal-case claims, media, and links handled responsibly? |
| 5 | Consistent | Does it follow the existing project shape and styling? |

Correct but plain beats clever. Clear and sourced beats dramatic but fragile.

---

## Project Structure

This is a small Vite + React + TypeScript site. Keep the structure boring.

| Path | Purpose |
| --- | --- |
| `src/pages/` | Route-level pages such as `Home`, `Story`, `Clips`, `Support`, and `JoshuaFox`. |
| `src/components/` | Shared layout or reusable UI used by more than one page. |
| `src/data/` | Structured content lists, such as clips, timelines, bail comparisons, citations, or FAQs. |
| `src/constants.ts` | External URLs and small site-wide constants. |
| `src/styles/` | Shared styling, tokens, layout rules, page styles, and responsive styles. |
| `public/` | Static files served directly by Vite: videos, images, screenshots, PDFs, and other media. |

### Where New Things Go

- **New page:** add a file in `src/pages/`, register the route in `src/App.tsx`,
  and add nav in `src/components/Layout.tsx` only if it belongs in the main nav.
- **New reusable UI:** add it to `src/components/`.
- **New repeated content:** prefer a typed data file in `src/data/` instead of
  hard-coding a growing list directly inside a page.
- **New external link:** put it in `src/constants.ts` if it may be reused or
  changed later.
- **New public media:** place it in a named folder under `public/`, such as
  `public/clips/`, `public/images/`, or `public/joshua-fox/`.

---

## React And TypeScript

### Keep Components Focused

Components should do one clear job. If a component becomes hard to describe in
one sentence, split it.

Healthy targets:

| Item | Target | Pause And Refactor At |
| --- | --- | --- |
| Component | 50-120 lines | 150+ lines |
| Hook | 30-60 lines | 80+ lines |
| File | 100-250 lines | 300+ lines |
| Props | 3-6 props | 8+ props |
| `useState` calls | 1-3 | 5+ |
| `useEffect` calls | 0-2 | 3+ |

These are guardrails, not contests. Do not split tiny code just to satisfy a
number, but do stop before a page becomes a junk drawer.

### Prefer Typed Data

Use explicit types for repeated content.

```tsx
type Clip = {
  id: string
  title: string
  src?: string
  youtubeId?: string
}
```

If the same data shape appears twice, it probably belongs in `src/data/`.

### Keep Logic Near Its Owner

- Page-only state can stay inside the page.
- Shared UI belongs in `src/components/`.
- Pure calculations can be small helpers in the same file until they are reused.
- Do not add a new dependency unless it removes real complexity.

---

## Styling

### The Styling Home Is `src/styles/`

Use shared CSS classes for visual styling. Keep styling centralized so the site
does not turn into one-off inline styles.

Use inline styles only for data-driven values that CSS cannot know in advance,
such as a chart bar width calculated from data.

### Split CSS Before It Turns Into A Junk Drawer

The site may start with one stylesheet, but it should not grow forever.

Healthy targets:

| Item | Target | Pause And Split At |
| --- | --- | --- |
| Single CSS file | 200-500 lines | 700+ lines |
| Whole styles folder | Small and searchable | Repeated sections for unrelated pages |
| Reused raw values | 0-1 repeats | 2+ repeats should become a token |

When the main stylesheet gets too large, split inside `src/styles/` instead of
moving styles into random component files.

Preferred shape:

```text
src/styles/
├── index.css      # imports the other stylesheet files
├── tokens.css     # :root variables only
├── base.css       # reset, body, headings, links, media defaults
├── layout.css     # navbar, main shell, footer
├── home.css       # homepage sections
├── timeline.css   # story timeline
├── clips.css      # clips page
└── joshua-fox.css # Joshua Fox page
```

Only create files that have a real purpose. A split should make styles easier to
find, not create ceremony.

### Use Tokens

Reusable design values belong in `:root` as CSS custom properties.

Existing examples:

```css
:root {
  --wp-bg: #ffffff;
  --wp-text: #1a1a1a;
  --wp-muted: #767676;
  --wp-border: #d1d1d1;
  --wp-content-width: 1100px;
}
```

Add or reuse tokens for:

- colors
- borders
- fonts
- content widths
- common spacing
- repeated shadows or backgrounds, if added later

Do not repeat the same raw color or spacing value across multiple sections if it
should be part of the design system.

### Tailwind

Do not add Tailwind only because one CSS file got long. First split the CSS into
clear files under `src/styles/`.

Tailwind is a reasonable future choice if the project starts needing many
reusable layout utilities, variants, and component states. Treat that as an
architecture change:

- add it in its own PR
- keep design tokens in Tailwind config or CSS variables
- avoid long arbitrary-value class strings
- migrate gradually instead of rewriting unrelated pages
- keep public-facing copy and data out of class-heavy JSX

### Class Naming

Use descriptive, feature-based class names:

- Good: `.hero-video`, `.bail-chart`, `.timeline-event`, `.home-cta`
- Avoid: `.box1`, `.bigText`, `.blue-section`, `.new-style`

Keep related styles grouped together:

1. Base/site styles
2. Layout/nav/footer
3. Page or feature section
4. Responsive rules for that feature

### Responsive Guardrails

Before calling a visual change done, check:

- mobile nav does not overflow
- long button text wraps cleanly
- videos and charts fit narrow screens
- text does not overlap or disappear
- public media loads from the expected `public/` path

---

## Content And Claims

This site discusses an active legal case. Treat accuracy as part of the code.

### Separate Claim Types

Use different language for different certainty levels:

- **Confirmed fact:** court records, filings, official statements, direct video,
  archived public posts, or other primary sources.
- **Dalton's account:** what Dalton says happened.
- **Supporter argument:** what supporters believe the facts mean.
- **Disputed allegation:** anything contested or not yet proven in court.

Avoid writing disputed facts as settled facts.

### Source Important Claims

Major claims should have source notes, links, screenshots, or citations. This is
especially important for:

- charges
- bond amount
- court dates
- alleged statements by another person
- timelines
- bail comparisons
- donation or legal-defense claims

Draft copy can exist, but do not ship public pages full of visible `TODO`s.

---

## AI Agent Guardrails

When an AI assistant edits this repo:

- Read nearby files before changing patterns.
- Prefer existing structure over inventing a new architecture.
- Keep changes focused on the request.
- Do not move unrelated files or reformat the whole repo.
- Do not add packages without explaining why they are needed.
- If a page crosses the size guardrails, stop and extract data, helpers, or a
  small component.
- If the same UI or data shape appears in two places, consider extracting it.
- If a factual claim is sensitive, preserve careful language unless the user
  provides a source and asks for a stronger statement.

---

## Before Opening A PR

Run:

```bash
npm run build
```

Then quickly check:

- the homepage on desktop and mobile widths
- any page you changed
- external donation, social, and source links
- videos, images, and public assets
- no visible draft text unless the page is intentionally unpublished

Keep pull requests focused: one improvement, one reason, one reviewable change.
