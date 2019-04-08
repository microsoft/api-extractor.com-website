---
layout: page
title: The API report
navigation_source: docs_nav
---

## The API Review File (*.api.ts)

When we compile the above source files, **API Extractor** produces an "API review file" called **sp-core-library.api.ts**.  This file should be added to Git.  If a developer makes a change to the `Log` class on their local PC, they will see something like this when they rebuild locally using `gulp build`:

```
[17:01:21] Starting subtask 'api-extractor'...
[17:01:28] [api-extractor] You have changed the Public API signature for this
project.  Updating '..\..\common\reviews\api\sp-core-library.api.ts'
[17:01:28] Finished subtask 'api-extractor' after 0.54 s
```

They should commit this change and include it in their PR.  If they forget to do this, the PR validation will fail because it is built using `gulp --ship`, which does not automatically copy the file:

```
[17:03:37] Starting subtask 'api-extractor'...
[17:03:44] Warning - [api-extractor] You have changed the Public API signature for
this project.  Please overwrite '../../common/reviews/api/sp-core-library.api.ts'
with a copy of 'temp/sp-core-library.api.ts' and then request an API review.
See the Git repository README.md for more info.
[17:03:44] Finished subtask 'api-extractor' after 0.56 s
```

This setup enables us to define a PR policy that requires approval from a project stakeholder whenever the API has changed.  Frivolous approvals can be annoying, so the API file is designed so that a diff only occurs when an important contract change has changed.  Here is the API file produced for our example above:

**sp-core-library.api.ts**<br/>
```ts
// @beta
interface ILogHandler {
  // (undocumented)
  error(source: string, error: Error): void;
  // (undocumented)
  info(source: string, message: string): void;
  // (undocumented)
  verbose(source: string, message: string): void;
  // (undocumented)
  warn(source: string, message: string): void;
}

// @public
class Log {
  // @beta
  public static initialize(logHandler: ILogHandler): void;
  public static error(source: string, error: Error): void;
  public static info(source: string, message: string): void;
  public static verbose(source: string, message: string): void;
  public static warn(source: string, message: string): void;
}
```

From the perspective of a reviewer:

- We care about changes to function signatures, but we don't want to be bothered about function bodies (i.e. every line of code)
- We want to know about changes to exported files (e.g. `Log` and `ILogHandler`), but not private classes (e.g. `DefaultLogHandler`)
- We care about *whether* people wrote documentation ("`// (undocumented)`" warning), but we don't need to know every time a sentence changes
- We care about the release status of an item (`@internal`, `@alpha`, `@beta`, or `@public`), while ignoring most other AEDoc tags
- Generally we DO want to monitor `@internal` definitions because they affect first party consumers (but for certain classes this can be suppressed via the `@internalpreapproved` tag)

Having this synopsis in one easy-to-review report is very powerful.  Turning on **API Extractor** for a project is often an enlightening moment.  ("What is THAT doing in there?!  These names are pretty confusing!  Why didn't anyone write documentation?!" and so forth.)  Although we may work with these source files every day, it's easy to miss the big picture without a tool to visualize it.


