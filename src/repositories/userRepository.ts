import { db } from "../database/client";
import { Prisma } from "@prisma/client";

export class UserRepository {
  async findAll() {
    return db.user.findMany();
  }

  async findByEmail(email: string) {
    return db.user.findUnique({ where: { email } });
  }

  async findOne(id: number) {
    return db.user.findFirst({ where: { id } });
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    return db.user.create({ data: createUserDto });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return db.user.update({ where: { id }, data: updateUserDto });
  }

  async delete(id: number) {
    return db.user.delete({ where: { id } });
  }
}
