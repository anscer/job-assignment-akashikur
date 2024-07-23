import { Router } from "express";
import { auth } from "../middlewares/Auth";
import {
  createState,
  deleteState,
  getStates,
  updateState,
} from "../controllers/state.controller";

const router = Router();

router.post("/createStats", auth, createState);
router.get("/", getStates);
router.put("/:id", auth, updateState);
router.delete("/:id", auth, deleteState);

export default router;
