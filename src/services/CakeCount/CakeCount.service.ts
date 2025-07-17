import type { type CakeCount, Prisma, type PrismaClient } from "@prisma/client"

import type { TypeCakeCountService, TypeCakeCountWhereInput } from "./CakeCount.type.js"

export type CakeCountDependencies = {
  db: PrismaClient
}
export function CakeCountService({ db }: CakeCountDependencies) {
  return {
    async count(where?: TypeCakeCountWhereInput["where"]): Promise<number> {
      console.log(`[CakeCountService] count called with where:`, where)
      try {
        const result = await db.cakeCount.count({ where })
        console.log(`[CakeCountService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[CakeCountService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeCakeCountWhereInput): Promise<CakeCount[]> {
      console.log(`[CakeCountService] getAll called with param:`, param)
      try {
        const result = await db.cakeCount.findMany({
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[CakeCountService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[CakeCountService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<CakeCount | null> {
      console.log(`[CakeCountService] getById called with id: ${id}`)
      try {
        const result = await db.cakeCount.findFirst({ where: { id } })
        console.log(`[CakeCountService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[CakeCountService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeCakeCountWhereInput["where"]): Promise<CakeCount | null> {
      console.log(`[CakeCountService] getOne called with param:`, param)
      try {
        const result = await db.cakeCount.findFirst({ where: param })
        console.log(`[CakeCountService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[CakeCountService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.CakeCountCreateInput): Promise<CakeCount> {
      console.log(`[CakeCountService] onCreate called with data:`, data)
      try {
        const result = await db.cakeCount.create({ data })
        console.log(`[CakeCountService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeCountService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<CakeCount | null> {
      console.log(`[CakeCountService] onDelete called with id: ${id}`)
      try {
        const result = await db.cakeCount.delete({ where: { id } })
        console.log(`[CakeCountService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeCountService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.CakeCountUpdateInput): Promise<CakeCount> {
      console.log(`[CakeCountService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.cakeCount.update({ data, where: { id } })
        console.log(`[CakeCountService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeCountService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeCakeCountService
}
