import { Brand } from "./brand.entity";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description?: string | null;
  image?: string | null;
  brandId: string;
  brand: Brand;
}

export class Product implements IProduct {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly description: string | null,
    public readonly image: string | null,
    public readonly brandId: string,
    public readonly brand: Brand
  ) {}
}
