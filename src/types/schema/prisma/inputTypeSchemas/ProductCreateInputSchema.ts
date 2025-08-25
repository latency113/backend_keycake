import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemCreateNestedManyWithoutProductInputSchema } from './OrderItemCreateNestedManyWithoutProductInputSchema';

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default ProductCreateInputSchema;
