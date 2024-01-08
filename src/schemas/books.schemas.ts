import { z } from "zod";

const bookSchema = z.object({
    id: z.number().positive().or(z.string()),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().nullish(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

const querySchema = z.object({
    search: z.string()
})

const bookCreateSchema = bookSchema.pick({
    name: true,
    pages: true,
    category: true,
});

const bookUpdateSchema = bookCreateSchema.partial();
const bookArraySchema = bookSchema.array();

export { bookSchema, bookCreateSchema, bookUpdateSchema, bookArraySchema, querySchema };




