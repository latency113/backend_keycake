import type { Team, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { TeamWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeTeamWhereInput = {
  where?: z.infer<typeof TeamWhereInputSchema>
  pagination?: TypePagination
}
export type TypeTeamService = {
  onCreate: (data: Prisma.TeamCreateInput) => Promise<Team>
  onUpdate: (id: string, data: Prisma.TeamCreateInput) => Promise<Team>
  onDelete: (id: string) => Promise<Team | null>
  getOne: (param: TypeTeamWhereInput["where"]) => Promise<Team | null>
  getById: (id: string) => Promise<Team | null>
  getAll: (param?: TypeTeamWhereInput) => Promise<Team[]>
  count: (where?: TypeTeamWhereInput["where"]) => Promise<number>
}
