import { Prisma } from "@prisma/client";
import { db } from "../database/client";

export class ProductRepository {
  async findAll() {
    return db.product.findMany({
      include: { Category: true },
    });
  }

  async findOne(id: number) {
    return db.product.findFirst({ where: { id }, include: { Category: true } });
  }

  async delete(id: number) {
    return db.product.delete({ where: { id } });
  }

  async create(createProductDto: Prisma.ProductCreateInput) {
    return db.product.create({ data: createProductDto });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return db.product.update({ where: { id }, data: updateProductDto });
  }
}
