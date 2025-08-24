import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestUpdateWithoutDepartmentInputSchema } from './CakeRequestUpdateWithoutDepartmentInputSchema';
import { CakeRequestUncheckedUpdateWithoutDepartmentInputSchema } from './CakeRequestUncheckedUpdateWithoutDepartmentInputSchema';
import { CakeRequestCreateWithoutDepartmentInputSchema } from './CakeRequestCreateWithoutDepartmentInputSchema';
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from './CakeRequestUncheckedCreateWithoutDepartmentInputSchema';

export const CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutDepartmentInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export default CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema;
