import type { type CakeRequestItems, Prisma, type PrismaClient } from "@prisma/client"

import type { TypeCakeRequestItemsService, TypeCakeRequestItemsWhereInput } from "./CakeRequestItem.type.js"

export type CakeRequestItemsDependencies = {
  db: PrismaClient
}
export function CakeRequestItemsService({ db }: CakeRequestItemsDependencies) {
  return {
    async count(where?: TypeCakeRequestItemsWhereInput["where"]): Promise<number> {
      console.log(`[CakeRequestItemsService] count called with where:`, where)
      try {
        const result = await db.cakeRequestItems.count({ where })
        console.log(`[CakeRequestItemsService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestItemsService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeCakeRequestItemsWhereInput): Promise<CakeRequestItems[]> {
      console.log(`[CakeRequestItemsService] getAll called with param:`, param)
      try {
        const result = await db.cakeRequestItems.findMany({
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[CakeRequestItemsService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestItemsService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<CakeRequestItems | null> {
      console.log(`[CakeRequestItemsService] getById called with id: ${id}`)
      try {
        const result = await db.cakeRequestItems.findFirst({ where: { id } })
        console.log(`[CakeRequestItemsService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestItemsService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeCakeRequestItemsWhereInput["where"]): Promise<CakeRequestItems | null> {
      console.log(`[CakeRequestItemsService] getOne called with param:`, param)
      try {
        const result = await db.cakeRequestItems.findFirst({ where: param })
        console.log(`[CakeRequestItemsService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestItemsService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.CakeRequestItemsCreateInput): Promise<CakeRequestItems> {
      console.log(`[CakeRequestItemsService] onCreate called with data:`, data)
      try {
        const result = await db.cakeRequestItems.create({ data })
        console.log(`[CakeRequestItemsService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestItemsService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<CakeRequestItems | null> {
      console.log(`[CakeRequestItemsService] onDelete called with id: ${id}`)
      try {
        const result = await db.cakeRequestItems.delete({ where: { id } })
        console.log(`[CakeRequestItemsService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestItemsService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.CakeRequestItemsUpdateInput): Promise<CakeRequestItems> {
      console.log(`[CakeRequestItemsService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.cakeRequestItems.update({ data, where: { id } })
        console.log(`[CakeRequestItemsService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestItemsService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeCakeRequestItemsService
}
