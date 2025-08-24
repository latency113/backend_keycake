import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
}).strict()

export default ProductIncludeSchema;
