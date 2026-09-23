import { Router } from "express";
import {
  createSuratKeluar,
  getAllSuratKeluar,
  getSuratKeluarByPicId,
  updateSuratKeluar,
  getMailById,
  updateMailItems,
  suratKeluarMonthlyByWeek,
  suratKeluarToday,
} from "../../controllers/suratKeluar";
import { verifyAccessToken } from "../../midlleware/verifyToken";

const router = Router();

router.post("/", verifyAccessToken, createSuratKeluar);
router.get("/", verifyAccessToken, getAllSuratKeluar);
router.get("/mine", verifyAccessToken, getSuratKeluarByPicId);
router.get("/id", verifyAccessToken, getMailById);
router.put("/:id", verifyAccessToken, updateMailItems);
router.put("/:id/isdelivered", verifyAccessToken, updateSuratKeluar);
router.get("/stats/monthly-weeks", verifyAccessToken, suratKeluarMonthlyByWeek);
router.get("/stats/today", verifyAccessToken, suratKeluarToday);

export default router;
