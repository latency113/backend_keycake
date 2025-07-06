import { Elysia } from "elysia"
import { jwtConfig } from "@/configure/jwt"

export async function authHook({ headers, jwt, set }) {
  console.log("--- Auth Hook Running ---")
  const authorization = headers.authorization
  console.log("DEBUG: Raw Authorization Header:", authorization)

  if (!authorization || !authorization.startsWith("Bearer ")) {
    console.log("No or invalid Bearer token format.")
    set.status = 401
    throw new Error("Unauthorized")
  }

  // Use regex to remove all 'Bearer ' prefixes and trim whitespace
  const token = authorization.replace(/Bearer\s+/gi, "").trim()
  console.log("DEBUG: Extracted Token (after robust cleaning):", token)

  try {
    const decoded = await jwt.verify(token)
    console.log("Decoded Token Payload:", decoded)

    if (!decoded) {
      console.log("Token verification failed, decoded is falsy.")
      set.status = 401
      throw new Error("Unauthorized")
    }

    // This hook doesn't return a value, it just adds to the context if successful
    // or throws an error if not.
    return { user: decoded }
  }
  catch (error) {
    console.error("Error during token verification:", error.message)
    set.status = 401
    throw new Error("Unauthorized")
  }
}

export const authMiddleware = new Elysia()
  .use(jwtConfig)
  .derive(authHook)
