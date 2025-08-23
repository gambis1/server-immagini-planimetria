import { Router } from "express";
import { getCasa, createCasa } from "../services/casa.service.js";

const router = Router();

router.get("/:casa", getCasa);
router.post("/", createCasa);

export default router;
