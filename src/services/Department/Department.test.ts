import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { DepartmentService } from "./Department.service"

describe("departmentService", () => {
  let db: { department: any }
  let service: ReturnType<typeof DepartmentService>

  beforeEach(() => {
    db = {
      department: {
        count: vi.fn().mockResolvedValue(1),
        create: vi
          .fn()
          .mockResolvedValue({
            group_number: "GN2",
            id: "2",
            name: "Department 2",
          }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        findFirst: vi
          .fn()
          .mockResolvedValue({
            classrooms: [],
            gradeLevels: [],
            group_number: "GN1",
            id: "1",
            name: "Department 1",
          }),
        findMany: vi
          .fn()
          .mockResolvedValue([
            {
              classrooms: [],
              gradeLevels: [],
              group_number: "GN1",
              id: "1",
              name: "Department 1",
            },
          ]),
        update: vi
          .fn()
          .mockResolvedValue({
            classrooms: [],
            gradeLevels: [],
            group_number: "GN1-U",
            id: "1",
            name: "Department 1 Updated",
          }),
      },
    }
    service = DepartmentService({ db: db as unknown as PrismaClient })
  })

  it("should count departments", async () => {
    const count = await service.count()
    expect(count).toBe(1)
    expect(db.department.count).toHaveBeenCalled()
  })

  it("should get all departments", async () => {
    const departments = await service.getAll()
    expect(departments.length).toBeGreaterThan(0)
    expect(db.department.findMany).toHaveBeenCalled()
  })

  it("should get department by id", async () => {
    const department = await service.getById("1")
    expect(department).toBeTruthy()
    expect(db.department.findFirst).toHaveBeenCalledWith({
      include: {
        classrooms: {
          include: {
            grade_level: true,
          },
        },
      },
      where: { id: "1" },
    })
  })

  it("should get one department by param", async () => {
    const department = await service.getOne({ name: "Department 1" })
    expect(department).toBeTruthy()
    expect(db.department.findFirst).toHaveBeenCalledWith({
      include: {
        classrooms: {
          include: {
            grade_level: true,
          },
        },
      },
      where: { name: "Department 1" },
    })
  })

  it("should create a department", async () => {
    const data = {
      group_number: "GN2",
      name: "Department 2",
    }
    const department = await service.onCreate(data)
    expect(department).toBeTruthy()
    expect(db.department.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a department", async () => {
    const department = await service.onDelete("1")
    expect(department).toBeTruthy()
    expect(db.department.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a department", async () => {
    const data = { name: "Department 1 Updated" }
    const department = await service.onUpdate("1", data)
    expect(department).toBeTruthy()
    expect(db.department.update).toHaveBeenCalledWith({ data, where: { id: "1" } })
  })
})
