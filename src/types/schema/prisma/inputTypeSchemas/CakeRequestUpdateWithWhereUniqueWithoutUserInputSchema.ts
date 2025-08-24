import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestUpdateWithoutUserInputSchema } from './CakeRequestUpdateWithoutUserInputSchema';
import { CakeRequestUncheckedUpdateWithoutUserInputSchema } from './CakeRequestUncheckedUpdateWithoutUserInputSchema';

export const CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema;
