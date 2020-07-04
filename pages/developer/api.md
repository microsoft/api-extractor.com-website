---
layout: page
title: API packages
navigation_source: docs_nav
---

These NPM packages export developer APIs that are documented in integrated API reference for all Rush Stack projects:

- [@microsoft/api-extractor](https://rushstack.io/pages/api/api-extractor/)

  This is used to invoke the API Extractor engine from a toolchain.  An code sample is presented in the [Invoking API Extractor]({% link pages/setup/invoking.md %}) tutorial.

- [@microsoft/api-extractor-model](https://rushstack.io/pages/api/api-extractor-model/)

  This is used to read the .api.json data model, for example to implement a custom documentation tool.  The [NPM page](https://www.npmjs.com/package/@microsoft/api-extractor-model) for this package shows a code sample.

- [@microsoft/api-documenter](https://rushstack.io/pages/api/api-documenter/)

  This used to create plugins that customize the output of the API Documenter tool.  This is an experimental new feature.  For a usage example, take a look at the [repo-scripts/doc-plugin-rush-stack](https://github.com/microsoft/rushstack/tree/master/repo-scripts/doc-plugin-rush-stack) project, which [adds Jekyll headers](https://github.com/microsoft/rushstack/blob/cd6d2c3f9d6d43ec37311a26fbf320be30b32da1/repo-scripts/doc-plugin-rush-stack/src/RushStackFeature.ts#L31) to API Documenter's markdown output.  The [repo-scripts/generate-api-docs](https://github.com/microsoft/rushstack/tree/master/repo-scripts/generate-api-docs) project uses this plugin to generate the Rush Stack API reference.  It is invoked by running the [generate-api-docs.cmd](https://github.com/microsoft/rushstack/blob/master/repo-scripts/generate-api-docs/generate-api-docs.cmd) script.  The plugin is registered in the [api-documenter.json](https://github.com/microsoft/rushstack/blob/master/repo-scripts/generate-api-docs/api-documenter.json) config file.
