import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema } from './OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema';

export const CakeRequestItemsCreateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutRequestInput> = z.object({
  id: z.string().optional(),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema)
}).strict();

export default CakeRequestItemsCreateWithoutRequestInputSchema;
