---
layout: page
title: Generating .d.ts Rollups
navigation_source: docs_nav
---

## \*.d.ts rollup without trimming

If you want to create a \*.d.ts rollup for your project:



1<!-- -->. Add a `dtsRollup` section to your **api-extractor.json** config file like this:

**api-extractor.json**<br/>

```ts
{
  "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/api-extractor.schema.json",
  "compiler" : {
    "configType": "tsconfig",
    "rootFolder": "."
  },
  "project": {
    "entryPointSourceFile": "lib/index.d.ts"
  },
  "dtsRollup": {
    "enabled": true,
    "trimming": false
  }
}
```

> **NOTE:** If you are using **gulp-core-build**, simply set `generateDtsRollup=true` instead of making the above changes.



2<!-- -->.  Make sure your **package.json** file has a `typings` field that points to your rollup target file (not the original entry point such as **lib/index.d.ts**).

3<!-- -->.  Add a `tsdoc` field as shown below.

Full example:

**package.json**<br/>

```ts
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "dist/my-project.js",
  "typings": "dist/my-project.d.ts",
  "tsdoc": {
    "tsdocFlavor": "AEDoc"
  },
  "scripts": {
    "build": "node build.js"
  },
  "devDependencies": {
    "@microsoft/api-extractor": "^5.6.1"
  }
}
```

When you invoke **API Extractor**, it will now generate the **dist/my-project.d.ts** file as part of its output.  For a working example, take a look at the [build-tests/api-extractor-test-01](https://github.com/Microsoft/web-build-tools/tree/master/build-tests/api-extractor-test-01) project.

To learn about other configuration options that control the rollups, see the [IExtractorDtsRollupConfig](https://github.com/Microsoft/web-build-tools/blob/master/apps/api-extractor/src/extractor/IExtractorConfig.ts) interface documentation.



## \*.d.ts rollup with trimming

This is an advanced scenario that assumes you will be publishing parallel releases of your package.  For example:

| NPM Package Version          | Publish Folder | Trimming                                    |
| ---------------------------- | -------------- | ------------------------------------------- |
| my-project@<!-- -->1.0.0-internal \* | dist/internal/ | none                                        |
| my-project@<!-- -->1.0.0-beta        | dist/beta/     | excludes `@internal`, and `@alpha`          |
| my-project@<!-- -->1.0.0             | dist/public/   | excludes `@internal`, `@alpha`, and `@beta` |

*\* The **my-project@<!-- -->1.0.0-internal** version typically would be published only to a private NPM registry for first-party development.*



Configuring **API Extractor** for this is actually fairly easy -- simply set `trimming` to **true** in the **api-extractor.json** config file seen above.  (For **gulp-core-build**,  instead set `dtsRollupTrimming` to **true**.)  Also update your `typings` field in **package.json** to something like **dist/internal/my-project.d.ts**.

The real work item is to set up your build process to write corresponding outputs into the three separate folders.  Typically the operation would go like this:

1. Build all your outputs into **dist/internal/**.
2. Run API Extractor to write a \*.d.ts rollup to **dist/internal/my-project.d.ts**.
3. Copy your **package.json** into **dist/internal/**, possibly removing unnecessary entries.
4. Run `npm publish` in the **dist/internal/** folder.
5. Repeat the above steps for **dist/beta** and **dist/public**.

For a working example that shows the different levels of trimming, take a look at the [build-tests/api-extractor-test-04](https://github.com/Microsoft/web-build-tools/tree/master/build-tests/api-extractor-test-04) project.


#### Next up: [Generating Docs]({% link pages/setup/generating_docs.md %})
