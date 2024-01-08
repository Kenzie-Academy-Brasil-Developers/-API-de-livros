import { Request, Response } from "express";
import { BookServices } from "../services/books.services";

export class BookControllers {

    private bookServices = new BookServices();

    postBooks = (req: Request, res: Response): Response => {
        return res.status(201).json(this.bookServices.postBooks(req.body))
    };


    getBooks = (req: Request, res: Response): Response => {

        return res.status(200).json(this.bookServices.getBooks(req.query.search as string));
    }

    retrieveBook = (req: Request, res: Response): Response => {
        return res.status(200).json(this.bookServices.retrieveBook(res.locals.bookIndex));

    }
    updateBook = (req: Request, res: Response): Response => {
        return res.status(200).json(this.bookServices.updateBook(res.locals.bookIndex, req.body));


    }
    deleteBook = (req: Request, res: Response): Response => {
        this.bookServices.deleteBook(res.locals.bookIndex);
        return res.status(204).send();
    };

}






