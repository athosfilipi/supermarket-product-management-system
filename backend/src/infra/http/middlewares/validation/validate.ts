// import { Request, Response, NextFunction } from 'express';
// import { ZodSchema } from 'zod';

// export const validate = (schema: ZodSchema<any>, source: 'body' | 'query' = 'body') => {
//   return (req: Request, res: Response, next: NextFunction): void => {
//     const result = schema.safeParse(req[source]);
    
//     if (!result.success) {
//       res.status(400).json({ error: result.error.flatten() });
//       return;
//     }

//     req[source] = result.data;
//     next();
//   };
// };