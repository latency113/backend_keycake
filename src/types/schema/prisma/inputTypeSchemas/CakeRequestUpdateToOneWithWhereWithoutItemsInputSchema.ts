import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereInputSchema } from './CakeRequestWhereInputSchema';
import { CakeRequestUpdateWithoutItemsInputSchema } from './CakeRequestUpdateWithoutItemsInputSchema';
import { CakeRequestUncheckedUpdateWithoutItemsInputSchema } from './CakeRequestUncheckedUpdateWithoutItemsInputSchema';

export const CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpdateToOneWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export default CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema;
