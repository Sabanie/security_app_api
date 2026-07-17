// routes/suratMasukRoutes.ts
import { Router } from "express";
import {
  createSuratMasuk,
  getAllSuratMasuk,
  getSuratMasukByPicId,
  updateSuratMasuk,
} from "../../controllers/suratMasuk.js";
import { verifyToken } from "../../midlleware/verifyToken.js";

const router = Router();

router.post("/", verifyToken, createSuratMasuk);
router.get("/", verifyToken, getAllSuratMasuk);
router.get("/mine", verifyToken, getSuratMasukByPicId);
router.put("/:id", verifyToken, updateSuratMasuk);

export default router;
