import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutItemsInputSchema } from './ProductCreateNestedOneWithoutItemsInputSchema';
import { CakeRequestCreateNestedOneWithoutItemsInputSchema } from './CakeRequestCreateNestedOneWithoutItemsInputSchema';

export const CakeRequestItemsCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutOrderItemInput> = z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema)
}).strict();

export default CakeRequestItemsCreateWithoutOrderItemInputSchema;
