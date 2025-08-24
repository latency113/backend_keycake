import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { ClassService } from "./Classroom.service"

describe("classService", () => {
  let db: { class: any }
  let service: ReturnType<typeof ClassService>

  beforeEach(() => {
    db = {
      class: {
        count: vi.fn().mockResolvedValue(1),
        create: vi.fn().mockResolvedValue({
          department_id: "GN2",
          grade_level_id: "GL1",
          id: "2",
          name: "Class 2",
          department: { id: "GN2", name: "Department 2", group_number: "GN2" },
          grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
        }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        findFirst: vi.fn().mockResolvedValue({
          department_id: "GN1",
          grade_level_id: "GL1",
          id: "1",
          name: "Class 1",
          department: { id: "GN1", name: "Department 1", group_number: "GN1" },
          grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
        }),
        findMany: vi.fn().mockResolvedValue([
          {
            department_id: "GN1",
            grade_level_id: "GL1",
            id: "1",
            name: "Class 1",
            department: { id: "GN1", name: "Department 1", group_number: "GN1" },
            grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
          },
        ]),
        update: vi.fn().mockResolvedValue({
          department_id: "GN1-U",
          grade_level_id: "GL1",
          id: "1",
          name: "Class 1 Updated",
          department: { id: "GN1-U", name: "Department 1 Updated", group_number: "GN1-U" },
          grade_level: { id: "GL1", level: "VOCATIONAL", year: 2023 },
        }),
      },
    }
    service = ClassService({ db: db as unknown as PrismaClient })
  })

  it("should count Classes", async () => {
    const count = await service.count()
    expect(count).toBe(1)
    expect(db.class.count).toHaveBeenCalled()
  })

  it("should get all Classes", async () => {
    const classes = await service.getAll()
    expect(classes.length).toBeGreaterThan(0)
    expect(db.class.findMany).toHaveBeenCalled()
  })

  it("should get Class by id", async () => {
    const class_ = await service.getById("1")
    expect(class_).toBeTruthy()
    expect(db.class.findFirst).toHaveBeenCalledWith({
      where: { id: "1" },
      include: {
        department: true,
        grade_level: true,
      },
    })
  })

  it("should get one Class by param", async () => {
    const class_ = await service.getOne({ name: "Class 1" })
    expect(class_).toBeTruthy()
    expect(db.class.findFirst).toHaveBeenCalledWith({
      where: { name: "Class 1" },
      include: {
        department: true,
        grade_level: true,
      },
    })
  })

  it("should create a Class", async () => {
    const data = {
      department_id: "GN2",
      grade_level_id: "GL1",
      name: "Class 2",
    }
    const class_ = await service.onCreate(data)
    expect(class_).toBeTruthy()
    expect(db.class.create).toHaveBeenCalledWith({
      data,
      include: {
        department: true,
        grade_level: true,
      },
    })
  })

  it("should delete a Class", async () => {
    const class_ = await service.onDelete("1")
    expect(class_).toBeTruthy()
    expect(db.class.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a Class", async () => {
    const data = { grade_level_id: "GL1", name: "Class 1 Updated" }
    const class_ = await service.onUpdate("1", data)
    expect(class_).toBeTruthy()
    expect(db.class.update).toHaveBeenCalledWith({
      data,
      where: { id: "1" },
      include: {
        department: true,
        grade_level: true,
      },
    })
  })
})