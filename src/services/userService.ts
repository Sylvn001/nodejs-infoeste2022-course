import { NotFound } from "../errors/not_found";
import { Prisma } from "@prisma/client";
import { BadRequest } from "../errors/bad_request";
import { UserEntity } from "../models/user";
import { UserRepository } from "../repositories/userRepository";
import { hashSync } from "bcrypt";
import { CreateUserDTO } from "../dto/createUserDTO";

export class UserService {
  private readonly userRepository = new UserRepository();

  async findAll() {
    return this.userRepository.findAll();
  }

  async findByEmail(email: string) {
    const user: UserEntity = await this.userRepository.findByEmail(email);
    return user;
  }

  async findOne(id: number) {
    const user: UserEntity = await this.userRepository.findOne(id);

    if (user) {
      return user;
    }
    throw new BadRequest("Not Found");
  }

  async create(createUserDto: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(
      createUserDto.email
    );

    if (userAlreadyExists) {
      throw new BadRequest("Email already exists");
    }

    createUserDto.password = hashSync(createUserDto.password, 10);

    return this.userRepository.create(createUserDto);
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    const userExists = await this.userRepository.findOne(id);

    if (!userExists) {
      throw new NotFound("User not exists");
    }

    if (updateUserDto.password) {
      updateUserDto.password = hashSync("" + updateUserDto.password, 10);
    }

    return this.userRepository.update(id, updateUserDto);
  }

  async delete(id: number) {
    const userExists = await this.userRepository.findOne(id);

    if (!userExists) {
      throw new NotFound("User not exists");
    }

    return this.userRepository.delete(id);
  }
}
