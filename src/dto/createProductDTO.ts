import { Decimal } from "@prisma/client/runtime";

export class CreateProductDTO {
  id?: number;
  name: string;
  description: string;
  price: Decimal;
  stock: number;
  category_id: number;
}
