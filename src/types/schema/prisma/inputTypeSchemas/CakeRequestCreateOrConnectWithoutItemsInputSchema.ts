import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestCreateWithoutItemsInputSchema } from './CakeRequestCreateWithoutItemsInputSchema';
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from './CakeRequestUncheckedCreateWithoutItemsInputSchema';

export const CakeRequestCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export default CakeRequestCreateOrConnectWithoutItemsInputSchema;
