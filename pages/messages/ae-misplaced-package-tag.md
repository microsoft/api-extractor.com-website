---
layout: page
title: ae-misplaced-package-tag
navigation_source: docs_nav
---

*"The @packageDocumentation comment must appear at the top of entry point *.d.ts file."*

## Remarks

The doc comment containing the `@packageDocumentation` tag must appear as the first comment
in the entry point file (as specified by the `mainEntryPointFilePath` setting).  To prevent mistakes,
API Extractor reports `ae-misplaced-package-tag` if it finds a comment with the `@packageDocumentation` tag
in some other location.

## How to fix

Move the comment to the top of the file.

> Be aware that the TypeScript compiler can delete or rearrange comment blocks when emitting the .d.ts files.
> When investigating this issue, it's better to inspect your entry point's .d.ts file instead of the .ts file.

## See also

- [@packageDocumentation tag]({% link pages/tsdoc/tag_packagedocumentation.md %})
- [mainEntryPointFilePath setting]({% link pages/commands/config_file.md %}#mainentrypointfilepath)
