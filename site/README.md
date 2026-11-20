# Officina website

The project's public page: one static page (the laboratory, its core architecture, ongoing research,
the Caladrius roadmap, publications, the team), in English and French, with light and dark themes.
Built with Vite and plain TypeScript: no framework, no third-party UI or animation library. No
cookies, no trackers, no request to another site.

```bash
npm ci
npm run dev       # http://localhost:5173/ (or /officina/ when CNAME is empty)
npm run build     # static files in dist/
```

- **Text.** English is the markup of `index.html` itself, so the page reads without JavaScript.
  French is in `src/i18n.ts`, one entry per `data-i18n` key; change the two together. The numbers are
  copied from the repositories' own reports, which the comments of `src/i18n.ts` name.
- **Language and theme** (`src/main.ts`). The page opens in French when the browser asks for French,
  in English otherwise, and in the system's theme. A choice made with the EN/FR switch or the theme
  button is kept in the browser's local storage (`officina-lang`, `officina-theme`), nowhere else.
- **Styles** (`src/styles.css`). The colours are CSS variables at the top of the file, light first,
  then dark, written twice: once for the system's setting, once for the button's.
- **The diagram** of section 01 is an inline SVG in `index.html` (four lanes, six steps). It takes
  its colours from the same variables and its text from the same keys; on a narrow screen it scrolls
  sideways rather than shrink below a readable size.
- **Fonts.** Newsreader and IBM Plex Sans and Mono, from the Fontsource packages, under the SIL Open
  Font License 1.1. They are bundled into `dist/` and served by the site itself.
- **Caladrius in the browser** (`/app/`, the "Browser app" link). Not in this repository: the
  workflow checks out Caladrius at the commit pinned by `CALADRIUS_REF` in `site.yml` and runs its
  `cargo xtask web --out site/dist/app` (the egui interface compiled to WebAssembly, `apps/caladrius-web`).
  Move `CALADRIUS_REF` on purpose when a new Caladrius should go online. To try it locally, from the
  caladrius checkout: `cargo xtask web --out ../officina/site/public/app` (git-ignored), then
  `npm run dev` and open `/app/`.
- **Deployment.** `.github/workflows/site.yml` builds on every pull request touching `site/` and
  deploys to GitHub Pages on `main`. One-time setup in the repository: Settings → Pages → Source:
  GitHub Actions. The site is at <https://officina-dmpk.com/> (before the domain, it was at
  <https://abdou-rgd.github.io/officina/>).
- **Own domain.** `site/CNAME` holds the domain, `officina-dmpk.com`, as its only line; the same
  domain is set in Settings → Pages → Custom domain. A non-empty `CNAME` makes the build serve from
  `/` instead of `/officina/`; emptying it goes back to the project page.
- **Logos.** `public/caladrius-logo-small-mono.svg` and `public/apothicaire-logo-small-mono.svg` are
  the Caladrius and Apothicaire emblems (both drawn by Amina), copied from `assets/logo/` in their
  own repositories, and used as CSS masks on the two cards of section 01: the bird in white on its
  green, the mortar in Apothicaire's golden ochre. The detailed engravings
  (`caladrius-logo-mono.svg`, `apothicaire-logo-mono.svg`) are kept beside them, unused for now.
  Officina has no logo yet: the header uses a dot beside the name and `public/favicon.svg` is a
  placeholder monogram.
