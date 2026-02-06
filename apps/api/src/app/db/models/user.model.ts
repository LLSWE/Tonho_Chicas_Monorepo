export interface User {
  userId: string,
  username: string,
  email: string,
  passwordHash: string,
  isActive: boolean,
  createdAt: Date,
}
