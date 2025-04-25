import {
    Middleware,
    ExpressErrorMiddlewareInterface,
    HttpError,
    BadRequestError,
  } from "routing-controllers";
  import { Request, Response, NextFunction } from "express";
  import { ValidationError } from "class-validator";
  import { Service } from "typedi";

  @Middleware({ type: "after" })
  @Service()
  export class GlobalErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
    error(error: any, req: Request, res: Response, next: NextFunction) {
      // Validação customizada para erros do class-validator
      const isValidationError =
        error instanceof BadRequestError &&
        Array.isArray((error as any).errors) &&
        (error as any).errors[0] instanceof ValidationError;
  
      if (isValidationError) {
        const validationErrors = (error as any).errors as ValidationError[];
  
        const formattedErrors = validationErrors.map((err) => ({
          field: err.property,
          errors: Object.values(err.constraints || {}),
        }));
  
        return res.status(400).json({
          message: "Erro de validação nos dados enviados",
          details: formattedErrors,
        });
      }
  
      // Outros erros HTTP padronizados
      if (error instanceof HttpError) {
        return res.status(error.httpCode).json({
          name: error.name,
          message: error.message,
        });
      }
  
      // Fallback para erros não tratados
      return res.status(500).json({
        message: "Erro interno no servidor",
        error: error?.message || error,
      });
    }
  }
  