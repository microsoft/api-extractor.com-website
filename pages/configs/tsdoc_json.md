---
layout: page
title: tsdoc.json
navigation_source: docs_nav
---

[TSDoc](https://tsdoc.org/) is a standard syntax for TypeScript doc comments.  It can be extended with custom
tag definitions.  API Extractor's custom definitions (referred to as "AEDoc") can be found in the file
[extends/tsdoc-base.json](https://github.com/microsoft/rushstack/blob/master/apps/api-extractor/extends/tsdoc-base.json).

If your code comments are processed by other TSDoc-compatible tools, you can add a **tsdoc.json** config file
to your project. This enables different tools to agree about how comments should be parsed.  If you are using
the [eslint-plugin-tsdoc](https://www.npmjs.com/package/eslint-plugin-tsdoc) plugin, it also enables ESLint
to report warnings for tags that are ***not defined*** (for example misspelled) or ***not supported***
(for example a standardized tag that is not implemented by your tooling).

Add a file like this to your project:

**&lt;your-project-folder&gt;/tsdoc.json**
```js
{
  "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",

  // Inherit the TSDOc configuration from API Extractor
  "extends": [ "@microsoft/api-extractor/extends/tsdoc-base.json" ]
}
```


## Defining your own TSDoc tags

You can also define your own tags in **tsdoc.json** and the ESLint plugin will validate them.
API Extractor will serialize these definitions into the .api.json output files (in the `"tsdocConfig"` field)
so that they are accessible to tools that use the
[@microsoft/api-extractor-model](https://www.npmjs.com/package/@microsoft/api-extractor-model) library.

Here's a basic example of a custom tag definition:

**&lt;your-project-folder&gt;/tsdoc.json**
```js
{
  "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",

  // Inherit the TSDOc configuration from API Extractor
  "extends": ["@microsoft/api-extractor/extends/tsdoc-base.json"],

  "tagDefinitions": [
    // Define a custom tag and specify how it should be parsed
    {
      "tagName": "@myCustomTag",
      "syntaxKind": "block",
      "allowMultiple": true,
    }
  ],

  "supportForTags": {
    // Indicate that the custom tag is supported by your tooling.  (With this, warnings may
    // be reported saying that the tag is known but not supported.)
    "@myCustomTag": true
  }
}
```

For more details about the **tsdoc.json** file, refer to the
[@microsoft/tsdoc-config](https://tsdoc.org/pages/packages/tsdoc-config/) documentation.
