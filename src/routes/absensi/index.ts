import { Router } from "express";
import {
  createAbsensi,
  getAbsensiById,
  getAllAbsensi,
  updateAbsensi,
  deleteAbsensi,
  absensiKeluar,
} from "../../controllers/absensi";

const router = Router();
router.post("/", createAbsensi);
router.get("/", getAllAbsensi);
router.get("/:id", getAbsensiById);
router.patch("/absensi-keluar/:id", absensiKeluar);
router.put("/:id", updateAbsensi);
router.delete("/:id", deleteAbsensi);

export default router;
