import { Request, Response } from "express";
import BrandService from "../../../../application/services/brand.service";
import { Brand } from "../../../../domain/entities/brand.entity";
import {
  JsonController,
  Get,
  QueryParams,
  Req,
  Post,
  Body,
} from "routing-controllers";
import { Inject } from "typedi";
import { Service } from "typedi";
import { CreateBrandDto } from "@application/validators/Brand/create-brand.dto";

export interface SearchRequestParams {
  search?: string;
  page?: string;
  limit?: string;
}

@Service()
@JsonController("/brands")
export class BrandController {
  constructor(
    @Inject()
    private readonly brandService: BrandService
  ) {}

  @Get("/")
  async findAll(@QueryParams() query: SearchRequestParams) {
    try {
      const { search = "", page = "1", limit = "10" } = query;

      const pageNumber = parseInt(page, 10);
      const limitNumber = parseInt(limit, 10);

      if (isNaN(pageNumber)) {
        throw new Error("Invalid page number");
      }
      if (isNaN(limitNumber)) {
        throw new Error("Invalid limit number");
      }

      const brands: Brand[] = await this.brandService.findAll({
        page: pageNumber,
        limit: limitNumber,
        search: search,
      });

      return brands;
    } catch (error) {
      console.error("Error fetching brands:", error);
      return {
        message: "Failed to fetch brands",
      };
    }
  }

  @Post("/")
  async createBrand(@Req() req: Request, @Body() body: CreateBrandDto) {
    try {
      const brand: Brand = await this.brandService.create(body);
      return brand;
    } catch (err: any) {
      if (err.code === "P2002") {
        return {
          error: "Marca com este nome já existe.",
        };
      } else {
        return {
          error: "Erro ao criar marca",
        };
      }
    }
  }
}
