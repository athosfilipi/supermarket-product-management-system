import { PaginatedResult } from "@domain/interfaces/pagination.interface";
import { Product } from "@entities/product.entity";
import { SearchRequestParams } from "@infra/http/types/types";
import { Product as PrismaProduct } from "@prisma/client";

export interface ProductRepositoryPort {    
  findAll(params: SearchRequestParams): Promise<PaginatedResult<Product>>;

  create(
    productData: Omit<PrismaProduct, "id"> & {
      Brand: { id: string; name: string };
    }
  ): Promise<Product>;
}
