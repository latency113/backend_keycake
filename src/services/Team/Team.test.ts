import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { TeamService } from "./Team.service"

describe("teamService", () => {
  let db: { team: any }
  let service: ReturnType<typeof TeamService>
  const baseTeam = {
    id: "team1",
    name: "Red Team",
    room_id: "room1",
  }

  beforeEach(() => {
    db = {
      team: {
        count: vi.fn().mockResolvedValue(2),
        create: vi.fn().mockResolvedValue({ ...baseTeam, id: "team2" }),
        delete: vi.fn().mockResolvedValue({ ...baseTeam }),
        findFirst: vi.fn().mockResolvedValue({ ...baseTeam, room: { id: "room1", name: "Room 1", branch_id: "branch1", grade_level_id: "gl1" } }),
        findMany: vi.fn().mockResolvedValue([{ ...baseTeam, room: { id: "room1", name: "Room 1", branch_id: "branch1", grade_level_id: "gl1" } }]),
        update: vi.fn().mockResolvedValue({ ...baseTeam, name: "Blue Team" }),
      },
    }
    service = TeamService({ db: db as unknown as PrismaClient })
  })

  it("should count Teams", async () => {
    const count = await service.count({ name: "Red Team" })
    expect(count).toBe(2)
    expect(db.team.count).toHaveBeenCalledWith({ where: { name: "Red Team" } })
  })

  it("should get all Teams", async () => {
    const teams = await service.getAll({ where: { name: "Red Team" } })
    expect(Array.isArray(teams)).toBe(true)
    expect(teams.length).toBeGreaterThan(0)
    expect(teams[0]).toMatchObject({ id: "team1", name: "Red Team" })
    expect(db.team.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: undefined,
      where: { name: "Red Team" },
      include: {
        room: true,
      },
    })
  })

  it("should get Team by id", async () => {
    const team = await service.getById("team1")
    expect(team).toBeTruthy()
    expect(team).toMatchObject({ id: "team1", name: "Red Team" })
    expect(db.team.findFirst).toHaveBeenCalledWith({
      where: { id: "team1" },
      include: {
        room: true,
      },
    })
  })

  it("should get one Team by param", async () => {
    const team = await service.getOne({ name: "Red Team" })
    expect(team).toBeTruthy()
    expect(team).toMatchObject({ id: "team1", name: "Red Team" })
    expect(db.team.findFirst).toHaveBeenCalledWith({
      where: { name: "Red Team" },
      include: {
        room: true,
      },
    })
  })

  it("should create a Team", async () => {
    const data = {
      name: "Red Team",
      room: { connect: { id: "room1" } },
    }
    const team = await service.onCreate(data)
    expect(team).toBeTruthy()
    expect(team).toMatchObject({ id: "team2", name: "Red Team" })
    expect(db.team.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a Team", async () => {
    const team = await service.onDelete("team1")
    expect(team).toBeTruthy()
    expect(team).toMatchObject({ id: "team1" })
    expect(db.team.delete).toHaveBeenCalledWith({ where: { id: "team1" } })
  })

  it("should update a Team", async () => {
    const data = { name: "Blue Team" }
    const team = await service.onUpdate("team1", data)
    expect(team).toBeTruthy()
    expect(team).toMatchObject({ id: "team1", name: "Blue Team" })
    expect(db.team.update).toHaveBeenCalledWith({
      data,
      where: { id: "team1" },
    })
  })
})
