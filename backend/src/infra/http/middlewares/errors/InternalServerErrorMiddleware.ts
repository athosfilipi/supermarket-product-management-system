import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";

@Middleware({ type: "after" })
@Service()
export class InternalServerErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, req: Request, res: Response, next: NextFunction): void {
    if (res.headersSent) {
      return next(error);
    }

    const statusCode: number = error.httpCode || 500;
    const message: string = error.message || "Internal Server Error. Something went wrong.";

    res.status(statusCode).json({
      status: "error",
      message,
      ...(process.env.NODE_ENV !== "production" && { stack: error.stack }),
    });
  }
}
