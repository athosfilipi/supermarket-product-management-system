import { Request, Response, NextFunction } from "express";
import { Middleware } from "routing-controllers";
import { ExpressErrorMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";

@Service()
@Middleware({ type: "before" })
export class NotFoundErrorMiddleware
  implements ExpressErrorMiddlewareInterface
{
  error(error: any, req: Request, res: Response, next: NextFunction): void {
    if (!res.headersSent) {
      res.status(404).json({
        status: "error",
        message: `Route ${req.originalUrl} not found`,
      });
    } else {
      next(error);
    }
  }
}
