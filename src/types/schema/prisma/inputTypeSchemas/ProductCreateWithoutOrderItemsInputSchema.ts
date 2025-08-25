import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateNestedManyWithoutProductInputSchema } from './CakeRequestItemsCreateNestedManyWithoutProductInputSchema';

export const ProductCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default ProductCreateWithoutOrderItemsInputSchema;
