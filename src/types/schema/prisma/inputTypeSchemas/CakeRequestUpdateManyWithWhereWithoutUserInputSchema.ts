import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestScalarWhereInputSchema } from './CakeRequestScalarWhereInputSchema';
import { CakeRequestUpdateManyMutationInputSchema } from './CakeRequestUpdateManyMutationInputSchema';
import { CakeRequestUncheckedUpdateManyWithoutUserInputSchema } from './CakeRequestUncheckedUpdateManyWithoutUserInputSchema';

export const CakeRequestUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateManyMutationInputSchema),z.lazy(() => CakeRequestUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default CakeRequestUpdateManyWithWhereWithoutUserInputSchema;
