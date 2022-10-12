import { UserEntity } from "../models/user";
import { UserRepository } from "./../repositories/userRepository";
import { Prisma } from "@prisma/client";
import { NotFound } from "../errors/not_found";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthService {
  private readonly userRepository = new UserRepository();

  async verifyCredentials(loginUserDto: Prisma.UserCreateInput) {
    const { password, email } = loginUserDto;

    const user: UserEntity = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFound("User Not Authorized");
    }

    if (compareSync(password, user.password)) {
      return user;
    }

    throw new NotFound("User Not Authorized");
  }

  async generateToken(user: UserEntity) {
    const token = sign({ id: user.id, email: user.email }, "121ed1d");

    return token;
  }

  async login(loginUserDto: Prisma.UserCreateInput) {
    const validUser = await this.verifyCredentials(loginUserDto);

    const token = await this.generateToken(validUser);

    return token;
  }
}
