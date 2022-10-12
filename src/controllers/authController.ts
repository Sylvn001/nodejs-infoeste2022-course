import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    const loginDto = req.body;

    const token = await authService.login(loginDto);

    res.send(token);
  }
}
