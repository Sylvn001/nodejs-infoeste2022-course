import { Prisma } from "@prisma/client";
import { db } from "../database/client";

export class CategoryRepository {
  async findAll() {
    return db.category.findMany();
  }
  async findOne(id: number) {
    return db.category.findFirst({ where: { id } });
  }
  async delete(id: number) {
    return db.category.delete({ where: { id } });
  }

  async create(createCategoryDto: Prisma.CategoryCreateInput) {
    return db.category.create({ data: createCategoryDto });
  }

  async update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return db.category.update({ where: { id }, data: updateCategoryDto });
  }
}
