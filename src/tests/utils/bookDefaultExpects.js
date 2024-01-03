import { expect } from "vitest";

export const bookDefaultExpects = (book) => {
   const date = new Date();
   const year = date.getFullYear();

   expect(book).toBeTypeOf("object");

   expect(book.id).toBeDefined();
   expect(book.id).toBeTypeOf("number");

   expect(book.name).toBeDefined();
   expect(book.name).toBeTypeOf("string");

   expect(book.pages).toBeDefined();
   expect(book.pages).toBeTypeOf("number");

   expect(book.postBooksdAt).toBeDefined();
   expect(String(book.postBooksdAt)).toContain(year);

   expect(book.updateBookdAt).toBeDefined();
   expect(String(book.postBooksdAt)).toContain(year);
};
