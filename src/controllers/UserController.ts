import { Response } from "express";
import { Request } from "express";

export class UserController {
  async findAll(req: Request, res: Response) {
    res.send([{ email: "teste@email.com", password: 123456 }]);
  }

  async findOne(req: Request, res: Response) {
    res.send({ email: "teste@email.com", password: 123456 });
  }

  async create(req: Request, res: Response) {
    res.send({ email: "teste@email.com", password: 123456 });
  }

  async update(req: Request, res: Response) {
    res.send({ email: "teste@email.com", password: 123456 });
  }

  async delete(req: Request, res: Response) {
    res.send({ email: "teste@email.com", password: 123456 });
  }
}
