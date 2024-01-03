import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import { GlobalErrors } from "./errors/handleErrors.middleware";

export const app = express();
const globalErrors = new GlobalErrors()
app.use(json());

app.use("/books", booksRouter)

app.use(globalErrors.handleErrors)