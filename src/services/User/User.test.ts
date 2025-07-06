import { describe, it, expect, vi, beforeEach } from "vitest";
import { UserService } from "./User.service";
import type { PrismaClient, User, Role } from "@prisma/client";

describe("UserService", () => {
  let db: { user: any };
  let service: ReturnType<typeof UserService>;

  beforeEach(() => {
    db = {
      user: {
        count: vi.fn().mockResolvedValue(1),
        findMany: vi
          .fn()
          .mockResolvedValue([
            {
              id: "1",
              fname: "John",
              lastname: "Doe",
              username: "johndoe",
              password: "pass",
              email: "john@example.com",
              role: "USER",
              branchId: "b1",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]),
        findFirst: vi
          .fn()
          .mockResolvedValue({
            id: "1",
            fname: "John",
            lastname: "Doe",
            username: "johndoe",
            password: "pass",
            email: "john@example.com",
            role: "USER",
            branchId: "b1",
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        create: vi
          .fn()
          .mockResolvedValue({
            id: "2",
            fname: "Jane",
            lastname: "Smith",
            username: "janesmith",
            password: "pass",
            email: "jane@example.com",
            role: "USER",
            branchId: "b1",
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        update: vi
          .fn()
          .mockResolvedValue({
            id: "1",
            fname: "John",
            lastname: "Doe",
            username: "johndoe",
            password: "pass",
            email: "john@example.com",
            role: "USER",
            branchId: "b1",
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
      },
    };
    service = UserService({ db: db as unknown as PrismaClient });
  });

  it("should count users", async () => {
    const count = await service.count();
    expect(count).toBe(1);
    expect(db.user.count).toHaveBeenCalled();
  });

  it("should get all users", async () => {
    const users = await service.getAll();
    expect(users.length).toBeGreaterThan(0);
    expect(db.user.findMany).toHaveBeenCalled();
  });

  it("should get user by id", async () => {
    const user = await service.getById("1");
    expect(user).toBeTruthy();
    expect(db.user.findFirst).toHaveBeenCalledWith({ where: { id: "1" } });
  });

  it("should get one user by param", async () => {
    const user = await service.getOne({ username: "johndoe" });
    expect(user).toBeTruthy();
    expect(db.user.findFirst).toHaveBeenCalledWith({
      where: { username: "johndoe" },
    });
  });

  it("should create a user", async () => {
    const data = {
      fname: "Jane",
      lastname: "Smith",
      username: "janesmith",
      password: "pass",
      email: "jane@example.com",
      role: "USER" as Role,
      branchId: "b1",
      createdAt: new Date(),
      updatedAt: new Date(),
      branch: { connect: { id: "b1" } },
    };
    const user = await service.onCreate(data);
    expect(user).toBeTruthy();
    expect(db.user.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        fname: "Jane",
        lastname: "Smith",
        username: "janesmith",
        email: "jane@example.com",
        role: "USER",
        branchId: "b1",
      }),
    });
  });

  it("should delete a user", async () => {
    const user = await service.onDelete("1");
    expect(user).toBeTruthy();
    expect(db.user.delete).toHaveBeenCalledWith({ where: { id: "1" } });
  });

  it("should update a user", async () => {
    const data = { fname: "John" };
    const user = await service.onUpdate("1", data);
    expect(user).toBeTruthy();
    expect(db.user.update).toHaveBeenCalledWith({ data, where: { id: "1" } });
  });
});
