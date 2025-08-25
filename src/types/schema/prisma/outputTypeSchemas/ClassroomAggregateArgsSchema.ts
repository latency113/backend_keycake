import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomOrderByWithRelationInputSchema } from "../inputTypeSchemas/ClassroomOrderByWithRelationInputSchema"
import { ClassroomWhereInputSchema } from "../inputTypeSchemas/ClassroomWhereInputSchema"
import { ClassroomWhereUniqueInputSchema } from "../inputTypeSchemas/ClassroomWhereUniqueInputSchema"

export const ClassroomAggregateArgsSchema: z.ZodType<Prisma.ClassroomAggregateArgs> = z.object({
  cursor: ClassroomWhereUniqueInputSchema.optional(),
  orderBy: z.union([ClassroomOrderByWithRelationInputSchema.array(), ClassroomOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: ClassroomWhereInputSchema.optional(),
}).strict()

export default ClassroomAggregateArgsSchema
