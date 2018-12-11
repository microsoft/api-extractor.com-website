---
layout: page
title: Getting Started
navigation_source: docs_nav
---

There are three easy ways to set up your project to use API Extractor.

# 1. Using the command-line

The simplest method is to run the command-line tool.  Install it like this:

```
npm install -g @microsoft/api-extractor
```

Next, create a config file `api-extractor.json` for your project. Here's a simple example `api-extractor.json` file:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/api-extractor.schema.json",
  "compiler" : {
    "configType": "tsconfig",
    "rootFolder": "."
  },
  "project": {
    "entryPointSourceFile": "lib/index.d.ts"
  }
}
```

More information about this file format:

- [api-extractor.schema.json](https://github.com/Microsoft/web-build-tools/blob/master/apps/api-extractor/src/extractor/api-extractor.schema.json) - the JSON schema

- [IExtractorConfig.ts](https://github.com/Microsoft/web-build-tools/blob/master/apps/api-extractor/src/extractor/IExtractorConfig.ts) - TypeScript interfaces for the JSON schema

- [api-extractor-defaults.json](https://github.com/Microsoft/web-build-tools/blob/master/apps/api-extractor/src/extractor/api-extractor-defaults.json) - the default values

Finally, compile your project and then invoke the **api-extractor** tool in your project folder, like this:

```
C:\> cd my-project
C:\my-project> api-extractor run
```

If the config file is not in your project root folder, you can specify its location using the `--config` option.  For a non-production build, you should also include the `--local` option. For example:

```
C:\> cd my-project
C:\my-project> api-extractor run --config .\config\api-extractor.json --local
```

For more information about command-line options, try: `api-extractor run -h`



>  **IMPORTANT:**  You must compile your project before invoking **API Extractor**.  As of version 5, **api-extractor** processes the compiler's \*.d.ts outputs, not your TypeScript source files.  (This change makes it easier to support non-TypeScript projects that emit typings as output, and it also simplifies the \*.d.ts rollup stage.)




# 2. Using a NodeJS build script

If your TypeScript project is compiled using build scripts, you can also invoke **API Extractor** using its [library API](https://microsoft.github.io/web-build-tools/api/api-extractor.html).  It accepts the same configuration structure as the `api-extractor.json`.  Here's a basic example:

```ts
import { Extractor, IExtractorConfig, IExtractorOptions } from '@microsoft/api-extractor';

// This interface represents the API Extractor config file contents
const config: IExtractorConfig = {
  compiler: {
    configType: 'tsconfig',
    rootFolder: process.cwd()
  },
  project: {
    entryPointSourceFile: 'lib/index.d.ts'
  }
};

// This interface provides additional runtime state
// that is NOT part of the config file
const options: IExtractorOptions = {
  // Indicates that API Extractor is running as part of a local build,
  // e.g. on developer's machine. For example, if the *.api.ts output file
  // has differences, it will be automatically overwritten for a
  // local build, whereas this should report an error for a production build.
  localBuild: process.argv.indexOf('--ship') < 0
}

const extractor: Extractor = new Extractor(config, options);
extractor.analyzeProject();
```

Unlike the command-line, the library API also enables you to provide an already initialized TypeScript compiler state at runtime, via the [IExtractorOptions interface](https://microsoft.github.io/web-build-tools/api/api-extractor.iextractoroptions.html).  This allows you to reuse the exact same configuration that your build scripts provided to the TypeScript compiler API.

Here's how to provide the `ts.Program` compiler state:

```ts
import * as ts from 'typescript';
import { JsonFile } from '@microsoft/node-core-library';
import { Extractor, IExtractorConfig, IExtractorOptions } from '@microsoft/api-extractor';

const tsconfig: {} = JsonFile.load('tsconfig.json');

const parsedCommandLine: ts.ParsedCommandLine = ts.parseJsonConfigFileContent(
  tsconfig, ts.sys, process.cwd());

const program: ts.Program = ts.createProgram(parsedCommandLine.fileNames,
  parsedCommandLine.options);

// This interface represents the API Extractor config file contents
const config: IExtractorConfig = {
  compiler: {
    configType: 'runtime',
    rootFolder: process.cwd()
  },
  project: {
    entryPointSourceFile: 'lib/index.d.ts'
  }
};

// This interface provides additional runtime state
// that is NOT part of the config file
const options: IExtractorOptions = {
  // Indicates that API Extractor is running as part of a local build,
  // e.g. on developer's machine. For example, if the *.api.ts output file
  // has differences, it will be automatically overwritten for a
  // local build, whereas this should report an error for a production build.
  localBuild: process.argv.indexOf('--ship') < 0,

  // A compiler object, since we specified configType=runtime above
  compilerProgram: program,

  // A custom logging function
  customLogger: {
    logVerbose: (message: string) => { /* don't log verbose messages */ }
  }
}

const extractor: Extractor = new Extractor(config, options);
extractor.analyzeProject();
```

For a real world example, take a look at [ApiExtractorTask.ts](https://github.com/Microsoft/web-build-tools/blob/master/core-build/gulp-core-build-typescript/src/ApiExtractorTask.ts) from **gulp-core-build**.




# 3. If you use gulp-core-build...

**API Extractor** is already integrated into Microsoft's **gulp-core-build** toolchain.  To enable it, you simply add config file to your project, like this:

**config/api-extractor.json**<br/>
```json
{
  "enabled": true,
  "apiReviewFolder": "../common/reviews/api",
  "apiJsonFolder": "./lib",
  "entry": "lib/index.d.ts"
}
```

> **NOTE**: Although the **gulp-core-build** task's config file is also called "**api-extractor.json**", the JSON schema is completely different and considerably simpler.

#### Next up: [Generating Review Files]({% link pages/setup/generating_reviews.md %})
