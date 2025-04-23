import { ProductRepositoryPort } from "@ports/repositories/product.repository.port";
import { Product } from "@entities/product.entity";
import { Brand } from "@domain/entities/brand.entity";
import { Prisma } from "@prisma/client";
import { Inject, Service } from "typedi";
import { PrismaProductRepository } from "@adapters/outbound/prisma/product.repository";
import { SearchRequestParams } from "@infra/http/types/types";
import { PaginatedResult } from "@domain/interfaces/pagination.interface";

interface IProductService {
  findAll(params: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<PaginatedResult<Product>>;
  create(data: {
    name: string;
    price: number;
    description?: string | null;
    image?: string | null;
    brandId: string;
  }): Promise<Product>;
}

@Service()
class ProductService implements IProductService {
  constructor(
    @Inject(() => PrismaProductRepository)
    private readonly productRepository: ProductRepositoryPort
  ) {}

  async findAll({
    page = 1,
    limit = 10,
    search = "",
  }: SearchRequestParams): Promise<PaginatedResult<Product>> {
    const products: PaginatedResult<Product> =
      await this.productRepository.findAll({
        page,
        limit,
        search,
      });
    return products;
  }

  async create(data: {
    name: string;
    price: number;
    description?: string | null;
    image?: string | null;
    brandId: string;
  }): Promise<Product> {
    if (!data.name || data.price <= 0) {
      throw new Error(
        "Product name and price are required and price must be positive."
      );
    }

    const brand = new Brand(data.brandId, "Brand Name Placeholder");

    const product = new Product(
      "",
      data.name,
      data.price,
      data.description ?? null,
      data.image ?? null,
      data.brandId,
      brand
    );

    try {
      const createdProduct = await this.productRepository.create({
        name: product.name,
        price: new Prisma.Decimal(product.price.toString()),
        description: product.description,
        image: product.image,
        brandId: product.brandId,
        Brand: {
          id: brand.id,
          name: brand.name,
        },
      });

      if (!createdProduct) {
        throw new Error("Failed to create product");
      }

      return createdProduct;
    } catch (err: unknown) {
      const typedError = err as Error;
      throw new Error(`Error creating product: ${typedError.message}`);
    }
  }
}

export default ProductService;
