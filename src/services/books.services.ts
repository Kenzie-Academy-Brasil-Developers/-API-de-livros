import { booksDatabase } from "../database/database";
import { postBooksBook, IBook, updateBook } from "../interface/interface";


export class BookServices {
    private id = 1;

    postBooks = (body: postBooksBook): IBook => {
        const newBook: IBook = {
            id: this.id++,
            ...body,
            postBooksdAt: new Date(),
            updateBookdAt: new Date(),
        };
        booksDatabase.push(newBook);
        return newBook;
    }
    getBooks = (): IBook[] => {
        return booksDatabase;
    }
    getOne = (id: number): IBook | undefined => {
        return booksDatabase[id]
    }
    deleteBook = (id: number): void => {
        booksDatabase.splice(id, 1)
    }
    updateBook = (index: number, body: updateBook): IBook => {
        booksDatabase[index] = {
            ...booksDatabase[index],
            ...body,
        }
        return booksDatabase[index]
    }

}
