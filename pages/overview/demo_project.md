---
layout: page
title: Feature Walkthrough
navigation_source: docs_nav
---

## Example TypeScript project

This walkthrough is based on a real-world NPM package **@microsoft/sp-core-library**.  Its entry point is *src/index.ts*:

**src/index.ts**<br/>
```ts
export { default as Log } from './log/Log';
export { default as ILogHandler } from './log/ILogHandler';
```

These definitions come from three other source files (excerpted here for brevity):

**src/log/Log.ts**<br/>
```ts
import DefaultLogHandler from './DefaultLogHandler';
import ILogHandler from './ILogHandler';

/**
 * The Log class provides static methods for logging messages at different levels (verbose,
 * info, warning, error) and with context information. Context information helps identify
 * which component generated the messages and makes the messages useful and filterable.
 * @public
 */
export default class Log {
  private static _logHandler: ILogHandler = new DefaultLogHandler();

  /**
   * Configures the logger with a different target.
   * @beta
   */
  public static initialize(logHandler: ILogHandler): void {
    Log._logHandler = logHandler;
  }

  /**
   * Logs a verbose message
   * @param   source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param   message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   */
  public static verbose(source: string, message: string, scope?: ServiceScope): void {
    this._logHandler.verbose(source, message, scope);
  }

  . . .
  public static info(source: string, message: string): void {
    this._logHandler.info(source, message, scope);
  }

  . . .
  public static warn(source: string, message: string): void {
    this._logHandler.warn(source, message);
  }

  . . .
  public static error(source: string, error: Error): void {
    this._logHandler.error(source, error);
  }
}

```

**src/log/ILogHandler.ts**<br/>
```ts
/**
 * The redirectable implementation for the Log class.
 * @beta
 */
export interface ILogHandler {
  verbose(source: string, message: string): void;
  info   (source: string, message: string): void;
  warn   (source: string, message: string): void;
  error  (source: string, error: Error): void;
}

export default ILogHandler;
```

**src/log/DefaultLogHandler.ts**<br/>
*(private in this example, so its implementation is unimportant and left to your imagination.)*



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



## The *.d.ts Rollup File

Each of the above files builds into a corresponding set of intermediary outputs:

<i>
lib/index.d.ts<br/>
lib/index.js<br/>
lib/log/Log.d.ts<br/>
lib/log/Log.js<br/>
lib/log/ILogHandler.d.ts<br/>
lib/log/ILogHandler.js<br/>
. . .
</i>

We can use a linker such as [Webpack](https://webpack.js.org) to roll up the \*.js files into a single output:  **dist/sp-core-library.js**

In the same way, **API Extractor** can produce a rollup for your \*.d.ts files: **dist/sp-core-library.d.ts**

Optionally, we can enable \*.d.ts trimming to exclude the `@beta` members from the rollup file.  The result might look like this:

```ts
/* Excluded from this release type: ILogHandler */

/**
 * The Log class provides static methods for logging messages at different levels (verbose,
 * info, warning, error) and with context information. Context information helps identify
 * which component generated the messages and makes the messages useful and filterable.
 * @public
 */
export declare class Log {
  private static _logHandler;

  /* Excluded from this release type: initialize */

  /**
   * Logs a verbose message
   * @param   source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param   message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   */
  public static verbose(source: string, message: string, scope?: ServiceScope): void;

  . . .
  public static info(source: string, message: string): void;

  . . .
  public static warn(source: string, message: string): void;

  . . .
  public static error(source: string, error: Error): void;
}
```

With this feature, when developers are targeting production, they no longer have to worry about accidentally taking a dependency on your unstable **initialize()** function. It won't even appear in their VS Code IntelliSense!  They would need to explicitly opt-in to the "beta" release to get those definitions. (Similarly, `@internal` and `@alpha` APIs would only be accessible to first-party developers who are targeting an "internal" release.)




## The API JSON File (*.api.json)

For each project, **API Extractor** also outputs a JSON file that can be used to generate online documentation using the [api-documenter tool]({% link pages/setup/generating_docs.md %}).  For example, our **sp-core-library** gets rendered [like this](https://docs.microsoft.com/en-us/javascript/api/sp-core-library).

However, this is just one possibility.  The API JSON files have a simple format can be easily adapted to work with any documentation templating system.  Here is an example excerpt for the `Log` class:

```json
{
  "kind": "package",
  "summary": [],
  "remarks": [],
  "exports": {
    "Log": {
      "kind": "class",
      "extends": "",
      "implements": "",
      "typeParameters": [],
      "deprecatedMessage": [],
      "summary": [
        {
          "kind": "textDocElement",
          "value": "The Log class provides static methods for logging messages at different levels (verbose, info, warning, error) and with context information. Context information helps identify which component generated the messages and makes the messages useful and filterable."
        }
      ],
      "remarks": [],
      "isBeta": false,
      "members": {
        "verbose": {
          "kind": "method",
          "signature": "public static verbose(source: string, message: string, scope?: ServiceScope): void;",
          "accessModifier": "public",
          "isOptional": false,
          "isStatic": true,
          "returnValue": {
            "type": "void",
            "description": []
          },
          "parameters": {
            "source": {
              "name": "source",
              "description": [
                {
                  "kind": "textDocElement",
                  "value": "the source from where the message is logged, e.g., the class name. The source provides context information for the logged message. If the source's length is more than 20, only the first 20 characters are kept."
                }
              ],
              "isOptional": false,
              "isSpread": false,
              "type": "string"
            }
          },
          "deprecatedMessage": [],
          "summary": [
            {
              "kind": "textDocElement",
              "value": "Logs a verbose message"
            }
          ],
          "remarks": [],
          "isBeta": false
        },
      }
    }
  }
}
```

Complete documentation of this file format is provided in the JSON Schema [api-json-schema.json](https://raw.githubusercontent.com/Microsoft/web-build-tools/master/apps/api-extractor/src/api/api-json.schema.json), which every API JSON file conforms to.

The API JSON file does not need to be tracked by Git.  However, it should be included with your other outputs when publishing an NPM package, because **api-extractor** will use it to resolve `{@inheritdoc}` and `{@link}` references for projects that consume your library.

#### Next up: [The API report]({% link pages/overview/demo_api_report.md %})
