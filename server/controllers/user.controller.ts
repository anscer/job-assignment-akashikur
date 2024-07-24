import User from "../models/Users";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const secretKey = "your_secret_key";

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

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).send({ message: "User does't exists" });
//     }

//     const ispasswordSame = await bcrypt.compare(password, user.password);

//     if (!ispasswordSame) {
//       return res.status(400).send({ message: "password does't match" });
//     }

//     const token = jwt.sign(
//       { id: user._id, username: user.username },
//       "your_secret_key",
//       { expiresIn: "1h" }
//     );
//     return res.status(200).json({ token: token, message: "User logged In" });
//   } catch (err) {
//     const error = err as Error;
//     res.status(400).send(error.message);
//   }
// };
// export const login = async (req: Request, res: Response) => {
//   res.json({ message: "Logged in successfully" });
// };
