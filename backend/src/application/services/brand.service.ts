import { BrandRepositoryPort } from "@ports/repositories/brand.repository.port";
import { Brand } from "@entities/brand.entity";

import { Inject, Service } from "typedi";
import { PrismaBrandRepository } from "@adapters/outbound/prisma/brand.repository";
import { SearchRequestParams } from "@infra/http/types/types";

@Service()
class BrandService {
  constructor(
    @Inject(() => PrismaBrandRepository)
    private readonly brandRepository: BrandRepositoryPort
  ) {}
  async findAll({
    page = 1,
    limit = 10,
    search = "",
  }: SearchRequestParams): Promise<Brand[]> {
    const brands = await this.brandRepository.findAll({
      page,
      limit,
      search,
    });

    return brands.length > 0 ? brands : [];
  }

  async create(data: { name: string }): Promise<Brand> {
    if (!data.name) {
      throw new Error("Brand name is required.");
    }

    const brand = await this.brandRepository.create(data);
    return brand;
  }
}

export default BrandService;
