import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { GradeLevelService } from "./GradeLevel.service"

describe("gradeLevelService", () => {
  let db: { gradeLevel: any }
  let service: ReturnType<typeof GradeLevelService>

  beforeEach(() => {
    db = {
      gradeLevel: {
        count: vi.fn().mockResolvedValue(1),
        create: vi.fn().mockResolvedValue({
          id: "2",
          level: "GradeLevel 2",
          year: 2,
        }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        findFirst: vi.fn().mockResolvedValue({
          id: "1",
          level: "VOCATIONAL",
          year: 1,
        }),
        findMany: vi.fn().mockResolvedValue([
          {
            id: "1",
            level: "VOCATIONAL",
            year: 1,
          },
        ]),
        update: vi.fn().mockResolvedValue({
          id: "1",
          level: "VOCATIONAL Updated",
          year: 2,
        }),
      },
    }
    service = GradeLevelService({ db: db as unknown as PrismaClient })
  })

  it("should count GradeLeveles", async () => {
    const count = await service.count()
    expect(count).toBe(1)
    expect(db.gradeLevel.count).toHaveBeenCalled()
  })

  it("should get all GradeLeveles", async () => {
    const GradeLeveles = await service.getAll()
    expect(GradeLeveles.length).toBeGreaterThan(0)
    expect(db.gradeLevel.findMany).toHaveBeenCalled()
  })

  it("should get GradeLevel by id", async () => {
    const GradeLevel = await service.getById("1")
    expect(GradeLevel).toBeTruthy()
    expect(db.gradeLevel.findFirst).toHaveBeenCalledWith({
      where: { id: "1" },
      include: { rooms: true },
    })
  })

  it("should get one GradeLevel by param", async () => {
    const GradeLevel = await service.getOne({ level: "VOCATIONAL" })
    expect(GradeLevel).toBeTruthy()
    expect(db.gradeLevel.findFirst).toHaveBeenCalledWith({
      where: { level: "VOCATIONAL" },
      include: { rooms: true },
    })
  })

  it("should create a GradeLevel", async () => {
    const data = {
      level: "GradeLevel 2",
      year: "2",
    }
    const GradeLevel = await service.onCreate(data)
    expect(GradeLevel).toBeTruthy()
    expect(db.gradeLevel.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a GradeLevel", async () => {
    const GradeLevel = await service.onDelete("1")
    expect(GradeLevel).toBeTruthy()
    expect(db.gradeLevel.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a GradeLevel", async () => {
    const data = { level: "VOCATIONAL Updated" }
    const GradeLevel = await service.onUpdate("1", data)
    expect(GradeLevel).toBeTruthy()
    expect(db.gradeLevel.update).toHaveBeenCalledWith({
      data,
      where: { id: "1" },
    })
  })
})
