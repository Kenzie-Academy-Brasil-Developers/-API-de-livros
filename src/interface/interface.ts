import { AnyZodObject, z } from "zod";
import { bookArraySchema, bookCreateSchema, bookSchema, bookUpdateSchema, querySchema } from "../schemas/books.schemas";

export type Book = z.infer<typeof bookSchema>
export type postBooksBook = z.infer<typeof bookCreateSchema>
export type updateBook = z.infer<typeof bookUpdateSchema>
export type bookArray = z.infer<typeof bookArraySchema>
export type querySchema = z.infer<typeof querySchema>

export interface RequestSchema {
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;

}

