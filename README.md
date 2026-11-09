# Yaniv Bohbot — Portfolio

An English React + TypeScript portfolio, deployed through GitHub Pages.

## Architecture

The project uses Vite and a feature-oriented structure:

- `src/app` — application composition.
- `src/components/layout` — shared header and footer.
- `src/features/projects` — typed project data, filters and project cards.
- `src/features/profile` — interactive hero/profile section.
- `src/features/career` — career path, education and contact sections.
- `public/assets` — photos, project previews and local demo videos.

## Development

```bash
npm install
npm run dev
```

## Validation and deployment

```bash
npm run typecheck
npm run build
```

Every push to `master` runs the GitHub Pages workflow in `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the Vite application and deploys `dist` to [yanivbohbot.github.io](https://yanivbohbot.github.io/).

## Adding a project

Add a typed project entry to `src/features/projects/data.ts`, place its screenshot or video in `public/assets/projects`, then reuse `ProjectCard` or `FeaturedProject`. The project filter automatically uses the typed `kind` values.
