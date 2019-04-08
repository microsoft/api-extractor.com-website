---
layout: page
title: The API docs
navigation_source: docs_nav
---


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
