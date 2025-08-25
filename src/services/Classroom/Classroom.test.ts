import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { ClassroomService } from "./Classroom.service"

describe("classroomService", () => {
  let db: { classroom: any }
  let service: ReturnType<typeof ClassroomService>

  beforeEach(() => {
    db = {
      classroom: {
        count: vi.fn().mockResolvedValue(1),
        create: vi.fn().mockResolvedValue({
          department: { group_number: "GN2", id: "GN2", name: "Department 2" },
          department_id: "GN2",
          grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
          grade_level_id: "GL1",
          id: "2",
          name: "Classroom 2",
        }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        findFirst: vi.fn().mockResolvedValue({
          department: { group_number: "GN1", id: "GN1", name: "Department 1" },
          department_id: "GN1",
          grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
          grade_level_id: "GL1",
          id: "1",
          name: "Classroom 1",
        }),
        findMany: vi.fn().mockResolvedValue([
          {
            department: { group_number: "GN1", id: "GN1", name: "Department 1" },
            department_id: "GN1",
            grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
            grade_level_id: "GL1",
            id: "1",
            name: "Classroom 1",
          },
        ]),
        update: vi.fn().mockResolvedValue({
          department: { group_number: "GN1-U", id: "GN1-U", name: "Department 1 Updated" },
          department_id: "GN1-U",
          grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
          grade_level_id: "GL1",
          id: "1",
          name: "Classroom 1 Updated",
        }),
      },
    }
    service = ClassroomService({ db: db as unknown as PrismaClient })
  })

  it("should count Classrooms", async () => {
    const count = await service.count()
    expect(count).toBe(1)
    expect(db.classroom.count).toHaveBeenCalled()
  })

  it("should get all Classrooms", async () => {
    const classrooms = await service.getAll()
    expect(classrooms.length).toBeGreaterThan(0)
    expect(db.classroom.findMany).toHaveBeenCalled()
  })

  it("should get Classroom by id", async () => {
    const classroom_ = await service.getById("1")
    expect(classroom_).toBeTruthy()
    expect(db.classroom.findFirst).toHaveBeenCalledWith({
      include: {
        department: true,
        grade_level: true,
      },
      where: { id: "1" },
    })
  })

  it("should get one Classroom by param", async () => {
    const classroom_ = await service.getOne({ name: "Classroom 1" })
    expect(classroom_).toBeTruthy()
    expect(db.classroom.findFirst).toHaveBeenCalledWith({
      include: {
        department: true,
        grade_level: true,
      },
      where: { name: "Classroom 1" },
    })
  })

  it("should create a Classroom", async () => {
    const data = {
      department_id: "GN2",
      grade_level_id: "GL1",
      name: "Classroom 2",
    }
    const classroom_ = await service.onCreate(data)
    expect(classroom_).toBeTruthy()
    expect(db.classroom.create).toHaveBeenCalledWith({
      data,
      include: {
        department: true,
        grade_level: true,
      },
    })
  })

  it("should delete a Classroom", async () => {
    const classroom_ = await service.onDelete("1")
    expect(classroom_).toBeTruthy()
    expect(db.classroom.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a Classroom", async () => {
    const data = { grade_level_id: "GL1", name: "Classroom 1 Updated" }
    const classroom_ = await service.onUpdate("1", data)
    expect(classroom_).toBeTruthy()
    expect(db.classroom.update).toHaveBeenCalledWith({
      data,
      include: {
        department: true,
        grade_level: true,
      },
      where: { id: "1" },
    })
  })
})
