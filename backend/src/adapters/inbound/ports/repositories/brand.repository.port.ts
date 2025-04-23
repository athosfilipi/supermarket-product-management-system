import { Brand } from "../../../../domain/entities/brand.entity";
import { Brand as PrismaBrand } from "@prisma/client";
import { SearchRequestParams } from "@infra/http/types/types";

export interface BrandRepositoryPort {    
  findAll(params: SearchRequestParams): Promise<Brand[]>;
  create(brandData: Omit<PrismaBrand, "id">): Promise<Brand>;
}
