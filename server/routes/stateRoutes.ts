import { Router } from "express";
import {
  createState,
  deleteState,
  getStates,
  updateState,
} from "../controllers/state.controller";
import { isAuthenticated } from "../middlewares/Auth";

const router = Router();

router.post("/createStats", isAuthenticated, createState);
router.get("/", getStates);
router.put("/:id", updateState);
router.delete("/:id", deleteState);

export default router;
