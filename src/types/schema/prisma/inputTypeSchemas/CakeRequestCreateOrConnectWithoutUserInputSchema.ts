import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestCreateWithoutUserInputSchema } from './CakeRequestCreateWithoutUserInputSchema';
import { CakeRequestUncheckedCreateWithoutUserInputSchema } from './CakeRequestUncheckedCreateWithoutUserInputSchema';

export const CakeRequestCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default CakeRequestCreateOrConnectWithoutUserInputSchema;
