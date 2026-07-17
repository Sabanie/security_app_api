import { Router } from "express";
import { getUsers, getUsersDs, getUsersDm } from "../../controllers/user";

const router = Router();

// READ ALL (hanya id dan name)
router.get("/", getUsers);

// READ ds8 (hanya id dan name)
router.get("/ds8", getUsersDs);

// READ deltamas (hanya id dan name)
router.get("/deltamas", getUsersDm);

export default router;
