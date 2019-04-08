---
layout: page
title: api-extractor.json
navigation_source: docs_nav
---

API Extractor's behavior is controlled by a config file **api-extractor.json** that is stored with your project.
You can use the [api-extractor init]({% link pages/commands/api-extractor_init.md %}) command to create a template
file to get you started.  The template will contain comments describing each setting.  It is based on
[api-extractor-template.json](
https://github.com/Microsoft/web-build-tools/blob/master/apps/api-extractor/src/schemas/api-extractor-template.json)
from the source code.

The individual JSON fields are documented below.

## Top-level Settings

### extends

Default value: `""`

Examples:
```js
  "extends": "./shared/api-extractor-base.json",
```

```js
  "extends": "my-package/include/api-extractor-base.json",
```

Optionally specifies another JSON config file that this file extends from.  This provides a way for
standard settings to be shared across multiple projects.

If the path starts with `./` or `../`, the path is resolved relative to the folder of the file with
the `extends` field.  Otherwise, the first path segment is interpreted as an NPM package name, and will be
resolved using NodeJS `require()`.


### mainEntryPointFile
(REQUIRED)

Example:
```js
  "mainEntryPointFile": "lib/index.d.ts",
```

Specifies the .d.ts file to be used as the starting point for analysis.  API Extractor
analyzes the symbols exported by this module.

The file extension must be `.d.ts` and not `.ts`.
The path is resolved relative to the `rootFolder` location described below.

## Compiler Section

Determines how the TypeScript compiler engine will be invoked by API Extractor.

### compiler.rootFolder

Default value: `"<lookup>"`

Example:
```js
  "compiler": {
    "rootFolder": "..",
    . . .
  }
```

The root folder for the project.  This folder typically contains the **tsconfig.json** and **package.json**
config files.

The `rootFolder` path is resolved relative to the folder containing **api-extractor.json**.

The default value for `rootFolder` is the token `<lookup>`, which means the folder is determined by traversing
parent folders, starting from the folder containing **api-extractor.json**, and stopping at the first folder
that contains a **tsconfig.json** file.  If a **tsconfig.json** file cannot be found in this way, then an error
will be reported.

### compiler.overrideTsconfig

Default value: *no overrideTsconfig section*

Example:
```js
  "compiler": {
    . . .
    "overrideTsconfig": {
      "$schema": "http://json.schemastore.org/tsconfig",

      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "declaration": true,
        "sourceMap": true,
        "declarationMap": true,
        "outDir": "lib"
      },
      "include": [
        "src/**/*.ts"
      ]
    },
    . . .
  }
```

Provides compiler configuration that will be used instead of reading the **tsconfig.json** file from disk.
The object must conform to the [TypeScript tsconfig schema](http://json.schemastore.org/tsconfig).

If omitted, then the **tsconfig.json** file will be read from the `rootFolder`.

### compiler.skipLibCheck

Default value: `false`

Example:
```js
  "compiler": {
    . . .
    "skipLibCheck": true
  }
```

This option causes the compiler to be invoked with the `--skipLibCheck` option. This option is not recommended
and may cause API Extractor to produce incomplete or incorrect declarations, but it may be required when
dependencies contain declarations that are incompatible with the TypeScript engine that API Extractor uses
for its analysis.  Where possible, the underlying issue should be fixed rather than relying on `skipLibCheck`.

## API Report Section

Configures how the API report file (\*.api.md) will be generated.

### apiReport.enabled

(REQUIRED)

Example:
```js
  "apiReport": {
    "enabled": true,
    . . .
  }
```

Whether to generate an API report.

### apiReport.reportFileName

Default value: `"<unscopedPackageName>.api.md"`

Example:
```js
  "apiReport": {
    . . .
    "reportFileName": "<unscopedPackageName>.api.md",
    . . .
  }
```

The filename for the API report files.  It will be combined with `reportFolder` or `reportTempFolder` to produce
a full output filename.

The file extension should be `.api.md`, and the string should not contain a path separator such as `\` or `/`.

### apiReport.reportFolder

Default value: `"etc/"`

Example:
```js
  "apiReport": {
    . . .
    "reportFolder": "<unscopedPackageName>.api.md",
    . . .
  }
```

Specifies the folder where the API report file is written.  The file name portion is determined by
the `reportFileName` setting.

The API report file is normally tracked by Git.  Changes to it can be used to trigger a branch policy,
e.g. for an API review.

The path is resolved relative to the `rootFolder` location.

### apiReport.reportTempFolder

Default value: `"temp/"`

Example:
```js
  "apiReport": {
    . . .
    "reportFolder": "<unscopedPackageName>.api.md",
    . . .
  }
```

Specifies the folder where the temporary report file is written.  The file name portion is determined by
the `reportFileName` setting.

After the temporary file is written to disk, it is compared with the file in the `reportFolder`.
If they are different, a production build will fail.

The path is resolved relative to the `rootFolder` location.

## API Report Section

Configures how the doc model file (\*.api.json) will be generated.

### docModel.enabled

(REQUIRED)

Example:
```js
  "docModel": {
    "enabled": true,
    . . .
  }
```

Whether to generate doc model file.

### docModel.apiJsonFilePath

Default value: `"temp/<unscopedPackageName>.api.json"`

Example:
```js
  "apiReport": {
    . . .
    "apiJsonFilePath": "temp/<unscopedPackageName>.api.json",
    . . .
  }
```

The output path for the doc model file.  The file extension should be `.api.json`.

The path is resolved relative to the `rootFolder` location.


## .d.ts Rollup Section

Configures how the .d.ts rollup file will be generated.

### dtsRollup.enabled

(REQUIRED)

Example:
```js
  "dtsRollup": {
    "enabled": true,
    . . .
  }
```

Whether to generate the .d.ts rollup file.

### dtsRollup.untrimmedFilePath

Default value: `"dist/<unscopedPackageName>.d.ts"`

Example:
```js
  "dtsRollup": {
    . . .
    "untrimmedFilePath": "dist/<unscopedPackageName>.d.ts",
    . . .
  }
```

Specifies the output path for a .d.ts rollup file to be generated without any trimming.
This file will include all declarations that are exported by the main entry point.

If the path is an empty string, then this file will not be written.

The path is resolved relative to the `rootFolder` location.

### dtsRollup.betaTrimmedFilePath

Default value: `""`

Example:
```js
  "dtsRollup": {
    . . .
    "betaTrimmedFilePath": "dist/<unscopedPackageName>-beta.d.ts",
    . . .
  }
```

Specifies the output path for a .d.ts rollup file to be generated with trimming for a "beta" release.
This file will include only declarations that are marked as `@public` or `@beta`.

If the path is an empty string, then this file will not be written.

The path is resolved relative to the `rootFolder` location.

### dtsRollup.publicTrimmedFilePath

Default value: `""`

Example:
```js
  "dtsRollup": {
    . . .
    "publicTrimmedFilePath": "dist/<unscopedPackageName>-public.d.ts",
    . . .
  }
```

Specifies the output path for a .d.ts rollup file to be generated with trimming for a "public" release.
This file will include only declarations that are marked as `@public`.

If the path is an empty string, then this file will not be written.

The path is resolved relative to the `rootFolder` location.


## TSDoc Metadata Section

Configures how the **tsdoc-metadata.json** file will be generated.

### tsdocMetadata.enabled

Default value: `true`

Example:
```js
  "tsdocMetadata": {
    "enabled": true,
    . . .
  }
```

Whether to generate the **tsdoc-metadata.json** file.

### tsdocMetadata.tsdocMetadataFilePath

Default value: `"<lookup>"`

Example:
```js
  "tsdocMetadata": {
    . . .
    "tsdocMetadataFilePath": "dist/tsdoc-metadata.json",
    . . .
  }
```

Specifies where the TSDoc metadata file should be written.

The default value is `<lookup>`, which causes the path to be automatically inferred from the `tsdocMetadata`,
`typings` or `main` fields of the project's **package.json**.  If none of these fields are set, the lookup
falls back to **tsdoc-metadata.json** in the package folder.


## Message Reporting Section

Configures how API Extractor reports error and warning messages produced during analysis.

There are three sources of messages:  compiler messages, API Extractor messages, and TSDoc messages.

### messages.\<section\>.\<rule\>.logLevel

Default value: `"warning"`

Example:

```js
  "messages": {
    "compilerMessageReporting": {
      "default": {
        // Treat compiler messages as errors instead of warnings
        "logLevel": "error"
      }
    },
    . . .
  }
```

Specifies whether the message should be written to the the tool's output log.  Note that
the `addToApiReportFile` property may supersede this option.

Possible values: `"error"`, `"warning"`, `"none"`

Errors cause the build to fail and return a nonzero exit code.  Warnings cause a production build fail
and return a nonzero exit code.  For a non-production build (e.g. when `api-extractor run` includes
the `--local` option), the warning is displayed but the build will not fail.

### messages.\<section\>.\<rule\>.addToApiReportFile

Default value: `false`

Example:

```js
  "messages": {
    "compilerMessageReporting": {
      "default": {
        "logLevel": "warning",

         // Don't break the build over compiler issues; instead write them to the API report
        "addToApiReportFile": true
      }
    },
    . . .
  }
```

When `addToApiReportFile` is true:  If API Extractor is configured to write an API report file (.api.md),
then the message will be written inside that file; otherwise, the message is instead logged according to
the `logLevel` option.

### messages.compilerMessageReporting

Default:

```js
  "messages": {
    "compilerMessageReporting": {
      "default": {
        "logLevel": "warning"
      }
    },
    . . .
  }
```

Example:

```js
  "messages": {
    "compilerMessageReporting": {
      "TS2551": {
        // Ignore TypeScript error TS2551 ("Property ___ does not exist on type ___")
        "logLevel": "none"
      }
    },
    . . .
  }
```

Configures handling of diagnostic messages reported by the TypeScript compiler engine while analyzing
the input .d.ts files.

TypeScript message identifiers start with `TS` followed by an integer.  For example: `TS2551`


### messages.extractorMessageReporting

Default: (See [api-extractor-defaults.json](
https://github.com/Microsoft/web-build-tools/blob/master/apps/api-extractor/src/schemas/api-extractor-defaults.json)
for the complete up-to-date table.)

```js
  "messages": {
    . . .
    "extractorMessageReporting": {
      "default": {
        "logLevel": "warning"
      },
      "ae-forgotten-export": {
        "logLevel": "warning",
        "addToApiReportFile": true
      },
      "ae-incompatible-release-tags": {
        "logLevel": "warning",
        "addToApiReportFile": true
      },
      "ae-internal-missing-underscore": {
        "logLevel": "warning",
        "addToApiReportFile": true
      },
      "ae-unresolved-inheritdoc-reference": {
        "logLevel": "warning",
        "addToApiReportFile": true
      },
      "ae-unresolved-inheritdoc-base": {
        "logLevel": "warning",
        "addToApiReportFile": true
      }
    },
    . . .
  }
```

Example:

```js
  "messages": {
    . . .
    "extractorMessageReporting": {
      "ae-extra-release-tag": {
        // Completely disable the "ae-extra-release-tag" validation
        "logLevel": "none"
      },
    },
    . . .
  }
```

Configures handling of messages reported by API Extractor during its analysis.

API Extractor message identifiers start with `ae-`.  For example: `ae-extra-release-tag`


### messages.tsdocMessageReporting

Default:

```js
  "messages": {
    . . .
    "tsdocMessageReporting": {
      "default": {
        "logLevel": "warning"
      }
    }
  }
```

Example:

```js
  "messages": {
    . . .
    "tsdocMessageReporting": {
      "tsdoc-link-tag-unescaped-text": {
        // Completely disable the "tsdoc-link-tag-unescaped-text" validation
        "logLevel": "none"
      },
    }
  }
```

Configures handling of messages reported by the TSDoc parser when analyzing code comments.

TSDoc message identifiers start with `tsdoc-`.  For example: `tsdoc-link-tag-unescaped-text`
