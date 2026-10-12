# AGENTS.md — Manchester Vegan Guide

## Project Overview

Manchester Vegan Guide is a live website at https://manchesterveganguide.com/.

The website helps people discover vegan and vegetarian restaurants in Manchester through restaurant listings, location pages, cuisine categories and articles.

The main goals are to:

* Increase organic traffic from Google.
* Improve search engine rankings for relevant Manchester vegan and vegetarian searches.
* Keep restaurant information accurate and up to date.
* Improve website performance, accessibility and user experience.
* Maintain a clean, secure and reliable codebase.

## Development Rules

1. Read this file before starting any task.
2. Inspect the existing implementation before making changes.
3. Follow the project's existing Next.js architecture, coding conventions and styling.
4. Make small, focused changes directly related to the requested task.
5. Do not redesign pages, rewrite content or change functionality unless explicitly requested.
6. Do not install dependencies without approval.
7. Do not delete files or remove features without approval.
8. Do not commit, push or deploy unless explicitly instructed.
9. Explain any proposed major changes before implementing them.
10. Preserve existing functionality and responsive layouts.

## SEO Requirements

* Follow current Google Search Central guidance.
* Prioritise useful content and search intent rather than keyword stuffing.
* Preserve existing URLs wherever possible.
* Maintain accurate metadata, canonical URLs, structured data, sitemaps and robots directives.
* Avoid duplicate or misleading content.
* Do not invent restaurant reviews, ratings, opening hours or business information.
* Recommend redirects before removing or changing indexed URLs.
* Do not introduce unnecessary indexing restrictions.
* Ensure internal links are relevant and useful.

## Restaurant Directory Rules

* Treat restaurant information as potentially outdated until independently verified.
* Never assume a restaurant is open simply because it appears in the existing data.
* Never mark a restaurant as permanently closed without reliable evidence.
* Prefer official restaurant websites and recent business announcements.
* Cross check uncertain information using independent sources.
* Clearly flag conflicting or unverified information.
* Do not add, remove or alter restaurant listings without approval.
* Preserve existing restaurant URLs unless a change is explicitly approved.
* Maintain consistent restaurant data structures and categories.

## Performance Requirements

* Prioritise Core Web Vitals and mobile performance.
* Optimise images without unnecessarily reducing visual quality.
* Avoid introducing unnecessary JavaScript or dependencies.
* Maintain responsive image sizing and prevent layout shifts.
* Prefer existing Next.js capabilities over additional packages.
* Measure performance before claiming improvements.

## Accessibility Requirements

* Aim for WCAG 2.2 AA compliance.
* Use semantic HTML and logical heading structures.
* Maintain keyboard accessibility and visible focus states.
* Ensure images have appropriate alternative text.
* Maintain readable typography and sufficient colour contrast.
* Respect reduced motion preferences.
* Do not introduce inaccessible interactive elements.

## Testing and Validation

After making approved changes:

* Run the existing lint checks.
* Run the production build where practical.
* Test affected routes and functionality.
* Check mobile and desktop behaviour where browser testing is available.
* Report any tests that could not be completed.
* Never claim tests passed unless they were actually run.

## Communication and Workflow

* Keep responses concise and practical.
* Work on one approved task at a time.
* Explain which files were changed and why.
* Identify any risks or potential regressions.
* Report testing results.
* Do not make unrelated improvements without permission.
* For audit requests, do not modify any files.
* Wait for approval before proceeding to the next stage.