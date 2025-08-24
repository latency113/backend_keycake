import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestUpdateWithoutItemsInputSchema } from './CakeRequestUpdateWithoutItemsInputSchema';
import { CakeRequestUncheckedUpdateWithoutItemsInputSchema } from './CakeRequestUncheckedUpdateWithoutItemsInputSchema';
import { CakeRequestCreateWithoutItemsInputSchema } from './CakeRequestCreateWithoutItemsInputSchema';
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from './CakeRequestUncheckedCreateWithoutItemsInputSchema';
import { CakeRequestWhereInputSchema } from './CakeRequestWhereInputSchema';

export const CakeRequestUpsertWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithoutItemsInput> = z.object({
  update: z.union([ z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => CakeRequestWhereInputSchema).optional()
}).strict();

export default CakeRequestUpsertWithoutItemsInputSchema;
