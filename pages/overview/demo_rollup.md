---
layout: page
title: The .d.ts rollup
navigation_source: docs_nav
---

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


