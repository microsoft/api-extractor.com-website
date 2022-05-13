---
layout: page
title: ae-wrong-input-file-type
navigation_source: docs_nav
---

*"Incorrect file type; API Extractor expects to analyze compiler outputs with the .d.ts file extension."*

## Remarks

Unlike some other tools, API Extractor does not TypeScript source files directly.  Instead, it is
designed to analyze the .d.ts files that are emitted by the compiler and exported by your NPM package.
This design choice ensures that API Extractor sees your library the same way that an external consumer
will see it.  It also ensures that the .d.ts rollup preserves the particular syntax choices of
your toolchain, compiler version, and manually authored inputs.

As a result, your `mainEntryPointFilePath` entry point must have the .d.ts file extension, and so must
all of the imported modules.  The `ae-wrong-input-file-type` error is reported if any incorrect file extensions
are encountered.


## How to fix

To reduce log noise, this error is reported at most once.  To see the full list of imported paths,
invoke API Extractor with the `--diagnostics` parameter, and look for any file paths that have
a problematic file extension such as `.ts` or `.tsx`.  Then try to determine why that file is being
imported instead of the corresponding `.d.ts` file.

> **Tip**
>
> If you're having trouble determining how a particular file is imported, it can be helpful
> to invoke the compiler with the `--traceResolution` parameter:
>
> ```shell
> tsc --traceResolution > trace.log
> ```
>
> Although this reports the dependency graph of the ***source files***, not the `mainEntryPointFilePath`
> entry point, it can still be informative.  (For an accurate trace, you would need to temporarily modify
> your **tsconfig.json** file to process .d.ts files; this is what API Extractor does for its analysis.)

Common issues:

- Are you invoking API Extractor before the compiler has produced any .d.ts outputs?
  Ensure that your toolchain emits .d.ts files before API Extractor is invoked.

- Is your compiler writing `example.d.ts` into the same file folder as `example.ts`? This is a poor practice.
  Consider separating input and output files, for example `src/{*.ts,*.tsx}` versus `lib/{*.js,*.d.ts}`.

- Is an NPM package dependency exporting TypeScript source files instead of .d.ts declaration files?
  This is a poor practice. Ask the package maintainer to follow standard practice of distributing
  prebuilt outputs.


As a temporary mitigation, you can disable the `ae-wrong-input-file-type` validation by adding a section
like this to your **api-extractor.json** file:

```js
  "messages": {
    "extractorMessageReporting": {
      "ae-wrong-input-file-type": {
        // Disable this validation at your own risk.  Processing an incorrect file type
        // may lead to other errors.  Function bodies may incorrectly get emitted in the
        // .d.ts rollup.
        "logLevel": "none"
      }
    }
  }
```

## See also

- [Invoking API Extractor]({% link pages/setup/invoking.md %})
