import { booksDatabase } from "../database/database";
import { postBooksBook, Book, updateBook } from "../interface/interface";


export class BookServices {
    private id = 1;

    postBooks = (body: postBooksBook): Book => {
        const newBook: Book = {
            id: this.id++,
            ...body,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        booksDatabase.push(newBook);
        return newBook;
    }
    getBooks = (query?: string): Book[] => {
        if (query) {

            return booksDatabase.filter((book) => book.name.toLocaleLowerCase().includes(query));
        }
        return booksDatabase
    }
    retrieveBook = (id: number): Book | undefined => {
        return booksDatabase[id]
    }
    updateBook = (index: number, body: updateBook): Book | undefined => {
        booksDatabase[index] = {
            ...booksDatabase[index],
            ...body,
            updatedAt: new Date(),

        }
        return booksDatabase[index]
    }

    deleteBook = (id: number): void => {
        booksDatabase.splice(id, 1)
    }

}