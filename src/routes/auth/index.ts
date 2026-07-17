import { Router } from "express";
import {
  login,
  logout,
  refreshToken,
  meController,
  register,
} from "../../controllers/auth.js";
import { verifyToken } from "../../midlleware/verifyToken.js";

const router = Router();

// POST /login → login
router.post("/register", register);

// POST /login → login
router.post("/login", login);

// POST /token => token baru
router.get("/token", verifyToken, refreshToken);

// POST /token => token baru
router.get("/me", verifyToken, meController);

// POST /logout => logout
router.delete("/logout", verifyToken, logout);

export default router;
