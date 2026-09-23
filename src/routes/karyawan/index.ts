import { Router } from "express";
import { verifyAccessToken } from "../../midlleware/verifyToken";
import {
  createKaryawan,
  deleteKaryawan,
  getAllKaryawan,
  updateKaryawan,
} from "../../controllers/karyawan";

const router = Router();

// create
router.post("/", createKaryawan);
// get all
router.get("/", verifyAccessToken, getAllKaryawan);
// update
router.put("/:id", verifyAccessToken, updateKaryawan);
// delete
router.delete("/:id", verifyAccessToken, deleteKaryawan);

export default router;
