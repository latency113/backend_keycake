import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutItemsInputSchema } from './ProductCreateWithoutItemsInputSchema';
import { ProductUncheckedCreateWithoutItemsInputSchema } from './ProductUncheckedCreateWithoutItemsInputSchema';

export const ProductCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export default ProductCreateOrConnectWithoutItemsInputSchema;
