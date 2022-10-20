import { CreateProductDTO } from "./../dto/createProductDTO";
import { Prisma } from "@prisma/client";
import { db } from "../database/client";
import { UpdateProductDTO } from "../dto/updateProductDTO";
import { ProductEntity } from "../models/product";

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

  async create(createProductDto: CreateProductDTO) {
    const { category_id } = createProductDto;
    delete createProductDto.category_id;
    const data: Prisma.ProductCreateInput = {
      ...createProductDto,
      Category: {
        connect: {
          id: category_id,
        },
      },
    };
    return db.product.create({ data, include: { Category: true } });
  }

  async update(id: number, updateProductDto: UpdateProductDTO) {
    const { category_id } = updateProductDto;
    delete updateProductDto.category_id;

    const data: Prisma.ProductUpdateInput = {
      ...updateProductDto,
      Category: {
        connect: {
          id: category_id,
        },
      },
    };

    return db.product.update({
      where: { id },
      data,
      include: { Category: true },
    });
  }
}
