// routes/suratMasukRoutes.ts
import { Router } from "express";
import {
  createSuratMasuk,
  getAllSuratMasuk,
  getSuratMasukByPicId,
  updateSuratMasuk,
  suratMasukMonthlyByWeek,
  suratMasukToday,
} from "../../controllers/suratMasuk";
import { verifyAccessToken } from "../../midlleware/verifyToken";

const router = Router();

router.post("/", verifyAccessToken, createSuratMasuk);
router.get("/", verifyAccessToken, getAllSuratMasuk);
router.get("/mine", verifyAccessToken, getSuratMasukByPicId);
router.put("/:id", verifyAccessToken, updateSuratMasuk);
router.get("/stats/monthly-weeks", verifyAccessToken, suratMasukMonthlyByWeek);
router.get("/stats/today", verifyAccessToken, suratMasukToday);

export default router;
