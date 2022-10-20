import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../errors/unathourized";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function UserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Unauthorized("Token Missing");
  }
  // Bearer jdopwijdlasjdopk123221-jdsaiofjiowopfk13-4jfopsjoisa
  // [0] = Bearer
  // [1] = token

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, process.env.SECRET) as IPayload;
    request.id_user = sub;

    console.log(sub);
  } catch (err) {
    throw new Unauthorized("Invalid Token", 401);
  }
}
