import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassroomSelectSchema } from '../inputTypeSchemas/ClassroomSelectSchema';
import { ClassroomIncludeSchema } from '../inputTypeSchemas/ClassroomIncludeSchema';

export const ClassroomArgsSchema: z.ZodType<Prisma.ClassroomDefaultArgs> = z.object({
  select: z.lazy(() => ClassroomSelectSchema).optional(),
  include: z.lazy(() => ClassroomIncludeSchema).optional(),
}).strict();

export default ClassroomArgsSchema;
