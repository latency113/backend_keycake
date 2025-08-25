import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutItemsInputSchema } from './ProductCreateNestedOneWithoutItemsInputSchema';
import { CakeRequestCreateNestedOneWithoutItemsInputSchema } from './CakeRequestCreateNestedOneWithoutItemsInputSchema';
import { OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema } from './OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema';

export const CakeRequestItemsCreateInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateInput> = z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema)
}).strict();

export default CakeRequestItemsCreateInputSchema;
