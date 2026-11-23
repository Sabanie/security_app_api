import { Router } from "express";
import { verifyAccessToken } from "../../midlleware/verifyToken";
import {
  createAbsensi,
  getAbsensiById,
  getAllAbsensi,
  updateAbsensi,
  deleteAbsensi,
  absensiKeluar,
  absensiMonthlyByWeek,
  exportPDF,
} from "../../controllers/absensi";

const router = Router();
router.post("/", verifyAccessToken, createAbsensi);
router.get("/", verifyAccessToken, getAllAbsensi);
router.get("/export-pdf", verifyAccessToken, exportPDF);
router.get("/:id", verifyAccessToken, getAbsensiById);
router.patch("/absensi-keluar/:id", verifyAccessToken, absensiKeluar);
router.put("/:id", verifyAccessToken, updateAbsensi);
// 📊 route baru: jumlah guest per minggu dalam bulan
router.get("/stats/monthly-weeks", verifyAccessToken, absensiMonthlyByWeek);
router.delete("/:id", verifyAccessToken, deleteAbsensi);

export default router;
