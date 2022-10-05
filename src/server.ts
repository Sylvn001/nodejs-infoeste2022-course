import express, { Request, Response } from "express";

const server = express();

server.get("/", (request: Request, response: Response) => {
  return response.send("Hello World!");
});

export default server;
