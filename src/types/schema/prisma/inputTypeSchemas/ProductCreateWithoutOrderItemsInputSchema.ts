import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProductCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number()
}).strict();

export default ProductCreateWithoutOrderItemsInputSchema;
