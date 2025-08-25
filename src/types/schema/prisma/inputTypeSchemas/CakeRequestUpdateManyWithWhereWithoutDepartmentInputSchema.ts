import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestScalarWhereInputSchema } from './CakeRequestScalarWhereInputSchema';
import { CakeRequestUpdateManyMutationInputSchema } from './CakeRequestUpdateManyMutationInputSchema';
import { CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema } from './CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema';

export const CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateManyMutationInputSchema),z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema) ]),
}).strict();

export default CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema;
