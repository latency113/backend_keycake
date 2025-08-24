import type { PrismaClient, Role } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { UserService } from "./User.service"

describe("userService", () => {
  let db: { user: any }
  let service: ReturnType<typeof UserService>

  beforeEach(() => {
    db = {
      user: {
        count: vi.fn().mockResolvedValue(1),
        create: vi
          .fn()
          .mockResolvedValue({
            departmentId: "b1",
            createdAt: new Date(),
            email: "jane@example.com",
            fname: "Jane",
            id: "2",
            lastname: "Smith",
            password: "pass",
            role: "USER",
            updatedAt: new Date(),
            username: "janesmith",
          }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        findFirst: vi
          .fn()
          .mockResolvedValue({
            departmentId: "b1",
            createdAt: new Date(),
            email: "john@example.com",
            fname: "John",
            id: "1",
            lastname: "Doe",
            password: "pass",
            role: "USER",
            updatedAt: new Date(),
            username: "johndoe",
          }),
        findMany: vi
          .fn()
          .mockResolvedValue([
            {
              departmentId: "b1",
              createdAt: new Date(),
              email: "john@example.com",
              fname: "John",
              id: "1",
              lastname: "Doe",
              password: "pass",
              role: "USER",
              updatedAt: new Date(),
              username: "johndoe",
            },
          ]),
        update: vi
          .fn()
          .mockResolvedValue({
            departmentId: "b1",
            createdAt: new Date(),
            email: "john@example.com",
            fname: "John",
            id: "1",
            lastname: "Doe",
            password: "pass",
            role: "USER",
            updatedAt: new Date(),
            username: "johndoe",
          }),
      },
    }
    service = UserService({ db: db as unknown as PrismaClient })
  })

  it("should count users", async () => {
    const count = await service.count()
    expect(count).toBe(1)
    expect(db.user.count).toHaveBeenCalled()
  })

  it("should get all users", async () => {
    const users = await service.getAll()
    expect(users.length).toBeGreaterThan(0)
    expect(db.user.findMany).toHaveBeenCalled()
  })

  it("should get user by id", async () => {
    const user = await service.getById("1")
    expect(user).toBeTruthy()
    expect(db.user.findFirst).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should get one user by param", async () => {
    const user = await service.getOne({ username: "johndoe" })
    expect(user).toBeTruthy()
    expect(db.user.findFirst).toHaveBeenCalledWith({
      where: { username: "johndoe" },
    })
  })

  it("should create a user", async () => {
    const data = {
      department: { connect: { id: "b1" } },
      departmentId: "b1",
      createdAt: new Date(),
      email: "jane@example.com",
      fname: "Jane",
      lastname: "Smith",
      password: "pass",
      role: "USER" as Role,
      updatedAt: new Date(),
      username: "janesmith",
    }
    const user = await service.onCreate(data)
    expect(user).toBeTruthy()
    expect(db.user.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        departmentId: "b1",
        email: "jane@example.com",
        fname: "Jane",
        lastname: "Smith",
        role: "USER",
        username: "janesmith",
      }),
    })
  })

  it("should delete a user", async () => {
    const user = await service.onDelete("1")
    expect(user).toBeTruthy()
    expect(db.user.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a user", async () => {
    const data = { fname: "John" }
    const user = await service.onUpdate("1", data)
    expect(user).toBeTruthy()
    expect(db.user.update).toHaveBeenCalledWith({ data, where: { id: "1" } })
  })
})