import z from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),

  DATABASE_URL: z.url(),
  DATABASE_USER: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string()
})

export const env = envSchema.parse(process.env)
