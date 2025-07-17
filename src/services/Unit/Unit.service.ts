import type { Prisma, type PrismaClient, type Unit } from "@prisma/client"

import type { TypeUnitService, TypeUnitWhereInput } from "./Unit.type.js"

export type UnitDependencies = {
  db: PrismaClient
}
export function UnitService({ db }: UnitDependencies) {
  return {
    async count(where?: TypeUnitWhereInput["where"]): Promise<number> {
      console.log(`[UnitService] count called with where:`, where)
      try {
        const result = await db.unit.count({ where })
        console.log(`[UnitService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[UnitService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeUnitWhereInput): Promise<Unit[]> {
      console.log(`[UnitService] getAll called with param:`, param)
      try {
        const result = await db.unit.findMany({
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[UnitService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[UnitService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<Unit | null> {
      console.log(`[UnitService] getById called with id: ${id}`)
      try {
        const result = await db.unit.findFirst({ where: { id } })
        console.log(`[UnitService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[UnitService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeUnitWhereInput["where"]): Promise<Unit | null> {
      console.log(`[UnitService] getOne called with param:`, param)
      try {
        const result = await db.unit.findFirst({ where: param })
        console.log(`[UnitService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[UnitService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.UnitCreateInput): Promise<Unit> {
      console.log(`[UnitService] onCreate called with data:`, data)
      try {
        const result = await db.unit.create({ data })
        console.log(`[UnitService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[UnitService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Unit | null> {
      console.log(`[UnitService] onDelete called with id: ${id}`)
      try {
        const result = await db.unit.delete({ where: { id } })
        console.log(`[UnitService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[UnitService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.UnitUpdateInput): Promise<Unit> {
      console.log(`[UnitService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.unit.update({ data, where: { id } })
        console.log(`[UnitService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[UnitService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeUnitService
}
