---
layout: page
title: ae-missing-getter
navigation_source: docs_nav
---

*"The property ___ has a setter but no getter."*

## Remarks

An TypeScript property is conventionally used to indicate an API that behaves similar to reading/writing a variable.
For example, style guides often recommend against usages such as:

- property getters that perform expensive/complex operations
- property getters that cause observable side-effects (e.g. advancing the stream pointer each time a property is read)
- property getters that throw exceptions

From this perspective, it would be very strange to have a property getter with no setter.  After assigning a value
to a variable, intuitively a developer will expect to be able to read it back.

Example:

```ts
/**
 * Represents a book from the catalog.
 * @public
 */
export class Book {
  private _title: string = "untitled";

  /**
   * Sets the title of the book.
   */
  // Error: (ae-missing-getter) The property "title" has a setter but no getter.
  public set title(value: string) {
    this._title = value;
  }
}

const book: Book = new Book();
book.title = "The Hobbit";
console.log("The title: " + book.title); // prints "The title: undefined"
```

This pattern is very likely a mistake, so API Extractor reports the `ae-missing-getter` error.

## How to fix

The simplest solution is to implement the property getter.  Note that the documentation goes on the getter;
the setter cannot have a doc comment:

```ts
/**
 * Represents a book from the catalog.
 * @public
 */
export class Book {
  private _title: string = "untitled";

  /**
   * Gets or sets the title of the book.
   */
  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }
}

const book: Book = new Book();
book.title = "The Hobbit";
console.log("Title: " + book.title); // prints "Title: The Hobbit"
```

Alternatively, if your API really needs to be a unidirectional assignment, then it's better designed as a method
instead of a property:

```ts
/**
 * Represents a book from the catalog.
 * @public
 */
export class Book {
  private _title: string = "untitled";

  /**
   * Sets the title of the book.
   */
  public setTitle(title: string): void {
    this._title = title;
  }
}
```

## See also

- [ae-setter-with-docs message]({% link pages/messages/ae-setter-with-docs.md %})
