---
layout: page
title: ae-different-release-tags
navigation_source: docs_nav
---

*"This symbol has another declaration with a different release tag."*

## Remarks

In the TypeScript language, a symbol can have multiple declarations.  They are called "merged declarations"
because they describe the same underlying JavaScript object.  The `ae-different-release-tags` is reported when
merged declarations have different release tags.

Example:

```ts
/** @public */
interface Size {
    width: number;
    height: number;
}

/** @beta */
function Size(width: number, height: number): Size {
    return { width, height };
}
```

In the example above, the `Size` symbol has an interface declaration that is marked as `@public`, but a function
declaration that is marked as `@beta`, so the `ae-different-release-tags` error is reported.


> It would be possible for API Extractor to allow different release tags for certain types of declarations,
> and this could be very useful.  GitHub [issue #972](https://github.com/Microsoft/web-build-tools/issues/972)
> proposes this enhancement and discusses some of the challenges involved.

## How to fix

Change the symbol's declarations to have the same release tag.

