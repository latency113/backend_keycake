import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateWithoutItemsInputSchema } from './ProductCreateWithoutItemsInputSchema';
import { ProductUncheckedCreateWithoutItemsInputSchema } from './ProductUncheckedCreateWithoutItemsInputSchema';
import { ProductCreateOrConnectWithoutItemsInputSchema } from './ProductCreateOrConnectWithoutItemsInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';

export const ProductCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export default ProductCreateNestedOneWithoutItemsInputSchema;
