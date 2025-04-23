import { Product as PrismaProduct, Prisma } from "@prisma/client";
import { ProductRepositoryPort } from "../../inbound/ports/repositories/product.repository.port";
import { PrismaService } from "@application/services/PrismaService";
import { Service } from "typedi";
import { SearchRequestParams } from "@infra/http/types/types";
import { Brand, Product } from "@entities/index";
import { v4 as uuidv4 } from "uuid";
import { PaginatedResult } from "@domain/interfaces/pagination.interface";

type BrandParams = { brand: { id: string; name: string } };

type ProductRequestParams = PrismaProduct & BrandParams;
@Service()
export class PrismaProductRepository implements ProductRepositoryPort {
  private prisma: PrismaService;
  private productRepository: Prisma.ProductDelegate;

  constructor(prismaService: PrismaService) {
    this.prisma = prismaService;
    this.productRepository = this.prisma.client.product;
  }
  public mapToProductEntities(data: ProductRequestParams[]): Product[] {
    return data.map(
      (item) =>
        new Product(
          item.id ?? uuidv4(),
          item.name,
          item.price ? item.price.toNumber() : 0,
          item.description ?? "",
          item.image ?? "",
          item.brandId,
          new Brand(item.brand.id, item.brand.name)
        )
    );
  }

  async findAll({
    page = 1,
    limit = 10,
    search = "",
  }: SearchRequestParams): Promise<PaginatedResult<Product>> {
    try {
      const skip = (page - 1) * limit;

      const [data, total] = await this.prisma.client.$transaction([
        this.productRepository.findMany({
          where: {
            OR: [
              { name: { contains: search } },
              { description: { contains: search } },
              { id: { contains: search } },
              {
                brand: {
                  is: {
                    name: { contains: search },
                  },
                },
              },
            ],
          },
          skip,
          take: limit,
          include: {
            brand: true,
          },
          orderBy: {
            name: "asc",
          },
        }),
        this.productRepository.count({
          where: {
            OR: [
              { name: { contains: search } },
              { description: { contains: search } },
              { id: { contains: search } },
              {
                brand: {
                  is: {
                    name: { contains: search },
                  },
                },
              },
            ],
          },
        }),
      ]);

      const mappedData = this.mapToProductEntities(data);
      const totalPages = Math.ceil(total / limit);

      return {
        data: mappedData,
        total,
        page,
        limit,
        totalPages,
      };
    } catch (error) {
      console.error("Erro ao buscar os produtos com paginação:", error);
      throw new Error("Erro ao buscar os produtos");
    }
  }

  async create(
    productData: Omit<PrismaProduct, "id"> & {
      Brand: { id: string; name: string };
    }
  ): Promise<Product> {
    try {
      const product = await this.productRepository.create({
        data: {
          id: uuidv4(),
          name: productData.name,
          price: productData.price,
          description: productData.description ?? null,
          image: productData.image ?? null,
          brand: {
            connect: {
              id: productData.brandId,
            },
          },
        },
        include: {
          brand: true,
        },
      });

      const [mappedProduct] = this.mapToProductEntities([product]);
      return mappedProduct;
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
      throw new Error("Erro ao criar o produto");
    }
  }
}
