import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateWithoutItemsInputSchema } from './CakeRequestCreateWithoutItemsInputSchema';
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from './CakeRequestUncheckedCreateWithoutItemsInputSchema';
import { CakeRequestCreateOrConnectWithoutItemsInputSchema } from './CakeRequestCreateOrConnectWithoutItemsInputSchema';
import { CakeRequestUpsertWithoutItemsInputSchema } from './CakeRequestUpsertWithoutItemsInputSchema';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema } from './CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema';
import { CakeRequestUpdateWithoutItemsInputSchema } from './CakeRequestUpdateWithoutItemsInputSchema';
import { CakeRequestUncheckedUpdateWithoutItemsInputSchema } from './CakeRequestUncheckedUpdateWithoutItemsInputSchema';

export const CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => CakeRequestUpsertWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export default CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema;
