import { Prisma } from "@prisma/client";
import { ProductRepository } from "../repositories/productsRepository";

export class ProductService {
  private readonly productRepository = new ProductRepository();

  async findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.productRepository.create(createProductDto);
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.productRepository.update(id, updateProductDto);
  }

  async delete(id: number) {
    return this.productRepository.delete(id);
  }
}
