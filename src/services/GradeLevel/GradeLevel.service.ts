import { Prisma, type GradeLevel, type PrismaClient } from "@prisma/client"
import type { TypeGradeLevelService, TypeGradeLevelWhereInput } from "./GradeLevel.type.js"

export type GradeLevelDependencies = {
  db: PrismaClient
}
export function GradeLevelService({ db }: GradeLevelDependencies) {
  return {
    async count(where?: TypeGradeLevelWhereInput["where"]): Promise<number> {
      console.log(`[GradeLevelService] count called with where:`, where)
      try {
        const result = await db.gradeLevel.count({ where })
        console.log(`[GradeLevelService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[GradeLevelService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeGradeLevelWhereInput): Promise<GradeLevel[]> {
      console.log(`[GradeLevelService] getAll called with param:`, param)
      try {
        const result = await db.gradeLevel.findMany({
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[GradeLevelService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[GradeLevelService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<GradeLevel | null> {
      console.log(`[GradeLevelService] getById called with id: ${id}`)
      try {
        const result = await db.gradeLevel.findFirst({ where: { id } })
        console.log(`[GradeLevelService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[GradeLevelService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeGradeLevelWhereInput["where"]): Promise<GradeLevel | null> {
      console.log(`[GradeLevelService] getOne called with param:`, param)
      try {
        const result = await db.gradeLevel.findFirst({ where: param })
        console.log(`[GradeLevelService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[GradeLevelService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.GradeLevelCreateInput): Promise<GradeLevel> {
      console.log(`[GradeLevelService] onCreate called with data:`, data)
      try {
        const result = await db.gradeLevel.create({ data })
        console.log(`[GradeLevelService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[GradeLevelService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<GradeLevel | null> {
      console.log(`[GradeLevelService] onDelete called with id: ${id}`)
      try {
        const result = await db.gradeLevel.delete({ where: { id } })
        console.log(`[GradeLevelService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[GradeLevelService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.GradeLevelUpdateInput): Promise<GradeLevel> {
      console.log(`[GradeLevelService] onUpdate called with id: ${id}, data:`, data)
      try {
        const cleanedData = Object.fromEntries(
          Object.entries(data).filter(([, value]) => value !== null && value !== '' && value !== undefined)
        );

        if (Object.keys(cleanedData).length === 0) {
          const gradeLevel = await db.gradeLevel.findUnique({ where: { id } });
          if (!gradeLevel) {
            throw new Error(`Record to update not found.`);
          }
          return gradeLevel;
        }

        const result = await db.gradeLevel.update({ data: cleanedData, where: { id } })
        console.log(`[GradeLevelService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[GradeLevelService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeGradeLevelService
}