import { CategoryRepository } from "./../repositories/categoryRepository";
import { Prisma } from "@prisma/client";

export class CategoryService {
  private readonly categoryRepository = new CategoryRepository();

  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findOne(id: number) {
    return this.categoryRepository.findOne(id);
  }

  async create(createCategoryDto: Prisma.CategoryCreateInput) {
    return this.categoryRepository.create(createCategoryDto);
  }

  async update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async delete(id: number) {
    return this.categoryRepository.delete(id);
  }
}
