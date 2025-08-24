import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/DepartmentUpdateManyMutationInputSchema'
import { DepartmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DepartmentUncheckedUpdateManyInputSchema'
import { DepartmentWhereInputSchema } from '../inputTypeSchemas/DepartmentWhereInputSchema'

export const DepartmentUpdateManyArgsSchema: z.ZodType<Prisma.DepartmentUpdateManyArgs> = z.object({
  data: z.union([ DepartmentUpdateManyMutationInputSchema,DepartmentUncheckedUpdateManyInputSchema ]),
  where: DepartmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default DepartmentUpdateManyArgsSchema;
