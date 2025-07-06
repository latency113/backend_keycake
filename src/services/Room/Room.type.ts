import type { Prisma, Room } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { RoomWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeRoomWhereInput = {
  where?: z.infer<typeof RoomWhereInputSchema>
  pagination?: TypePagination
}
export type TypeRoomService = {
  onCreate: (data: Prisma.RoomCreateInput) => Promise<Room>
  onUpdate: (id: string, data: Prisma.RoomCreateInput) => Promise<Room>
  onDelete: (id: string) => Promise<Room | null>
  getOne: (param: TypeRoomWhereInput["where"]) => Promise<Room | null>
  getById: (id: string) => Promise<Room | null>
  getAll: (param?: TypeRoomWhereInput) => Promise<Room[]>
  count: (where?: TypeRoomWhereInput["where"]) => Promise<number>
}
