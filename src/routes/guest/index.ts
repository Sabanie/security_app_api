import { Router } from "express";

import { verifyToken } from "../../midlleware/verifyToken.js";
import {
  createGuest,
  getGuests,
  getGuestByPicId,
  approveGuestById,
  inActiveGuestById,
  updateGuestItems,
  getGuestById,
} from "../../controllers/guest.js";

const router = Router();

// CREATE
router.post("/", createGuest);

// READ ALL
router.get("/", verifyToken, getGuests);

// READ by pic Id
router.get("/mine", verifyToken, getGuestByPicId);

// ambil data tamu berdasarkan id tamu
router.get("/:id", verifyToken, getGuestById);

// ambil data tamu by id lanjut update itemname,quantity dan descript
router.put("/:id", verifyToken, updateGuestItems);

// approval tamu by pic Id
router.put("/:id/approve", verifyToken, approveGuestById);

// approval tamu by pic Id
router.put("/:id/inactive", verifyToken, inActiveGuestById);

export default router;
