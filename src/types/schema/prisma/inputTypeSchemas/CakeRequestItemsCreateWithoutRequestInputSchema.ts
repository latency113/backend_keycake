import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutItemsInputSchema } from './ProductCreateNestedOneWithoutItemsInputSchema';
import { OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema } from './OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema';

export const CakeRequestItemsCreateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutRequestInput> = z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema)
}).strict();

export default CakeRequestItemsCreateWithoutRequestInputSchema;
