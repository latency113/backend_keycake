import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutProductInputSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductInputSchema';
import { CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema } from './CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema';

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default ProductUncheckedCreateInputSchema;
