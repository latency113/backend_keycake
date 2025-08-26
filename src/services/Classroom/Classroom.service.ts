import type { Classroom, Prisma, PrismaClient } from "@prisma/client"
import type { TypeClassroomService, TypeClassroomWhereInput } from "./Classroom.type.js"

export type ClassroomDependencies = {
  db: PrismaClient
}
export function ClassroomService({ db }: ClassroomDependencies) {
  return {
    async count(where?: TypeClassroomWhereInput["where"]): Promise<number> {
      console.log(`[ClassroomService] count called with where:`, where)
      try {
        const result = await db.classroom.count({ where })
        console.log(`[ClassroomService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[ClassroomService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeClassroomWhereInput): Promise<Classroom[]> {
      console.log(`[ClassroomService] getAll called with param:`, param)
      try {
        const result = await db.classroom.findMany({
          include: {
            department: true,
            grade_level: true,
          },
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[ClassroomService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[ClassroomService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<Classroom | null> {
      console.log(`[ClassroomService] getById called with id: ${id}`)
      try {
        const result = await db.classroom.findFirst({
          include: {
            department: true,
            grade_level: true,
          },
          where: { id },
        })
        console.log(`[ClassroomService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[ClassroomService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeClassroomWhereInput["where"]): Promise<Classroom | null> {
      console.log(`[ClassroomService] getOne called with param:`, param)
      try {
        const result = await db.classroom.findFirst({
          include: {
            department: true,
            grade_level: true,
          },
          where: param,
        })
        console.log(`[ClassroomService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[ClassroomService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.ClassroomCreateInput): Promise<Classroom> {
      console.log(`[ClassroomService] onCreate called with data:`, data)
      try {
        const result = await db.classroom.create({
          data,
          include: {
            department: true,
            grade_level: true,
          },
        })
        console.log(`[ClassroomService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[ClassroomService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Classroom | null> {
      console.log(`[ClassroomService] onDelete called with id: ${id}`)
      try {
        const result = await db.classroom.delete({ where: { id } })
        console.log(`[ClassroomService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[ClassroomService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.ClassroomUpdateInput): Promise<Classroom> {
      console.log(`[ClassroomService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.classroom.update({
          data,
          include: {
            department: true,
            grade_level: true,
          },
          where: { id },
        })
        console.log(`[ClassroomService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[ClassroomService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeClassroomService
}
