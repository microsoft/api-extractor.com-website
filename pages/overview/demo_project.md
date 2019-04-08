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


