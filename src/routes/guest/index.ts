import { Router } from "express";

import { verifyAccessToken } from "../../midlleware/verifyToken";
import {
  createGuest,
  getGuests,
  getGuestByPicId,
  approveGuestById,
  inActiveGuestById,
  updateGuestItems,
  getGuestById,
  guestMonthlyByWeek,
  guestToday,
} from "../../controllers/guest";

const router = Router();

// CREATE
router.post("/", createGuest);

// READ ALL
router.get("/", verifyAccessToken, getGuests);

// READ by pic Id
router.get("/mine", verifyAccessToken, getGuestByPicId);

// ambil data tamu berdasarkan id tamu
router.get("/:id", verifyAccessToken, getGuestById);

// ambil data tamu by id lanjut update itemname,quantity dan descript
router.put("/:id", verifyAccessToken, updateGuestItems);

// approval tamu by pic Id
router.put("/:id/approve", verifyAccessToken, approveGuestById);

// approval tamu by pic Id
router.put("/:id/inactive", verifyAccessToken, inActiveGuestById);

// 📊 route baru: jumlah guest per minggu dalam bulan
router.get("/stats/monthly-weeks", verifyAccessToken, guestMonthlyByWeek);

// route jumlah tamu harian
router.get("/stats/today", verifyAccessToken, guestToday);
export default router;
