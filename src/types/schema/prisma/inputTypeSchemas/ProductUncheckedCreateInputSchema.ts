import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutProductInputSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductInputSchema';

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default ProductUncheckedCreateInputSchema;
