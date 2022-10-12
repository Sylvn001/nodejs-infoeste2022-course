import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
export class ProductEntity implements Product {
  id: number;
  name: string;
  description: string;
  price: Decimal;
  stock: number;
  category_id: number;
}
