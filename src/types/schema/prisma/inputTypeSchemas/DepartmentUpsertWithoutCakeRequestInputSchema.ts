import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentUpdateWithoutCakeRequestInputSchema } from './DepartmentUpdateWithoutCakeRequestInputSchema';
import { DepartmentUncheckedUpdateWithoutCakeRequestInputSchema } from './DepartmentUncheckedUpdateWithoutCakeRequestInputSchema';
import { DepartmentCreateWithoutCakeRequestInputSchema } from './DepartmentCreateWithoutCakeRequestInputSchema';
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from './DepartmentUncheckedCreateWithoutCakeRequestInputSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const DepartmentUpsertWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutCakeRequestInput> = z.object({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional()
}).strict();

export default DepartmentUpsertWithoutCakeRequestInputSchema;
