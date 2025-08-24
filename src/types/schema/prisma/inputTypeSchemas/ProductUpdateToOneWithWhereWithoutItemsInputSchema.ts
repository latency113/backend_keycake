import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutItemsInputSchema } from './ProductUpdateWithoutItemsInputSchema';
import { ProductUncheckedUpdateWithoutItemsInputSchema } from './ProductUncheckedUpdateWithoutItemsInputSchema';

export const ProductUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export default ProductUpdateToOneWithWhereWithoutItemsInputSchema;
