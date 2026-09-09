// routes/suratMasukRoutes.ts
import { Router } from "express";
import {
  createSuratMasuk,
  getAllSuratMasuk,
  getSuratMasukByPicId,
  updateSuratMasuk,
  suratMasukMonthlyByWeek,
} from "../../controllers/suratMasuk";
import { verifyToken } from "../../midlleware/verifyToken";

const router = Router();

router.post("/", verifyToken, createSuratMasuk);
router.get("/", verifyToken, getAllSuratMasuk);
router.get("/mine", verifyToken, getSuratMasukByPicId);
router.put("/:id", verifyToken, updateSuratMasuk);
router.get("/stats/monthly-weeks", verifyToken, suratMasukMonthlyByWeek);

export default router;
