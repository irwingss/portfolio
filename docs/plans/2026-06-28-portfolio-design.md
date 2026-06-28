# Portfolio design

## Goal

Create a public, recruiter-friendly portfolio for Data Scientist, ML Engineer, and AI Engineer roles. The site must present Irwing as a scientist who ships production systems while remaining honest about private employer code.

## Direction

The visual system combines an academic profile layout with an engineering case-study format: a persistent identity rail, restrained editorial typography, compact evidence, and visual project summaries. The result should feel like a working research notebook rather than a startup landing page.

## Information architecture

1. Positioning and availability
2. Quantified production evidence
3. Ressearch AI as the featured live product
4. Anonymized case studies for closed-source employer work
5. Capabilities, experience, research, and education
6. Direct contact

Private projects are labeled accurately. No private repository, internal document, credential, or confidential implementation detail is exposed.

## Technical approach

Astro generates a static site with no backend and no runtime data dependency. CSS and inline SVG provide the visual language. GitHub Actions builds and deploys the output to GitHub Pages, including support for project-repository base paths. The page is responsive, keyboard accessible, print friendly, and respects reduced-motion preferences.

## Local-only material

Future portfolio concepts are stored under `.private/`, which is ignored by Git. The public application has no link, import, build step, or text reference to that content.
