// types/express.d.ts
import { User } from "../models/Users";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
