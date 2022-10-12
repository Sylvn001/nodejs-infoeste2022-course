import { Prisma } from "@prisma/client";
import { Response, Request } from "express";
import { CategoryService } from "../services/categoryService";

const categoryService = new CategoryService();

export class CategoryController {
  async findAll(req: Request, res: Response) {
    const categorys = await categoryService.findAll();
    return res.send(categorys);
  }

  async findOne(req: Request, res: Response) {
    const id = req.params.id;
    const category = await categoryService.findOne(+id);
    res.send(category);
  }

  async create(req: Request, res: Response) {
    const createcategoryDto: Prisma.CategoryCreateInput = req.body;

    const category = await categoryService.create(createcategoryDto);

    res.send(category);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const updatecategoryDto = req.body;
    const category = await categoryService.update(+id, updatecategoryDto);
    res.send(category);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const category = await categoryService.delete(+id);
    res.send(category);
  }
}
