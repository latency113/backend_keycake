import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestCreateWithoutDepartmentInputSchema } from './CakeRequestCreateWithoutDepartmentInputSchema';
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from './CakeRequestUncheckedCreateWithoutDepartmentInputSchema';

export const CakeRequestCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export default CakeRequestCreateOrConnectWithoutDepartmentInputSchema;
