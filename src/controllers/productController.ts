import { Prisma } from "@prisma/client";
import { Response, Request } from "express";
import { ProductService } from "../services/productService";

const productService = new ProductService();

export class ProductController {
  async findAll(req: Request, res: Response) {
    const products = await productService.findAll();
    return res.send(products);
  }

  async findOne(req: Request, res: Response) {
    const id = req.params.id;
    const product = await productService.findOne(+id);
    res.send(product);
  }

  async create(req: Request, res: Response) {
    const createproductDto: Prisma.ProductCreateInput = req.body;

    const product = await productService.create(createproductDto);

    res.send(product);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const updateproductDto = req.body;
    const product = await productService.update(+id, updateproductDto);
    res.send(product);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const product = await productService.delete(+id);
    res.send(product);
  }
}
