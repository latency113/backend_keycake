import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateWithoutOrdersInputSchema } from './ClassroomCreateWithoutOrdersInputSchema';
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from './ClassroomUncheckedCreateWithoutOrdersInputSchema';
import { ClassroomCreateOrConnectWithoutOrdersInputSchema } from './ClassroomCreateOrConnectWithoutOrdersInputSchema';
import { ClassroomUpsertWithoutOrdersInputSchema } from './ClassroomUpsertWithoutOrdersInputSchema';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema } from './ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema';
import { ClassroomUpdateWithoutOrdersInputSchema } from './ClassroomUpdateWithoutOrdersInputSchema';
import { ClassroomUncheckedUpdateWithoutOrdersInputSchema } from './ClassroomUncheckedUpdateWithoutOrdersInputSchema';

export const ClassroomUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => ClassroomUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ClassroomWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export default ClassroomUpdateOneWithoutOrdersNestedInputSchema;
