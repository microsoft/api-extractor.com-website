---
layout: page
title: Generating API docs
navigation_source: docs_nav
---


API Extractor produces API JSON files that can be used to generate an API reference web site.

## Basic scenario

Suppose you simply want to publish API documentation on your GitHub web site, as a collection of [markdown](https://en.wikipedia.org/wiki/Markdown) files (*.md). The steps are pretty straightforward:

1. Install the [api-documenter tool](https://www.npmjs.com/package/@microsoft/api-documenter) from NPM, by running this command:

    ```
    npm install -g @microsoft/api-documenter
    ```

2. Execute API Extractor on your packages to produce a collection of API JSON files

3. Copy your *.api.json files into an input folder, for example:

   - `C:\MyDocs\input\`      <-- *.api.json inputs go here
   - `C:\MyDocs\markdown\`   <-- *.md output files will go here

4. Invoke the **api-documenter** tool like this:

    ```
    cd C:\MyDocs

    api-documenter markdown
    ```

   You can customize the folders using parameters such as `--input-folder` and `--output-folder`.  See `api-documenter --help` for help.

5. Make sure GitHub pages is enabled for your repo, then add the markdown files to your *gh-pages* branch.  For example:

   **Branch**: [https://github.com/Microsoft/web-build-tools/tree/gh-pages/api](https://github.com/Microsoft/web-build-tools/tree/gh-pages/api)

   **Web site**: [https://microsoft.github.io/web-build-tools/api/](https://microsoft.github.io/web-build-tools/api/)


The overall pipeline looks like this:

> **api-extractor** --> *example.api.json file* --> **api-documenter** --> *\*.md files* --> **GitHub** --> *web site*


## Custom scenarios

For more advanced scenarios, you can customize the **api-documenter** tool itself.  For example, Microsoft's enterprise documentation pipeline uses the [DocFX](https://github.com/dotnet/docfx) engine, which accepts API definitions using a YAML format.  The pipeline looks like this:

> **api-extractor** --> *example.api.json file* --> **api-documenter** --> *\*.yml files* --> **DocFX engine** --> *web site*

If your company uses a proprietary pipeline like this, you can use the **api-documenter** as a code sample.  The code is in this folder:

   [web-build-tools/apps/api-documenter](https://github.com/Microsoft/web-build-tools/tree/master/apps/api-documenter)

We have found that the requirements for advanced scenarios can vary wildly (e.g. HTML output, or YAML files, or special navigation menu layouts, etc).  Rather than trying to invent an elaborate system of templates and config files to anticipate every potential need, we have instead designed the **api-documenter** source code to be as simple and readable as possible.  It is published under an MIT license.  Feel free to fork it and hack it up however you like.  If your changes are general improvements, please open a pull request and contribute them back to the mainline project.

