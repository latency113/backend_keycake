import type { Prisma, PrismaClient, User } from "@prisma/client"
import type { TypeUserService, TypeUserWhereInput } from "./User.type.js"
import bcrypt from "bcryptjs"

export type UserDependencies = {
  db: PrismaClient
}
export function UserService({ db }: UserDependencies) {
  return {
    async count(where?: TypeUserWhereInput["where"]): Promise<number> {
      console.log(`[UserService] count called with where:`, where)
      try {
        const result = await db.user.count({ where })
        console.log(`[UserService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[UserService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeUserWhereInput): Promise<User[]> {
      console.log(`[UserService] getAll called with param:`, param)
      try {
        const result = await db.user.findMany({
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[UserService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[UserService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<User | null> {
      console.log(`[UserService] getById called with id: ${id}`)
      try {
        const result = await db.user.findFirst({ where: { id } })
        console.log(`[UserService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[UserService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeUserWhereInput["where"]): Promise<User | null> {
      console.log(`[UserService] getOne called with param:`, param)
      try {
        const result = await db.user.findFirst({ where: param })
        console.log(`[UserService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[UserService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.UserCreateInput): Promise<User> {
      console.log(`[UserService] onCreate called with data:`, data)
      try {
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const result = await db.user.create({ data: { ...data, password: hashedPassword } })
        console.log(`[UserService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[UserService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<User | null> {
      console.log(`[UserService] onDelete called with id: ${id}`)
      try {
        const result = await db.user.delete({ where: { id } })
        console.log(`[UserService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[UserService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.UserUpdateInput): Promise<User> {
      console.log(`[UserService] onUpdate called with id: ${id}, data:`, data)
      try {
        if (data.password) {
          data.password = await bcrypt.hash(data.password as string, 10)
        }
        const result = await db.user.update({ data, where: { id } })
        console.log(`[UserService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[UserService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeUserService
}
