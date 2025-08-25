import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProductUncheckedCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number()
}).strict();

export default ProductUncheckedCreateWithoutOrderItemsInputSchema;
