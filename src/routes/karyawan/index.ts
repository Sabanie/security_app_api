import { Router } from "express";
import { verifyToken } from "../../midlleware/verifyToken";
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
router.get("/", verifyToken, getAllKaryawan);
// update
router.put("/:id", verifyToken, updateKaryawan);
// delete
router.delete("/:id", verifyToken, deleteKaryawan);

export default router;
