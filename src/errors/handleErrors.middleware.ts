import { NextFunction, Request, Response } from "express";
import { AppError } from "./appError";
import { ZodError } from "zod";
import { RequestSchema } from "../interface/interface";

export class GlobalErrors {
    handleErrors = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });
        }
        if (err instanceof ZodError) {
            return res.status(409).json(err)
        }
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    };
    validateBody = (schema: RequestSchema) => {
        return async (req: Request, res: Response, next: NextFunction) => {
            if (schema.params) {
                req.params = await schema.params.parseAsync(req.params)
            }
            if (schema.body) {
                req.body = await schema.body.parseAsync(req.body)
            }
            if (schema.query && Object.keys(req.query).length) {
                req.query = await schema.query.parseAsync(req.query)
            }
            return next()
        }
    }

}


