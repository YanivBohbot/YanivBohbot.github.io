# Yaniv Bohbot — Portfolio

A static, dependency-free English portfolio. It is ready for GitHub Pages, Cloudflare Pages or Vercel.

The professional background, education, certifications and skills were derived from the supplied CV. Public project links point to the GitHub profile.

## Publish

Create a `YanivBohbot.github.io` repository, push these files to `main`, then enable **Settings → Pages → Deploy from a branch → main / root**. No server or environment variables are required.

## Project media

The main portrait is stored locally at `assets/yaniv-bohbot-portrait.jpg`. Keep project media in the repository as well, avoiding expiring social-media asset URLs.

IncidentFlow now uses `assets/projects/incidentflow-promo.mp4` as its embedded project demonstration.

For a screenshot:

```html
<img src="assets/projects/project-name.jpg" alt="Short description of the project screen" />
```

For a short demo:

```html
<video controls muted playsinline poster="assets/projects/project-name-cover.jpg">
  <source src="assets/projects/project-name-demo.mp4" type="video/mp4" />
</video>
```
