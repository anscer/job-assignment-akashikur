import User from "../models/Users";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username: username,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "User registered successfully", data: newUser });
  } catch (err) {
    const error = err as Error;
    res.status(400).send(error.message);
  }
};
