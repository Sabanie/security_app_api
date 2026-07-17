import { Router } from "express";
import {
  createSuratKeluar,
  getAllSuratKeluar,
  getSuratKeluarByPicId,
  updateSuratKeluar,
  getMailById,
  updateMailItems,
} from "../../controllers/suratKeluar.js";
import { verifyToken } from "../../midlleware/verifyToken.js";

const router = Router();

router.post("/", verifyToken, createSuratKeluar);
router.get("/", verifyToken, getAllSuratKeluar);
router.get("/mine", verifyToken, getSuratKeluarByPicId);
router.get("/id", verifyToken, getMailById);
router.put("/:id", verifyToken, updateMailItems);
router.put("/:id/isdelivered", verifyToken, updateSuratKeluar);

export default router;
