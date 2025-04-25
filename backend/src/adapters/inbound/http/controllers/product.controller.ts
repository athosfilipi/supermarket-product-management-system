import {
  JsonController,
  Post,
  Get,
  Req,
  QueryParams,
  Body,
} from "routing-controllers";
import { Inject } from "typedi";
import { Request } from "express";

import { Product } from "@entities/product.entity";
import ProductService from "@application/services/product.service";
import { Service } from "typedi";
import { SearchRequestParams } from "@infra/http/types/types";
import { PaginatedResult } from "@domain/interfaces/pagination.interface";
import { CreateProductDto } from "@application/validators/product/create-product.dto";
@Service()
@JsonController("/products")
export class ProductController {
  constructor(
    @Inject()
    private readonly productService: ProductService
  ) {}

  @Post("/")
  async createProduct(@Req() req: Request, @Body() body: CreateProductDto) {
    try {
      const product: Product = await this.productService.create(body);
      return product;
    } catch (err: any) {
      if (err.code === "P2002") {
        return {
          error: "Produto com este nome já existe para essa marca.",
        };
      } else {
        return {
          error: "Erro ao criar produto",
        };
      }
    }
  }

  @Get("/")
  async findAll(
    @QueryParams() query: Record<keyof SearchRequestParams, string>
  ) {
    try {
      const { search, page, limit } = query;

      const products: PaginatedResult<Product> =
        await this.productService.findAll({
          page: page ? parseInt(page) : 1,
          limit: limit ? parseInt(limit) : 10,
          search: search ? search : "",
        });

      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return {
        message: "Failed to fetch products",
      };
    }
  }
}
