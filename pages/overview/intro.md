---
layout: page
title: What is API Extractor?
navigation_source: docs_nav
---

API Extractor is a TypeScript analysis tool that supports three major scenarios:

**1. API Report** - It can follows all exports from the project entry point, and generates a report that can be used
to drive an API review workflow.

**2. .d.ts Rollups** - Similar to how **Webpack** can roll up all your JavaScript files into a single bundle for distribution, API Extractor can roll up your TypeScript declarations into a single .d.ts file.

**3. Online Documentation** - API Extractor can generate an .api.json file for each of your projects containing the extracted signatures and doc comments (using [TSDoc](https://github.com/Microsoft/tsdoc) notation).  The **api-documenter** tool can then be used to generate an online API reference.

<div class="d-flex flex-row justify-content-center py-5">
  <img height="250px mx-auto" src="{{ site.baseurl }}/images/ae-flow-chart.svg" />
</div>


#### Next up: [A sample project]({% link pages/overview/demo_project.md %})
