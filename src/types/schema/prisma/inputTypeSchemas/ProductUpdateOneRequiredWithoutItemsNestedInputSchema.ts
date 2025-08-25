import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateWithoutItemsInputSchema } from './ProductCreateWithoutItemsInputSchema';
import { ProductUncheckedCreateWithoutItemsInputSchema } from './ProductUncheckedCreateWithoutItemsInputSchema';
import { ProductCreateOrConnectWithoutItemsInputSchema } from './ProductCreateOrConnectWithoutItemsInputSchema';
import { ProductUpsertWithoutItemsInputSchema } from './ProductUpsertWithoutItemsInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutItemsInputSchema } from './ProductUpdateToOneWithWhereWithoutItemsInputSchema';
import { ProductUpdateWithoutItemsInputSchema } from './ProductUpdateWithoutItemsInputSchema';
import { ProductUncheckedUpdateWithoutItemsInputSchema } from './ProductUncheckedUpdateWithoutItemsInputSchema';

export const ProductUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => ProductUpdateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export default ProductUpdateOneRequiredWithoutItemsNestedInputSchema;
