import { Container } from "typedi";
import { createExpressServer, useContainer } from "routing-controllers";
import { BrandController } from "@adapters/inbound/http/controllers/brand.controller";
import { ProductController } from "@adapters/inbound/http/controllers/product.controller";
import { ErrorHandlerMiddleware } from "@middlewares/errors/error-handler.middleware";
import { InternalServerErrorMiddleware } from "@middlewares/errors/InternalServerErrorMiddleware";
import { NotFoundErrorMiddleware } from "@middlewares/errors/NotFoundErrorMiddleware";

export class Routes {
  private routerV1: any;
  public controllers = [BrandController, ProductController];

  constructor() {
    useContainer(Container);

    this.routerV1 = createExpressServer({
      routePrefix: "/api/v1",
      controllers: this.controllers,
      middlewares: [
        NotFoundErrorMiddleware,
        InternalServerErrorMiddleware,
        ErrorHandlerMiddleware,
      ],
      interceptors: [],
      development: true,
      validation: true,
    });
  }

  public getRouterV1(): any {
    return this.routerV1;
  }
}
