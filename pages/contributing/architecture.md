---
layout: page
title: Architecture notes
navigation_source: docs_nav
---

If you're interested in contributing, here's some general architectural notes that will hopefully help you find
your way around the code base.  (By the way, if you'd like to see more detail about specific aspects or topics,
please let use know by creating a GitHib issue in the [api-extractor.com-website](
https://github.com/microsoft/api-extractor.com-website/) repo.)

## Project anatomy

API Extractor's code is separated into source code folders that reflect subsystems that can be arranged
into a rough overall operational flow.

- [src/cli](https://github.com/microsoft/rushstack/tree/master/apps/api-extractor/src/cli) -
  the command-line interface (CLI) that gets things started

- [src/api](https://github.com/microsoft/rushstack/tree/master/apps/api-extractor/src/api) -
  this folder contains the public API such as `Extractor` and `ExtractorConfig`.  The CLI invokes these
  APIs the same way that an external consumer would; it doesn't use any special internals.  The TypeScript
  compiler gets configured in this stage, producing the `ts.Program` object that will be used below.

- [src/collector](
  https://github.com/microsoft/rushstack/tree/master/apps/api-extractor/src/collector) -
  The `Collector` acts as a central orchestrator that runs many of the stages below.  Conceptually it is "collecting"
  all the API information in a central place, primarily `CollectorEntity` objects.  This folder also has the
  `MessageRouter` class that routes errors and warnings based on the `"messages"` table from **api-extractor.json**.

- [src/analyzer](https://github.com/microsoft/rushstack/tree/master/apps/api-extractor/src/analyzer) -
  the core analyzer, which traverses the TypeScript compiler's abstract syntax tree (AST) and produces
  the higher-level representations used by API Extractor.  There are 4 major pieces of tech here:

  - The `AstSymbol` and `AstDeclaration` classes, which mirror the compiler's `ts.Symbol` and `ts.Declaration`
    classes.  The difference is that an `AstDeclaration` node is only generated for a specific set of supported types
    (e.g. classes, enums, interfaces, etc.).  Thus, this tree omits all the intermediary nodes (e.g. `extends`
    clauses, `:` tokens, and so forth).

  - The `ExportAnalyzer`, which traverses chains of TypeScript `import` statements, eliminating the
    intermediary symbol aliases so we can build a flattened via as seen in the .d.ts rollup.  The problem is
    that the compiler's API makes it difficult to detect when this traversal leaves the working package
    (e.g. hops into the `node_modules` folder or compiler's runtime library).  That's why this file has special
    handling for each kind of import syntax.  The `export * from` construct is by far the most complicated form.

  - The `Span` class, which is a fairly lame but fairly effective utility for rewriting TypeScript source code
    while ignoring most of its meaning except for specific node types that we recognize.

  - The `AstReferenceResolver`:  Given a TSDoc declaration reference, this walks the the `AstSymbolTable` to
    find whatever it refers to.

- [src/enhancers](https://github.com/microsoft/rushstack/tree/master/apps/api-extractor/src/enhancers) -
  After the `Collector` has collected all the API objects and their metadata, we run a series of additional
  postprocessing stages called `enhancers`.  The current ones are `ValidationEnhancer` (which applies some
  API validation rules) and `DocCommentEnhancer` which tunes up the TSDoc comments, for example expanding
  the `@inheritDoc` references.

- [src/generators](https://github.com/microsoft/rushstack/tree/master/apps/api-extractor/src/generators) -
  This folder implements API Extractor's famous 3 output types:  `piReportGenerator`, `DtsRollupGenerator`,
  and `ApiModelGenerator`.

- [src/schemas](https://github.com/microsoft/rushstack/tree/master/apps/api-extractor/src/schemas) -
  This folder contains the `api-extractor init` template file, the JSON schema for **api-extractor.json**,
  and **api-extractor-defaults.json** which represents the default values for **api-extractor.json** settings.

