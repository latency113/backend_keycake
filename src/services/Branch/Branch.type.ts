import type { Branch, GradeLevel, Prisma, Room } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { BranchWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeBranchWhereInput = {
  where?: z.infer<typeof BranchWhereInputSchema>
  pagination?: TypePagination
}

export type GradeLevelWithRoomCount = Pick<GradeLevel, "level" | "year"> & {
  roomCount: number
}

export type BranchWithRooms = Branch & {
  rooms: Room[];
  gradeLevels: GradeLevelWithRoomCount[];
}

export type TypeBranchService = {
  onCreate: (data: Prisma.BranchCreateInput) => Promise<Branch>
  onUpdate: (id: string, data: Prisma.BranchCreateInput) => Promise<Branch>
  onDelete: (id: string) => Promise<Branch | null>
  getOne: (param: TypeBranchWhereInput["where"]) => Promise<Branch | null>
  getById: (id: string) => Promise<BranchWithRooms | null>
  getAll: (param?: TypeBranchWhereInput) => Promise<BranchWithRooms[]>
  count: (where?: TypeBranchWhereInput["where"]) => Promise<number>
}