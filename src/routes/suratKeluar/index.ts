import { Router } from "express";
import {
  createSuratKeluar,
  getAllSuratKeluar,
  getSuratKeluarByPicId,
  updateSuratKeluar,
  getMailById,
  updateMailItems,
  suratKeluarMonthlyByWeek,
} from "../../controllers/suratKeluar";
import { verifyToken } from "../../midlleware/verifyToken";

const router = Router();

router.post("/", verifyToken, createSuratKeluar);
router.get("/", verifyToken, getAllSuratKeluar);
router.get("/mine", verifyToken, getSuratKeluarByPicId);
router.get("/id", verifyToken, getMailById);
router.put("/:id", verifyToken, updateMailItems);
router.put("/:id/isdelivered", verifyToken, updateSuratKeluar);
router.get("/stats/monthly-weeks", verifyToken, suratKeluarMonthlyByWeek);

export default router;
