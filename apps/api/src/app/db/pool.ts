import Pool from 'pg-pool'
import { env } from '../schemas/env.schema.ts'


const pool = new Pool({
  database: env.DATABASE_NAME,
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  ssl: true
})

