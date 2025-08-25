import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomOrderByWithAggregationInputSchema } from "../inputTypeSchemas/ClassroomOrderByWithAggregationInputSchema"
import { ClassroomScalarFieldEnumSchema } from "../inputTypeSchemas/ClassroomScalarFieldEnumSchema"
import { ClassroomScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/ClassroomScalarWhereWithAggregatesInputSchema"
import { ClassroomWhereInputSchema } from "../inputTypeSchemas/ClassroomWhereInputSchema"

export const ClassroomGroupByArgsSchema: z.ZodType<Prisma.ClassroomGroupByArgs> = z.object({
  by: ClassroomScalarFieldEnumSchema.array(),
  having: ClassroomScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([ClassroomOrderByWithAggregationInputSchema.array(), ClassroomOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: ClassroomWhereInputSchema.optional(),
}).strict()

export default ClassroomGroupByArgsSchema
