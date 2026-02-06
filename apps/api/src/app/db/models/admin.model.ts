import { User } from "./user.model";

export interface Admin {
  profile: User,
  canEditSupply: boolean,
  canGenEmail: boolean,
}
