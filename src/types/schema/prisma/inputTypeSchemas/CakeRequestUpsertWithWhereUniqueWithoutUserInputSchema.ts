import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestUpdateWithoutUserInputSchema } from './CakeRequestUpdateWithoutUserInputSchema';
import { CakeRequestUncheckedUpdateWithoutUserInputSchema } from './CakeRequestUncheckedUpdateWithoutUserInputSchema';
import { CakeRequestCreateWithoutUserInputSchema } from './CakeRequestCreateWithoutUserInputSchema';
import { CakeRequestUncheckedCreateWithoutUserInputSchema } from './CakeRequestUncheckedCreateWithoutUserInputSchema';

export const CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema;
