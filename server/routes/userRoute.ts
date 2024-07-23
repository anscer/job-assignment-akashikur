import { Router } from "express";
import { login, register } from "../controllers/user.controller";

const router = Router();

// Register a new user
router.post("/register", register);

// Login
router.post("/login", login);

export default router;
