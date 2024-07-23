import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const secretKey = "your_secret_key";

declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send("Unauthorized");
  try {
    const verify = jwt.verify(token, secretKey);
    req.user = verify;
    next();
  } catch (error) {
    return res.status(403).json({
      status: 403,
      message: "Invalid token. Please log in again.",
      data: error,
    });
  }
};
