import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentCreateWithoutCakeRequestInputSchema } from './DepartmentCreateWithoutCakeRequestInputSchema';
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from './DepartmentUncheckedCreateWithoutCakeRequestInputSchema';

export const DepartmentCreateOrConnectWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]),
}).strict();

export default DepartmentCreateOrConnectWithoutCakeRequestInputSchema;
