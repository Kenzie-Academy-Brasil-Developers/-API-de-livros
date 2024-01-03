export interface IBook {
    id: number;
    name: string;
    pages: number;
    category?: string | undefined;
    postBooksdAt: Date;
    updateBookdAt: Date;


}
export type postBooksBook = Omit<IBook, "id" | "postBooksdAt" | "updateBookdAt">;
export type updateBook = Partial<postBooksBook>

