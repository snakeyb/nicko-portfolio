# Nick Osborn - engineering portfolio

Static Astro + Tailwind portfolio for customer-facing engineering and applied AI roles. GitHub is the source of truth.

## Structure and design

- **Home:** direct positioning, four selected projects, approach, experience, capabilities and a closing statement.
- **Case studies:** one page per project, following problem, contribution, approach and result. The lead story is the Pimberly MCP integration.
- **Design:** restrained dark navy, soft mint accent, large editorial typography, thin rules and quiet hover states. Responsive, keyboard accessible and intentionally light on JavaScript.
- **Content:** project Markdown with frontmatter in `content/projects/`; experience and skills in JSON. Project cards and routes are generated from the Markdown files.

The Pimberly and Fabric Finder stories should be reviewed for employer/client disclosure before promotion of a public deployment. Current copy avoids internal performance figures, proprietary code and unapproved client specifics. In particular, the site describes Nick's architectural and AI-assisted development contribution without claiming to have personally written every line of code.

## Publish with Cloudflare Pages

The site currently lives in GitHub; there is no local setup required to publish it. In the Cloudflare dashboard, create a Pages project, connect this GitHub repository and set:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

Cloudflare installs the dependencies and runs the build command on its own servers. After the initial connection, pushing changes to `main` triggers a new build. No adapter or runtime environment variables are required for this static site. A pull request can also receive a preview deployment.

## Optional local preview

These commands are only for someone who wants to work on or preview the site on their own computer (or in a GitHub Codespace). They require Node.js and a checkout of the repository:

```bash
git clone https://github.com/snakeyb/nicko-portfolio.git
cd nicko-portfolio
npm ci
npm run dev
```

Open the local URL printed by Astro. `npm run check` and `npm run build` are optional local validation commands; the production build runs automatically in Cloudflare Pages once connected.

## Editing

Edit Markdown frontmatter and copy in `content/projects/`, or the two JSON files for skills and experience. `status` frontmatter is an editorial flag, not a publishing switch. All four stories currently appear on the site. The public site does not link to a personal GitHub profile.
