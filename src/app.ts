import "express-async-errors";
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();
app.use(express.json());
app.use(router);

app.use(errorMiddleware);
export { app };
