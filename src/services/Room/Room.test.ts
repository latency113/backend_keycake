import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { RoomService } from "./Room.service"

describe("roomService", () => {
  let db: { room: any }
  let service: ReturnType<typeof RoomService>

  beforeEach(() => {
    db = {
      room: {
        count: vi.fn().mockResolvedValue(1),
        create: vi.fn().mockResolvedValue({
          branch_id: "GN2",
          grade_level_id: "GL1",
          id: "2",
          name: "Room 2",
        }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        findFirst: vi.fn().mockResolvedValue({
          branch_id: "GN1",
          grade_level_id: "GL1",
          id: "1",
          name: "Room 1",
        }),
        findMany: vi.fn().mockResolvedValue([
          {
            branch_id: "GN1",
            grade_level_id: "GL1",
            id: "1",
            name: "Room 1",
          },
        ]),
        update: vi.fn().mockResolvedValue({
          branch_id: "GN1-U",
          grade_level_id: "GL1",
          id: "1",
          name: "Room 1 Updated",
        }),
      },
    }
    service = RoomService({ db: db as unknown as PrismaClient })
  })

  it("should count Roomes", async () => {
    const count = await service.count()
    expect(count).toBe(1)
    expect(db.room.count).toHaveBeenCalled()
  })

  it("should get all Roomes", async () => {
    const Roomes = await service.getAll()
    expect(Roomes.length).toBeGreaterThan(0)
    expect(db.room.findMany).toHaveBeenCalled()
  })

  it("should get Room by id", async () => {
    const Room = await service.getById("1")
    expect(Room).toBeTruthy()
    expect(db.room.findFirst).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should get one Room by param", async () => {
    const Room = await service.getOne({ name: "Room 1" })
    expect(Room).toBeTruthy()
    expect(db.room.findFirst).toHaveBeenCalledWith({
      where: { name: "Room 1" },
    })
  })

  it("should create a Room", async () => {
    const data = {
      branch_id: "GN2",
      grade_level_id: "GL1",
      name: "Room 2",
    }
    const Room = await service.onCreate(data)
    expect(Room).toBeTruthy()
    expect(db.room.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a Room", async () => {
    const Room = await service.onDelete("1")
    expect(Room).toBeTruthy()
    expect(db.room.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a Room", async () => {
    const data = { grade_level_id: "GL1", name: "Room 1 Updated" }
    const Room = await service.onUpdate("1", data)
    expect(Room).toBeTruthy()
    expect(db.room.update).toHaveBeenCalledWith({ data, where: { id: "1" } })
  })
})
