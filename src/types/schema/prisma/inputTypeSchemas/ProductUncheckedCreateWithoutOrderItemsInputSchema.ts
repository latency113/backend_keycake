import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema } from './CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema';

export const ProductUncheckedCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default ProductUncheckedCreateWithoutOrderItemsInputSchema;
