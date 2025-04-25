import {
  Middleware,
  ExpressErrorMiddlewareInterface,
} from "routing-controllers";
import { Request, Response, NextFunction } from "express";

import { Service } from "typedi";

@Service()
@Middleware({ type: "after" })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, req: Request, res: Response, next: NextFunction): void {
    if (res.headersSent) {
      new Error("Múltiplas respostas");
      return next(error);
    }

    const statusCode: number = error.httpCode || 500;
    const message: string = error.message || "Erro interno do servidor";

    res.status(statusCode).json({
      success: false,
      error: {
        message,
        // ...(process.env.NODE_ENV !== "production" && { stack: error.stack }),
      },
    });
  }
}
