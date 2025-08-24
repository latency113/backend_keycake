import type { Prisma, PrismaClient, Class } from "@prisma/client"
import type { TypeClassService, TypeClassWhereInput } from "./Classroom.type.js"

export type ClassDependencies = {
  db: PrismaClient
}
export function ClassService({ db }: ClassDependencies) {
  return {
    async count(where?: TypeClassWhereInput["where"]): Promise<number> {
      console.log(`[ClassService] count called with where:`, where)
      try {
        const result = await db.class.count({ where })
        console.log(`[ClassService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[ClassService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeClassWhereInput): Promise<ClassWithDepartment[]> {
      console.log(`[ClassService] getAll called with param:`, param)
      try {
        const result = await db.class.findMany({
          include: {
            department: true,
            grade_level: true,
          },
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[ClassService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[ClassService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<ClassWithDepartment | null> {
      console.log(`[ClassService] getById called with id: ${id}`)
      try {
        const result = await db.class.findFirst({
          where: { id },
          include: {
            department: true,
            grade_level: true,
          },
        })
        console.log(`[ClassService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[ClassService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeClassWhereInput["where"]): Promise<ClassWithDepartment | null> {
      console.log(`[ClassService] getOne called with param:`, param)
      try {
        const result = await db.class.findFirst({
          where: param,
          include: {
            department: true,
            grade_level: true,
          },
        })
        console.log(`[ClassService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[ClassService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.ClassCreateInput): Promise<ClassWithDepartment> {
      console.log(`[ClassService] onCreate called with data:`, data)
      try {
        const result = await db.class.create({
          data,
          include: {
            department: true,
            grade_level: true,
          },
        })
        console.log(`[ClassService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[ClassService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Class | null> {
      console.log(`[ClassService] onDelete called with id: ${id}`)
      try {
        const result = await db.class.delete({ where: { id } })
        console.log(`[ClassService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[ClassService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.ClassUpdateInput): Promise<ClassWithDepartment> {
      console.log(`[ClassService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.class.update({
          data,
          where: { id },
          include: {
            department: true,
            grade_level: true,
          },
        })
        console.log(`[ClassService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[ClassService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeClassService
}