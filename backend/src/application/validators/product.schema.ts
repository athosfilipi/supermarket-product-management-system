// import { z } from 'zod';

// export const productSchema = z.object({
//   name: z.string().min(1),
//   price: z.number().positive(),
//   description: z.string().optional(),
//   image: z.string().optional(),
//   brandId: z.string().uuid(),
// });

// export const queryProductSchema = z.object({
//   search: z.string().optional(),
//   page: z.string().optional().transform((val) => parseInt(val || '1')),
//   limit: z.string().optional().transform((val) => parseInt(val || '10')),
// });
