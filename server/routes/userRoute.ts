import { Router } from "express";
import { register } from "../controllers/user.controller";
import passport from "passport";

const router = Router();

// Register a new user
router.post("/register", register);

// Login
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Logged in successfully" });
});
export default router;
