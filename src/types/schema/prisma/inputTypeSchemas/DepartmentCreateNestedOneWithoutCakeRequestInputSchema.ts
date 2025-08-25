import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutCakeRequestInputSchema } from './DepartmentCreateWithoutCakeRequestInputSchema';
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from './DepartmentUncheckedCreateWithoutCakeRequestInputSchema';
import { DepartmentCreateOrConnectWithoutCakeRequestInputSchema } from './DepartmentCreateOrConnectWithoutCakeRequestInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';

export const DepartmentCreateNestedOneWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutCakeRequestInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional()
}).strict();

export default DepartmentCreateNestedOneWithoutCakeRequestInputSchema;
