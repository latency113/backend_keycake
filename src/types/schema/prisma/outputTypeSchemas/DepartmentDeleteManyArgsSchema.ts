import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentWhereInputSchema } from '../inputTypeSchemas/DepartmentWhereInputSchema'

export const DepartmentDeleteManyArgsSchema: z.ZodType<Prisma.DepartmentDeleteManyArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default DepartmentDeleteManyArgsSchema;
