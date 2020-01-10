---
layout: page
title: ae-missing-getter
navigation_source: docs_nav
---

*"The property ___ has a setter but no getter."*

## Remarks

TypeScript properties are conventionally used to indicate an API that behaves similar to reading or writing a variable.
For example, style guides often recommend:

- property getters shouldn't perform expensive/complex operations
- property getters shouldn't cause observable side-effects (e.g. reading the property moves a stream pointer forwards)
- property getters should avoid throwing exceptions

In the same way, it would be strange to declare a property getter without a setter.  After assigning a value
to a variable, intuitively a developer would expect to be able to read the assigned value.


Consider this example:

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

The above behavior is counterintuitive.  The missing setter is likely a mistake in the API design.
API Extractor reports the `ae-missing-getter` error.

## How to fix

The simplest solution is to implement the missing property getter.  Note that the getter's documentation describes
both operations; a property setter cannot have a doc comment:

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

Alternatively, if your API really needs to be a unidirectional operation, you should design it as a method instead
of a property:

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
