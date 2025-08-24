import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductUpdateWithoutItemsInputSchema } from './ProductUpdateWithoutItemsInputSchema';
import { ProductUncheckedUpdateWithoutItemsInputSchema } from './ProductUncheckedUpdateWithoutItemsInputSchema';
import { ProductCreateWithoutItemsInputSchema } from './ProductCreateWithoutItemsInputSchema';
import { ProductUncheckedCreateWithoutItemsInputSchema } from './ProductUncheckedCreateWithoutItemsInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductUpsertWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutItemsInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export default ProductUpsertWithoutItemsInputSchema;
