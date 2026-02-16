import z from "zod";


const userSchema = z.object({
  username: z.string().max(20),
  email: z.email(),
  password: z.string().min(6)
})

export default userSchema
