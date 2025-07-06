import type { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { NewError } from "@/helper/error"

export type AuthDependencies = {
  db: PrismaClient
}

export function AuthService({ db }: AuthDependencies) {
  return {
    async login(credentials: any) {
      const { password, username } = credentials
      const user = await db.user.findFirst({ where: { username } })

      if (!user) {
        throw NewError("Invalid credentials", "INVALID_CREDENTIALS", 401)
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        throw NewError("Invalid credentials", "INVALID_CREDENTIALS", 401)
      }

      return user
    },
    async register(userInfo: any) {
      // TODO: Implement register logic
      return { message: "User registered successfully" }
    },
    async verifyToken(token: string) {
      // TODO: Implement token verification

    },
  }
}
