import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/appError";
import { Book } from "../interface/interface";

export class isBookValid {
    verifyBookId = (req: Request, res: Response, next: NextFunction): void => {
        const bookId = Number(req.params.id);
        const index = booksDatabase.findIndex((book) => book.id === bookId);

        if (index === -1) {
            throw new AppError(404, "Book not found.");
        }

        res.locals.bookIndex = index;
        return next();
    }

    verifyBookName = (
        req: Request, res: Response, next: NextFunction
    ): void => {
        const { name } = req.body;
        const existingBookWithSameName: Book | undefined = booksDatabase.find(
            (book) => book.name === name
        );

        if (existingBookWithSameName) {
            throw new AppError(409, "Book already registered.");
        }

        return next();
    }
}

