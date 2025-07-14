import { Prisma, type Team, type PrismaClient } from "@prisma/client"
import type { TypeTeamService, TypeTeamWhereInput } from "./Team.type.js"

export type TeamDependencies = {
  db: PrismaClient
}
export function TeamService({ db }: TeamDependencies) {
  return {
    async count(where?: TypeTeamWhereInput["where"]): Promise<number> {
      console.log(`[TeamService] count called with where:`, where)
      try {
        const result = await db.team.count({ where })
        console.log(`[TeamService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[TeamService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeTeamWhereInput): Promise<Team[]> {
      console.log(`[TeamService] getAll called with param:`, param)
      try {
        const result = await db.team.findMany({
          include:{
            room:true,
          },
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[TeamService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[TeamService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<Team | null> {
      console.log(`[TeamService] getById called with id: ${id}`)
      try {
        const result = await db.team.findFirst({ where: { id } ,include: { room: true }})
        console.log(`[TeamService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[TeamService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeTeamWhereInput["where"]): Promise<Team | null> {
      console.log(`[TeamService] getOne called with param:`, param)
      try {
        const result = await db.team.findFirst({ where: param ,include: { room: true }})
        console.log(`[TeamService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[TeamService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.TeamCreateInput): Promise<Team> {
      console.log(`[TeamService] onCreate called with data:`, data)
      try {
        const result = await db.team.create({ data })
        console.log(`[TeamService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[TeamService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Team | null> {
      console.log(`[TeamService] onDelete called with id: ${id}`)
      try {
        const result = await db.team.delete({ where: { id } })
        console.log(`[TeamService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[TeamService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.TeamUpdateInput): Promise<Team> {
      console.log(`[TeamService] onUpdate called with id: ${id}, data:`, data)
      try {
        const cleanedData = Object.fromEntries(
          Object.entries(data).filter(([, value]) => value !== null && value !== '' && value !== undefined)
        );

        if (Object.keys(cleanedData).length === 0) {
          const Team = await db.team.findUnique({ where: { id } });
          if (!Team) {
            throw new Error(`Record to update not found.`);
          }
          return Team;
        }

        const result = await db.team.update({ data: cleanedData, where: { id } })
        console.log(`[TeamService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[TeamService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeTeamService
}