import { CreateUserDTO } from "./../dto/createUserDTO";
import { Prisma } from "@prisma/client";
import { Response, Request } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export class UserController {
  async findAll(req: Request, res: Response) {
    const users = await userService.findAll();
    return res.send(users);
  }

  async findOne(req: Request, res: Response) {
    const id = req.params.id;
    const user = await userService.findOne(+id);
    res.send(user);
  }

  async create(req: Request, res: Response) {
    const createUserDto: CreateUserDTO = req.body;

    const user = await userService.create(createUserDto);

    res.send(user);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const updateUserDto = req.body;
    const user = await userService.update(+id, updateUserDto);
    res.send(user);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const user = await userService.delete(+id);
    res.send(user);
  }
}
