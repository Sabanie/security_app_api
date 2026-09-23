import { Router } from "express";
import {
  login,
  logout,
  refreshToken,
  meController,
  register,
} from "../../controllers/auth";
import {
  verifyAccessToken,
  verifyRefreshToken,
} from "../../midlleware/verifyToken";

const router = Router();

// POST /login → login
router.post("/register", register);

// POST /login → login
router.post("/login", login);

// POST /token => token baru
router.get("/token", verifyRefreshToken, refreshToken);

// POST /token => token baru
router.get("/me", verifyAccessToken, meController);

// POST /logout => logout
router.delete("/logout", verifyAccessToken, logout);

export default router;
