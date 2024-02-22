import { z } from "zod"

const email = z.string().includes("@", { message: "Email must include @" })
const password = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .refine(value => /[0-9]/.test(value), {
    message: "Password must include at least one number",
  })
const username = z
  .string()
  .min(3, { message: "Username must be at least 3 characters long" })

export const SignUpSchema = z.object({ email, password, username })
