import type { Request, Response } from "express";
import { prisma } from "../prisma";
import type { MyJwtPayload } from "../types/jwtPayload";

interface AuthRequest extends Request {
  user?: MyJwtPayload;
}
// MENAMBAHKAN TAMU

export const createGuest = async (req: Request, res: Response) => {
  try {
    const {
      name,
      company,
      phone,
      plateNumber,
      purpose,
      identity,
      plant,
      itemName,
      quantity,
      description,
      isActive = false,
      isAprove = false,
      picId,
    } = req.body;

    // Validasi field wajib
    if (
      !name ||
      !company ||
      !phone ||
      !plateNumber ||
      !purpose ||
      !identity ||
      !plant
    ) {
      return res.status(400).json({
        success: false,
        error: "Field wajib belum lengkap!",
      });
    }

    // Simpan data tamu baru
    const newGuest = await prisma.guest.create({
      data: {
        name,
        company,
        phone,
        plateNumber,
        purpose,
        identity,
        plant,
        itemName,
        quantity,
        description,
        isActive,
        isAprove,
        ...(picId && { pic: { connect: { id: picId } } }), // relasi ke User
      },
    });

    return res.status(201).json({
      success: true,
      message: "Data tamu berhasil ditambahkan!",
      data: newGuest,
    });
  } catch (error) {
    console.error("Error creating guest:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat menambahkan data tamu!",
    });
  }
};

// AMBIL DATA SEMUA TAMU + SEARCH +PAGINATION

export const getGuests = async (req: Request, res: Response) => {
  try {
    const { plant, search = "", page = "1", limit = "7" } = req.query;

    const currentPage = parseInt(page as string, 10);
    const perPage = parseInt(limit as string, 10);

    const whereClause: any = {
      OR: [
        { name: { contains: search as string, mode: "insensitive" } },
        { company: { contains: search as string, mode: "insensitive" } },
      ],
    };

    // filter berdasarkan plant jika ada
    if (plant) {
      whereClause.plant = plant;
    }

    const guests = await prisma.guest.findMany({
      include: {
        pic: true,
      },
      where: whereClause,
      skip: (currentPage - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.guest.count({ where: whereClause });

    res.json({
      success: true,
      data: guests,
      meta: {
        total,
        page: currentPage,
        limit: perPage,
      },
    });
  } catch (error) {
    console.error("Error fetching guests:", error);
    res.status(500).json({ success: false, error: "Failed to fetch guests" });
  }
};

// AMBIL DATA DAN JUMLAH TAMU BERDASARKAN PIC ID tujuan
export const getGuestByPicId = async (req: AuthRequest, res: Response) => {
  try {
    const PicId = req.user?.id; // sesuaikan dengan cara kamu simpan session

    if (!PicId) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    const guests = await prisma.guest.findMany({
      include: {
        pic: true,
      },
      where: {
        picId: PicId,
        isAprove: false,
      },
    });
    if (!guests) return res.status(404).json({ error: "Tamu tidak ditemukan" });
    res.json(guests);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil surat masuk" });
  }
};

// UPDATE STATUS ISAPPROVE DARI FALSE KE TRUE
export const approveGuestById = async (req: AuthRequest, res: Response) => {
  try {
    // Ambil id tamu dari parameter URL
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "Guest ID diperlukan" });
    }

    // Update status isApprove menjadi true untuk tamu dengan id tertentu
    const updatedGuest = await prisma.guest.update({
      where: { id }, // id harus unique
      data: { isAprove: true },
    });

    return res.json({
      success: true,
      data: updatedGuest,
    });
  } catch (error) {
    console.error("Error approving guest:", error);
    return res
      .status(500)
      .json({ success: false, error: "Gagal mengubah status isApprove" });
  }
};

// UPDATE STATUS ISACTIVE DARI TRUE KE FALSE
export const inActiveGuestById = async (req: AuthRequest, res: Response) => {
  try {
    // Ambil id tamu dari parameter URL
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "Guest ID diperlukan" });
    }

    // Update status isApprove menjadi true untuk tamu dengan id tertentu
    const updatedGuest = await prisma.guest.update({
      where: { id }, // id harus unique
      data: { isActive: false },
    });

    return res.json({
      success: true,
      data: updatedGuest,
    });
  } catch (error) {
    console.error("Error approving guest:", error);
    return res
      .status(500)
      .json({ success: false, error: "Gagal mengubah status isApprove" });
  }
};

// update items  barang bawaan
export const updateGuestItems = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;
    const { itemName, quantity, description, isActive } = req.body;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "ID wajib diberikan" });
    }
    // Ambil data lama dulu
    const existingGuest = await prisma.guest.findUnique({ where: { id } });
    if (!existingGuest) {
      return res
        .status(404)
        .json({ success: false, error: "Guest tidak ditemukan" });
    }

    // Update hanya field yang dikirim, kalau kosong pakai nilai lama
    const updatedGuest = await prisma.guest.update({
      where: { id },
      data: {
        itemName: itemName ?? existingGuest.itemName,
        quantity: quantity ?? existingGuest.quantity,
        description: description ?? existingGuest.description,
        isActive: false,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Data tamu berhasil diupdate!",
      data: updatedGuest,
    });
  } catch (error) {
    console.error("Error updating guest items:", error);
    return res.status(500).json({
      success: false,
      error: "Terjadi kesalahan saat mengupdate data tamu!",
    });
  }
};

// GET /api/guests/:id
export const getGuestById = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "ID wajib diberikan" });
    }

    const guest = await prisma.guest.findUnique({ where: { id } });

    if (!guest) {
      return res
        .status(404)
        .json({ success: false, error: "Guest tidak ditemukan" });
    }

    return res.json({ success: true, data: guest });
  } catch (error) {
    console.error("Error fetching guest:", error);
    return res
      .status(500)
      .json({ success: false, error: "Terjadi kesalahan server" });
  }
};
