# Publish your website and manage it yourself

Recommended destination: **https://elrando.github.io/**, using GitHub Pages and a repository owned by your **elrando** account. This is the intended address, not a confirmation that it is live yet.

The current review site at https://shahariar-emon-research.yummy-swift-8066.chatgpt.site is private to your ChatGPT account. Publishing the exported Astro project on GitHub Pages creates a separate public website with no ChatGPT sign-in requirement.

## What you control

- **Source and content:** the complete Astro project is in the source ZIP. You can edit the text, publications, images, styling, and behavior.
- **Updates and access:** your GitHub account owns the repository, its collaborators, and its deployment workflow. You can update, roll back, or unpublish it.
- **Hosting choice:** the project is a static website. You can move it to Cloudflare, Netlify, Vercel, or another static host without using ChatGPT or Sites.
- **Address:** `elrando.github.io` is supplied by GitHub. For an address you can retain when changing hosts, register a custom domain in your own registrar account and manage its DNS yourself. GitHub still operates the Pages hosting infrastructure.

## 1. Create your repository

Sign in to GitHub as **elrando**, then visit https://github.com/new.

- Owner: **elrando**
- Repository name: **elrando.github.io**
- Visibility: **Public** (required for GitHub Pages on GitHub Free)
- Leave the initial README, .gitignore, and license options unset; the export already includes project files.

If that repository already exists, inspect and back it up before adding files. Do not replace an existing website without deciding to do so.

## 2. Upload the source

Download and extract the latest `academic-portfolio-source.zip` from this chat. Open the extracted `academic-portfolio` folder. Use this fresh export, which does not contain Sites Git history or hosting identity.

From a terminal opened in that folder:

```sh
git init -b main
git add .
git commit -m "Add academic portfolio"
git remote add origin https://github.com/elrando/elrando.github.io.git
git push -u origin main
```

Complete GitHub authentication if prompted. GitHub account passwords are not used for Git HTTPS pushes; use your existing GitHub CLI, SSH, or credential-manager setup.

You can also use GitHub's **Add file → Upload files**. Upload the folder's contents, not the outer folder or the ZIP itself. On Linux, use **Ctrl+H** in your file manager to reveal hidden files. Include `.github/workflows/deploy.yml` and `.gitignore`. Verify that `package.json`, `pnpm-lock.yaml`, `src`, `public`, and `.github` are at the repository root.

## 3. Enable public hosting

1. Open your repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow**, choosing `main`.
4. Wait for both **build** and **deploy** to succeed. If the first automatic run occurred before Pages was enabled, rerun it now.
5. Open the URL shown by the deployment: **https://elrando.github.io/**.
6. Open it once in a signed-out or private browser window to confirm visitors can access it, then share that public link.

The included workflow builds Astro, determines the correct site address, and deploys the result. You do not need to manually upload the compiled `dist` folder. Each later push to `main` triggers a new deployment.

## 4. Make future changes

Small text edits can be made directly on GitHub: open a file, select the pencil icon, edit, and commit. For design changes, edit and preview locally before pushing.

| Update | Source file |
| --- | --- |
| Publications, authors and DOIs | `src/data/publications.ts` |
| Contact details and profile links | `src/data/profile.ts` |
| Software projects | `src/pages/software.astro` |
| Music and photography | `src/pages/hobbies.astro` |
| About text | `src/pages/about.astro` |
| Profile photo | `src/assets/shahariar-emon.jpg` |
| Colors and layout | `src/styles/global.css` |

A minimal local editing cycle, with Node.js 24 installed:

```sh
npx pnpm@11.25.0 install --frozen-lockfile
npx pnpm@11.25.0 dev
```

Open the local URL printed in the terminal. After editing, stop the preview with Ctrl+C, then:

```sh
npx pnpm@11.25.0 build
git add .
git commit -m "Update portfolio"
git push
```

Git records previous versions. You can revert an unwanted change and push the correction. Keep a local clone or source ZIP as an independent backup.

## 5. Optional: use your own domain

Buy a domain through a registrar account you own. Follow GitHub's domain verification and DNS instructions, then enter the domain under **Settings → Pages → Custom domain** and enable HTTPS when available. This workflow reads the configured Pages address automatically on its next run. Keep the domain registration and DNS account under your control so you can point the address to another host later.

## Official references

- Astro's GitHub Actions deployment: https://docs.astro.build/en/guides/deploy/github/
- Create a GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Pages availability: https://docs.github.com/en/pages/quickstart
- Custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
