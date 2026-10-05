# Zahra Haghjoo, personal site

React + TypeScript + Tailwind CSS, built with Vite. All text lives in `src/data.ts`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Put it on GitHub Pages

1. Create a repository on GitHub. Name it `zahrahaghjo.github.io` to get `https://zahrahaghjo.github.io`, or any other name to get `https://zahrahaghjo.github.io/<name>/`. Both work without changes.
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/zahrahaghjo/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub open **Settings, Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`. After a minute or two the site is live. Progress shows under the **Actions** tab.

To change content, edit `src/data.ts`, commit and push. The site rebuilds itself.

## Files

- `src/data.ts` text, projects, skills, links
- `src/components/` one component per section
- `src/index.css` color tokens (light and dark) and the angled violet bands
- `tailwind.config.js` maps Tailwind color names to those tokens
- `src/assets/portrait.jpg` the portrait in the header
