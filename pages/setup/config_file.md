---
layout: page
title: api-extractor.json
navigation_source: docs_nav
---

The configuration settings in detail:

| Setting           | What it does                                                 |
| :---------------- | :----------------------------------------------------------- |
| enabled           | Whether the **API Extractor** task should run during the build. |
| entry             | The TypeScript entry point.  This should match the "main" and "entry" fields in your **package.json** file (except that "entry" identifies the source file, not the target files). |
| apiReviewFolder   | Where to write the \*.api.ts output file.  This file should be tracked by git, and used to trigger a PR approval policy.  The default value is "**./etc**". |
| apiJsonFolder     | Where to write the \*.api.json output file, used to generate documentation.  The default value is "**./dist**". |
| generateDtsRollup | If true, then API Extractor will generate *.d.ts rollup files for this project.  The default value is **false**. |
| dtsRollupTrimming | Only used if `generateDtsRollup` is **true**.  If `dtsRollupTrimming` is **true**, then the  **API Extractor** task will generate separate \*.d.ts rollup files for internal, beta, and public release types; otherwise a single *.d.ts file will be generated with no trimming. |

That's it!  To see an example config file, take a look at [config/api-extractor.json](https://github.com/Microsoft/web-build-tools/blob/master/libraries/node-core-library/config/api-extractor.json) for **node-core-library**.

