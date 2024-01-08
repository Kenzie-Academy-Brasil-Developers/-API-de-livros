import { Router } from "express";
import { BookControllers } from "../controllers/books.controllers";
import { isBookValid } from "../middlewares/IsBookValid.middleware";
import { GlobalErrors } from "../errors/handleErrors.middleware";
import { bookCreateSchema, bookSchema, bookUpdateSchema } from "../schemas/books.schemas";
import { ValidateRequest } from "../middlewares/validateRequest";

export const booksRouter = Router();
const bookControllers = new BookControllers();
const isBookValidMiddlewares = new isBookValid();
const globalErrors = new GlobalErrors()

booksRouter.post("/", ValidateRequest.execute({ body: bookCreateSchema }), isBookValidMiddlewares.verifyBookName, bookControllers.postBooks);
booksRouter.get("/", bookControllers.getBooks);
booksRouter.get("/:id", isBookValidMiddlewares.verifyBookId, bookControllers.retrieveBook);
booksRouter.delete("/:id", isBookValidMiddlewares.verifyBookId, bookControllers.deleteBook)
booksRouter.patch("/:id", ValidateRequest.execute({ body: bookUpdateSchema }), isBookValidMiddlewares.verifyBookName, isBookValidMiddlewares.verifyBookId, bookControllers.updateBook);
