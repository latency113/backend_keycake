import type { Department, Prisma, PrismaClient } from "@prisma/client"
import type { TypeDepartmentService, TypeDepartmentWhereInput } from "./Department.type.js"
import type { DepartmentWithClassrooms } from "@/types/schema/prisma/outputTypeSchemas/DepartmentWithClassroomsSchema.js"
import type { GradeLevelWithClassRoomCount } from "@/types/schema/prisma/outputTypeSchemas/GradeLevelWithClassRoomCountSchema.js"

export type DepartmentDependencies = {
  db: PrismaClient
}
export function DepartmentService({ db }: DepartmentDependencies) {
  return {
    async count(where?: TypeDepartmentWhereInput["where"]): Promise<number> {
      console.log(`[DepartmentService] count called with where:`, where)
      try {
        const result = await db.department.count({ where })
        console.log(`[DepartmentService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[DepartmentService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeDepartmentWhereInput): Promise<DepartmentWithClassrooms[]> {
      console.log(`[DepartmentService] getAll called with param:`, param)
      try {
        const Departmentes = await db.department.findMany({
          include: {
            classroom: {
              include: {
                grade_level: true,
              },
            },
          },
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })

        const result: DepartmentWithClassrooms[] = Departmentes.map((Department) => {
          const gradeLevelsMap = new Map<string, GradeLevelWithClassRoomCount>()

          Department.classroom.forEach((ClassRoom) => {
            if (ClassRoom.grade_level) {
              const key = `${ClassRoom.grade_level.level}-${ClassRoom.grade_level.year}`
              if (gradeLevelsMap.has(key)) {
                const existing = gradeLevelsMap.get(key)!
                existing.ClassRoomCount++
                gradeLevelsMap.set(key, existing)
              }
              else {
                gradeLevelsMap.set(key, {
                  ClassRoomCount: 1,
                  level: ClassRoom.grade_level.level,
                  year: ClassRoom.grade_level.year,
                })
              }
            }
          })

          return {
            ...Department,
            gradeLevels: Array.from(gradeLevelsMap.values()),
          }
        })

        console.log(`[DepartmentService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[DepartmentService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<DepartmentWithClassrooms | null> {
      console.log(`[DepartmentService] getById called with id: ${id}`)
      try {
        const Department = await db.department.findFirst({
          include: {
            classroom: {
              include: {
                grade_level: true,
              },
            },
          },
          where: { id },
        })
        console.log(`[DepartmentService] findFirst result for id ${id}:`, Department)

        if (!Department) {
          console.log(`[DepartmentService] getById completed, found: false`)
          return null
        }

        const gradeLevelsMap = new Map<string, GradeLevelWithClassRoomCount>()

        Department.classroom.forEach((ClassRoom) => {
          if (ClassRoom.grade_level) {
            const key = `${ClassRoom.grade_level.level}-${ClassRoom.grade_level.year}`
            if (gradeLevelsMap.has(key)) {
              const existing = gradeLevelsMap.get(key)!
              existing.ClassRoomCount++
              gradeLevelsMap.set(key, existing)
            }
            else {
              gradeLevelsMap.set(key, {
                ClassRoomCount: 1,
                level: ClassRoom.grade_level.level,
                year: ClassRoom.grade_level.year,
              })
            }
          }
        })

        const result: DepartmentWithClassrooms = {
          ...Department,
          gradeLevels: Array.from(gradeLevelsMap.values()),
        }

        console.log(`[DepartmentService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[DepartmentService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeDepartmentWhereInput["where"]): Promise<Department | null> {
      console.log(`[DepartmentService] getOne called with param:`, param)
      try {
        const result = await db.department.findFirst({
          include: {
            classroom: {
              include: {
                grade_level: true,
              },
            },
          },
          where: param,
        })
        console.log(`[DepartmentService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[DepartmentService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.DepartmentCreateInput): Promise<Department> {
      console.log(`[DepartmentService] onCreate called with data:`, data)
      try {
        const result = await db.department.create({ data })
        console.log(`[DepartmentService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[DepartmentService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Department | null> {
      console.log(`[DepartmentService] onDelete called with id: ${id}`)
      try {
        const result = await db.department.delete({ where: { id } })
        console.log(`[DepartmentService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[DepartmentService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.DepartmentUpdateInput): Promise<Department> {
      console.log(`[DepartmentService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.department.update({ data, where: { id } })
        console.log(`[DepartmentService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[DepartmentService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeDepartmentService
}
