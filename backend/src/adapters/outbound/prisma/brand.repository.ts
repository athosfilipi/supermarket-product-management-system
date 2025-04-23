import { Prisma } from "@prisma/client";
import { BrandRepositoryPort } from "../../inbound/ports/repositories/brand.repository.port";
import { Brand } from "../../../domain/entities/brand.entity";
import { Brand as PrismaBrand } from "@prisma/client";
import { Service } from "typedi";
import { PrismaService } from "@application/services/PrismaService";
import { SearchRequestParams } from "@infra/http/types/types";
import { v4 as uuidv4 } from 'uuid';
@Service()
export class PrismaBrandRepository implements BrandRepositoryPort {
  private prisma: PrismaService;
  private brandRepository: Prisma.BrandDelegate;

  constructor(prismaService: PrismaService) {
    this.prisma = prismaService;
    this.brandRepository = this.prisma.client.brand;
  }

  async listBrands(): Promise<Brand[]> {
    try {
      return await this.brandRepository.findMany();
    } catch (error) {
      console.error("Erro ao listar as marcas:", error);
      throw new Error("Erro ao buscar marcas");
    }
  }
  async findAll({
    page = 1,
    limit = 10,
    search = "",
  }: SearchRequestParams): Promise<Brand[]> {
    try {
      const skip = (page - 1) * limit;      
      const data = await this.brandRepository.findMany({
        where: {
          OR: [
            {
              name: { contains: search },
            },
            {
              id: { contains: search },
            },
          ],
        },
        skip,
        take: limit,
        orderBy: {
          name: "asc",
        },
      });

      return data.map((d: Brand) => new Brand(d.id, d.name));
    } catch (error) {
      console.error("Erro ao buscar todas as marcas:", error);
      throw new Error("Erro ao buscar todas as marcas");
    }
  }
  async create(brandData: PrismaBrand): Promise<Brand> {
    const brand = await this.brandRepository.create({
      data: {
        ...brandData,
        id: brandData.id ?? uuidv4(),
      },
    });
    return new Brand(brand.id, brand.name);
  }
}
