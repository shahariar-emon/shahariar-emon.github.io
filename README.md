# Shahariar Emon — academic portfolio

A static Astro website with your grayscale palette, Arial typography, research figures, portrait, and confirmed professional details.

## Open the current site

https://shahariar-emon-research.yummy-swift-8066.chatgpt.site

This deployment is private to your ChatGPT account, **smemon275@gmail.com**. Open the link while signed in to that account. A GitHub Pages deployment is separate and gives you a public academic website.

## What is included

- Home, Research, three research stories, Publications, Software, About/Contact, Beyond research, and a 404 page.
- Seven publications, including your three first-author papers. The two materials/energy papers have their own filter; the homepage emphasizes your main research focus.
- Seventeen paper images converted to WebP, plus one labeled membrane-detail crop. Original figure colors are retained. `public/images/manifest.json` records source files and dimensions.
- Your portrait on the homepage and About page, with responsive image optimization.
- Guitar, vocals, classic rock, metal, progressive rock, your five named bands, and straight/street/nature photography on the hobbies page. Add your own recordings and photography whenever you want.
- Responsive navigation, publication search and topic filters, BibTeX copying, figure enlargement, metadata, sitemap, and robots.txt.
- Software entries for semdock and the MIT-licensed MATLAB Diffusion repository; GitHub profile links on Software, About/Contact, and the footer.
- No database or paid server is required. A CV download is omitted until a CV is supplied.

## Keep the site in your GitHub repository

See `PUBLISHING.md` for the account-specific steps to publish at `https://elrando.github.io/` and manage the site yourself.

Yes: the source ZIP contains the editable website, its images, dependency lockfile, and a ready-to-use GitHub Pages workflow.

1. Extract `academic-portfolio-source.zip`.
2. Create a repository on GitHub. For a personal academic site, use **elrando.github.io** as the repository name. A regular repository name also works. Choose a public repository for GitHub Pages on GitHub Free.
3. Put the contents of the extracted `academic-portfolio` folder at the repository root on the **main** branch. `package.json` must be at the root. Include the hidden `.github` folder and `.gitignore`; do not upload the ZIP itself as the website.
4. In the repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open **Actions → Deploy to GitHub Pages → Run workflow**. Once deployment succeeds, the Pages settings and deployment job show your public URL. Later pushes to `main` redeploy automatically.

The included workflow reads your actual Pages address, so you do not need to hard-code your username. It supports both `https://elrando.github.io/` and `https://elrando.github.io/REPOSITORY/`. If your default branch has a different name, update `.github/workflows/deploy.yml`.

Optional terminal method, **from the freshly extracted source folder**, after creating an empty repository (replace YOUR-USERNAME and REPOSITORY):

```sh
git init -b main
git add .
git commit -m "Add academic portfolio"
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY.git
git push -u origin main
```

Then enable GitHub Actions in Pages settings and run the workflow as above. Complete any GitHub sign-in prompt yourself. The source archive excludes the existing Sites Git history and hosting identity, so it is suitable for a new repository.

Source storage and hosting can be separate: you can keep the source in a private GitHub repository and connect it to another host. Creating a repository alone does not publish a website.

## Run and edit locally

Use Node.js 24 LTS and pnpm 11.25.0:

```sh
npx pnpm@11.25.0 install --frozen-lockfile
npx pnpm@11.25.0 dev
```

Open the local address printed in the terminal. For production:

```sh
npx pnpm@11.25.0 build
npx pnpm@11.25.0 preview
```

| Content | File |
| --- | --- |
| Name, role, contact and profiles | `src/data/profile.ts` |
| Publication metadata and BibTeX | `src/data/publications.ts` |
| Homepage | `src/pages/index.astro` |
| About text | `src/pages/about.astro` |
| Profile photo | `src/assets/shahariar-emon.jpg` |
| Software descriptions and repository links | `src/pages/software.astro` |
| Music and photography | `src/pages/hobbies.astro` |
| Research stories | `src/pages/research/` |
| Colors, type and layout | `src/styles/global.css` |
| Figures and provenance | `public/images/` |
| GitHub Pages workflow | `.github/workflows/deploy.yml` |

The homepage and About page also contain the role/affiliation in prose. When adding internal links, use `sitePath()` from `src/utils/paths.ts` so project-repository URLs continue to work.

## Other hosting options

The same repository works on any static host. Set **SITE_URL** to the final HTTPS origin and leave **BASE_PATH** unset for root hosting. Build command: `npx pnpm@11.25.0 build`; output directory: `dist`; Node.js: 24.

| Host | Setup |
| --- | --- |
| GitHub Pages | Included workflow; simplest fit for your GitHub-based portfolio. |
| Cloudflare Pages | Connect GitHub, choose the Astro preset, use the build command and output directory above. |
| Netlify | Import the GitHub repository; publish `dist` after the build. |
| Vercel | Import the repository and select Astro; output remains static. |
| Cloudflare Workers | `wrangler.jsonc` supports Workers Static Assets; build and deploy with `npx wrangler deploy`. |

The sibling `academic-portfolio-static.zip` contains prebuilt files with `index.html` at its root. It can be used for direct static uploads, but its canonical metadata initially refers to the private review site. Rebuild with the final `SITE_URL` when moving hosts. For routine updates, prefer Git integration.

## Image inventory and sources

| Archive | Website assets | Notes |
| --- | --- | --- |
| STAR_protocols.zip | 3 figures + graphical abstract | Suitable for detailed story pages; small labels can be enlarged. |
| Electoroporation_Figures.zip | 7 figures + labeled detail crop | Membrane imagery also appears on the homepage. |
| Biological_physics_Figures.zip | 6 numbered figures | High-resolution TIFF originals, 1950–4050 pixels wide. Figure 6 PPTX is retained in your original archive; Old_Figure 5 is not displayed. |

Web copies are optimized for loading; the source TIFF/PPTX archives are not bundled with the website. The profile JPEG is included and Astro builds smaller WebP versions automatically.

Publication metadata was checked against publisher or coauthor institutional pages. Affiliation, contact details, portrait, and personal interests were supplied by you.

- https://pmc.ncbi.nlm.nih.gov/articles/PMC13615501/
- https://link.springer.com/article/10.1007/s00249-025-01793-5
- https://link.springer.com/article/10.1007/s10867-025-09682-w
- https://link.springer.com/article/10.1007/s00249-026-01819-6
- https://link.springer.com/article/10.1007/s00249-025-01745-z
- https://www.ns.kogakuin.ac.jp/~bt13452/en/publications/
- https://www.ns.kogakuin.ac.jp/~bt13452/publications/index.html
- https://doi.org/10.22036/pcr.2025.512159.2655
- https://doi.org/10.1016/j.nxmate.2026.103267
- https://github.com/elrando/semdock
- https://github.com/elrando/Diffusion
- https://github.com/elrando/Diffusion/blob/main/README.md

Figures are attributed to their papers. The STAR Protocols article uses CC BY 4.0. Other supplied author figures are not labeled CC BY without an established license.

## Validation

- Production builds for both root hosting and a GitHub repository subpath.
- Ten generated HTML pages, plus sitemap and robots.txt.
- Internal routes, image URLs, and fragment targets checked in both build configurations.
- Portrait, hobbies page, publication filtering, and figure enlargement inspected in desktop/mobile browser views.
- The GitHub workflow is prepared; it has not run in your own repository yet.

## Official hosting documentation

- https://docs.astro.build/en/guides/deploy/github/
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.astro.build/en/guides/deploy/cloudflare/
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://docs.astro.build/en/guides/deploy/netlify/
- https://docs.astro.build/en/guides/deploy/vercel/
