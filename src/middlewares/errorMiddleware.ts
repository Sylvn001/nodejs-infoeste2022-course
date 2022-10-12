import { NotFound } from "./../errors/not_found";
import { BadRequest } from "./../errors/bad_request";
import { NextFunction, Response, Request } from "express";

export default (
  err: Error,
  request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (err instanceof BadRequest) {
    return response.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode,
    });
  }

  if (err instanceof NotFound) {
    return response.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode,
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`,
  });
};
