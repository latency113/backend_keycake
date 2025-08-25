import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestUpdateWithoutDepartmentInputSchema } from './CakeRequestUpdateWithoutDepartmentInputSchema';
import { CakeRequestUncheckedUpdateWithoutDepartmentInputSchema } from './CakeRequestUncheckedUpdateWithoutDepartmentInputSchema';

export const CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutDepartmentInputSchema) ]),
}).strict();

export default CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema;
