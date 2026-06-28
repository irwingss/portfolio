# Irwing Saldaña — Portfolio

Static portfolio and web CV for Data Science, Machine Learning, and AI Engineering roles.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run preview
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys every push to `main`. In the GitHub repository settings, set **Pages → Source** to **GitHub Actions**.

The Astro configuration automatically supports both:

- a user site such as `irwingss.github.io`
- a project site such as `irwingss.github.io/irwing-portfolio`

## Content policy

Employer projects are described as closed-source case studies. No private source code or internal artifacts belong in this repository.

Local planning notes live under `.private/` and are excluded from Git.
