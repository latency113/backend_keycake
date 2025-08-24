import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutCakeRequestInputSchema } from './DepartmentCreateWithoutCakeRequestInputSchema';
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from './DepartmentUncheckedCreateWithoutCakeRequestInputSchema';
import { DepartmentCreateOrConnectWithoutCakeRequestInputSchema } from './DepartmentCreateOrConnectWithoutCakeRequestInputSchema';
import { DepartmentUpsertWithoutCakeRequestInputSchema } from './DepartmentUpsertWithoutCakeRequestInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema } from './DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema';
import { DepartmentUpdateWithoutCakeRequestInputSchema } from './DepartmentUpdateWithoutCakeRequestInputSchema';
import { DepartmentUncheckedUpdateWithoutCakeRequestInputSchema } from './DepartmentUncheckedUpdateWithoutCakeRequestInputSchema';

export const DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutCakeRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema) ]).optional(),
}).strict();

export default DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema;
