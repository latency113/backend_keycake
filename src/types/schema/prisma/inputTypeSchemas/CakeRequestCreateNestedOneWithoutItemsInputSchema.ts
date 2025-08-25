import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateWithoutItemsInputSchema } from './CakeRequestCreateWithoutItemsInputSchema';
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from './CakeRequestUncheckedCreateWithoutItemsInputSchema';
import { CakeRequestCreateOrConnectWithoutItemsInputSchema } from './CakeRequestCreateOrConnectWithoutItemsInputSchema';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';

export const CakeRequestCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional()
}).strict();

export default CakeRequestCreateNestedOneWithoutItemsInputSchema;
