import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateWithoutOrderItemsInputSchema } from './ProductCreateWithoutOrderItemsInputSchema';
import { ProductUncheckedCreateWithoutOrderItemsInputSchema } from './ProductUncheckedCreateWithoutOrderItemsInputSchema';
import { ProductCreateOrConnectWithoutOrderItemsInputSchema } from './ProductCreateOrConnectWithoutOrderItemsInputSchema';
import { ProductUpsertWithoutOrderItemsInputSchema } from './ProductUpsertWithoutOrderItemsInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema } from './ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema';
import { ProductUpdateWithoutOrderItemsInputSchema } from './ProductUpdateWithoutOrderItemsInputSchema';
import { ProductUncheckedUpdateWithoutOrderItemsInputSchema } from './ProductUncheckedUpdateWithoutOrderItemsInputSchema';

export const ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutOrderItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema),z.lazy(() => ProductUpdateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputSchema) ]).optional(),
}).strict();

export default ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema;
