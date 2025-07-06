import type { Prisma, PrismaClient, Room } from "@prisma/client"
import type { TypeRoomService, TypeRoomWhereInput } from "./Room.type.js"

export type RoomDependencies = {
  db: PrismaClient
}
export function RoomService({ db }: RoomDependencies) {
  return {
    async count(where?: TypeRoomWhereInput["where"]): Promise<number> {
      console.log(`[RoomService] count called with where:`, where)
      try {
        const result = await db.room.count({ where })
        console.log(`[RoomService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[RoomService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeRoomWhereInput): Promise<Room[]> {
      console.log(`[RoomService] getAll called with param:`, param)
      try {
        const result = await db.room.findMany({
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[RoomService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[RoomService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<Room | null> {
      console.log(`[RoomService] getById called with id: ${id}`)
      try {
        const result = await db.room.findFirst({ where: { id } })
        console.log(`[RoomService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[RoomService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeRoomWhereInput["where"]): Promise<Room | null> {
      console.log(`[RoomService] getOne called with param:`, param)
      try {
        const result = await db.room.findFirst({ where: param })
        console.log(`[RoomService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[RoomService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.RoomCreateInput): Promise<Room> {
      console.log(`[RoomService] onCreate called with data:`, data)
      try {
        const result = await db.room.create({ data })
        console.log(`[RoomService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[RoomService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Room | null> {
      console.log(`[RoomService] onDelete called with id: ${id}`)
      try {
        const result = await db.room.delete({ where: { id } })
        console.log(`[RoomService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[RoomService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.RoomUpdateInput): Promise<Room> {
      console.log(`[RoomService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.room.update({ data, where: { id } })
        console.log(`[RoomService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[RoomService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeRoomService
}
