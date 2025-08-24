import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { DepartmentUpdateWithoutCakeRequestInputSchema } from './DepartmentUpdateWithoutCakeRequestInputSchema';
import { DepartmentUncheckedUpdateWithoutCakeRequestInputSchema } from './DepartmentUncheckedUpdateWithoutCakeRequestInputSchema';

export const DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema) ]),
}).strict();

export default DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema;
