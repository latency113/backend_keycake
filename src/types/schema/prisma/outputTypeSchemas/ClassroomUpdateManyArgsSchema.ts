import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/ClassroomUncheckedUpdateManyInputSchema"
import { ClassroomUpdateManyMutationInputSchema } from "../inputTypeSchemas/ClassroomUpdateManyMutationInputSchema"
import { ClassroomWhereInputSchema } from "../inputTypeSchemas/ClassroomWhereInputSchema"

export const ClassroomUpdateManyArgsSchema: z.ZodType<Prisma.ClassroomUpdateManyArgs> = z.object({
  data: z.union([ClassroomUpdateManyMutationInputSchema, ClassroomUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: ClassroomWhereInputSchema.optional(),
}).strict()

export default ClassroomUpdateManyArgsSchema
