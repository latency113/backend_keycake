import { Elysia, t } from "elysia"
import { jwtConfig } from "@/configure/jwt"
import { authHook } from "@/middleware/auth"
import DatabaseContext from "@/repositories/prisma"
import { AuthService } from "./auth.service"

const LoginSchema = t.Object({
  username: t.String(),
  password: t.String(),
})

export const authController = new Elysia()
  .use(jwtConfig)
  .group("/auth", app =>
    app
      .post(
        "/login",
        async ({ body, jwt }) => {
          const authService = AuthService({ db: DatabaseContext })
          const user = await authService.login(body)
          const token = await jwt.sign({ id: user.id, role: user.role })

          return { token }
        },
        {
          body: LoginSchema,
          detail: {
            description:
              "Login with username and password to get a JWT token. Then, click the \"Authorize\" button and enter `Bearer <token>` to access protected endpoints.",
            tags: ["Auth"],
          },
        },
      )
      .get(
        "/me",
        (ctx) => {
          const user = (ctx as any).user
          const set = (ctx as any).set
          if (!user) {
            set.status = 401
            return { message: "Unauthorized" }
          }
          return { user }
        },
        {
          beforeHandle: [authHook],
          detail: {
            description:
              "Requires authentication. Use the token from the login endpoint.",
            security: [{ bearerAuth: [] }],
            tags: ["Auth"],
          },
        },
      ))
