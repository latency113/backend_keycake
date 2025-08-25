import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateWithoutDepartmentInputSchema } from './CakeRequestCreateWithoutDepartmentInputSchema';
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from './CakeRequestUncheckedCreateWithoutDepartmentInputSchema';
import { CakeRequestCreateOrConnectWithoutDepartmentInputSchema } from './CakeRequestCreateOrConnectWithoutDepartmentInputSchema';
import { CakeRequestCreateManyDepartmentInputEnvelopeSchema } from './CakeRequestCreateManyDepartmentInputEnvelopeSchema';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';

export const CakeRequestCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CakeRequestCreateNestedManyWithoutDepartmentInputSchema;
