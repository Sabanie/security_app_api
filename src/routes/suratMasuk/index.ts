// routes/suratMasukRoutes.ts
import { Router } from "express";
import {
  createSuratMasuk,
  getAllSuratMasuk,
  getSuratMasukByPicId,
  updateSuratMasuk,
} from "../../controllers/suratMasuk";
import { verifyToken } from "../../midlleware/verifyToken";

const router = Router();

router.post("/", verifyToken, createSuratMasuk);
router.get("/", verifyToken, getAllSuratMasuk);
router.get("/mine", verifyToken, getSuratMasukByPicId);
router.put("/:id", verifyToken, updateSuratMasuk);

export default router;
