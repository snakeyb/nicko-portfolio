# Nick Osborn - engineering portfolio

Static Astro + Tailwind portfolio for customer-facing engineering and applied AI roles. GitHub is the source of truth.

## Structure and design

- **Home:** direct positioning, four selected projects, approach, experience, capabilities and GitHub contact.
- **Case studies:** one page per project, following problem, contribution, approach and result. The lead story is the Pimberly MCP integration.
- **Design:** restrained dark navy, soft mint accent, large editorial typography, thin rules and quiet hover states. Responsive, keyboard accessible and intentionally light on JavaScript.
- **Content:** project Markdown with frontmatter in `content/projects/`; experience and skills in JSON. Project cards and routes are generated from the Markdown files.

The Pimberly and Fabric Finder stories should be reviewed for employer/client disclosure before promotion of a public deployment. Current copy avoids internal performance figures, proprietary code and unapproved client specifics. In particular, the site describes Nick's architectural and AI-assisted development contribution without claiming to have personally written every line of code.

## Develop

```bash
npm ci
npm run dev
```

Run `npm run check` and `npm run build` before publishing. The generated site is in `dist/`.

## Cloudflare Pages

Connect this repository as a Pages project with production branch `main`, build command `npm run build` and output directory `dist`. No adapter or runtime environment variables are required for this static site. Cloudflare Pages can generate preview deployments for pull requests.

## Editing

Edit Markdown frontmatter and copy in `content/projects/`, or the two JSON files for skills and experience. `status` frontmatter is an editorial flag, not a publishing switch. All four stories currently appear on the site. The contact link points to the verified `snakeyb` GitHub profile; add a preferred public email or LinkedIn URL when available.
