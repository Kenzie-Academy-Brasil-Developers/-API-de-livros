import { Router } from "express";
import { BookControllers } from "../controllers/books.controllers";
import { isBookValid } from "../middlewares/IsBookValid.middleware";

export const booksRouter = Router();
const bookControllers = new BookControllers();
const isBookValidMiddlewares = new isBookValid();

booksRouter.post("/", isBookValidMiddlewares.verifyBookName, bookControllers.postBooks);
booksRouter.get("/", bookControllers.getBooks);
booksRouter.get("/:id", isBookValidMiddlewares.verifyBookId, bookControllers.getOne);
booksRouter.delete("/:id", isBookValidMiddlewares.verifyBookId, bookControllers.deleteBook)
booksRouter.patch("/:id", isBookValidMiddlewares.verifyBookName, isBookValidMiddlewares.verifyBookId, bookControllers.updateBook);




